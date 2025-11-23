import { Plugin, TFile, Notice } from 'obsidian';
import { TimelineView, VIEW_TYPE_TIMELINE } from './views/TimelineView';
import { ProjectManager } from './models/ProjectManager';
import { SyncEngine } from './sync/SyncEngine';
import { TimelineSettings } from './models/types';
import { TimelineSettingsTab } from './settings/SettingsTab';
import { detectLanguage, getTranslations, SupportedLanguage } from './utils/i18n';
import type { Translations } from './utils/i18n';

const DEFAULT_SETTINGS: TimelineSettings = {
	defaultView: 'weeks',
	defaultProjectFolder: 'Projects',
	noteTemplate: '',
	taskTemplate: '',
	milestoneTemplate: '',
	autoSync: true,
	showWeekends: true,
	colorByLabel: {},
	dateFormat: 'YYYY-MM-DD',
	firstDayOfWeek: 1,
	language: detectLanguage(),
};

export default class TimelineGanttPlugin extends Plugin {
	settings: TimelineSettings = DEFAULT_SETTINGS;
	projectManager: ProjectManager = new ProjectManager();
	syncEngine: SyncEngine | null = null;
	t: Translations = getTranslations('en');

	async onload() {
		await this.loadSettings();
		
		// Load translations based on settings
		this.t = getTranslations(this.settings.language);

		// Inicializa o motor de sincronização
		this.syncEngine = new SyncEngine(this.app, this.projectManager);

		// Registra a view
		this.registerView(
			VIEW_TYPE_TIMELINE,
			(leaf) => new TimelineView(leaf, this.projectManager, this.t)
		);

		// Adiciona ribbon icon
		this.addRibbonIcon('calendar-range', this.t.plugin_name, () => {
			this.activateView();
		});

		// Adiciona comandos
		this.addCommand({
			id: 'open-timeline-view',
			name: this.t.cmd_open_timeline,
			callback: () => {
				this.activateView();
			}
		});

		this.addCommand({
			id: 'create-project',
			name: this.t.cmd_create_project,
			callback: () => {
				this.createProject();
			}
		});

		this.addCommand({
			id: 'import-project',
			name: this.t.cmd_import_project,
			callback: () => {
				this.importProject();
			}
		});

		// Monitora mudanças em arquivos para sincronização
		if (this.settings.autoSync) {
			this.registerEvent(
				this.app.vault.on('modify', (file) => {
					if (file instanceof TFile && file.extension === 'md') {
						this.onFileModified(file);
					}
				})
			);
		}

		// Adiciona tab de configurações
		this.addSettingTab(new TimelineSettingsTab(this.app, this));

		console.log('Timeline Gantt Plugin loaded');
	}

	onunload() {
		console.log('Timeline Gantt Plugin unloaded');
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
		this.updateTranslations();
	}

	async saveSettings() {
		await this.saveData(this.settings);
		this.updateTranslations();
	}
	
	updateTranslations() {
		this.t = getTranslations(this.settings.language);
	}

	async activateView() {
		const { workspace } = this.app;

		let leaf = workspace.getLeavesOfType(VIEW_TYPE_TIMELINE)[0];

		if (!leaf) {
			const rightLeaf = workspace.getRightLeaf(false);
			if (rightLeaf) {
				leaf = rightLeaf;
				await leaf.setViewState({
					type: VIEW_TYPE_TIMELINE,
					active: true,
				});
			}
		}

		if (leaf) {
			workspace.revealLeaf(leaf);
		}
	}

	async createProject() {
		const projectId = `proj-${Date.now()}`;
		const title = await this.promptForInput('Nome do Projeto', 'Novo Projeto');

		if (!title) return;

		const project = {
			projectId,
			title,
			items: [],
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
		};

		this.projectManager.saveProject(project);
		new Notice(`Projeto "${title}" criado com sucesso!`);

		// Recarrega a view e seleciona o projeto
		await this.activateView();
		
		// Seleciona o projeto recém-criado
		const leaves = this.app.workspace.getLeavesOfType(VIEW_TYPE_TIMELINE);
		if (leaves.length > 0) {
			const view = leaves[0].view as TimelineView;
			view.selectProject(projectId);
		}
	}

	async importProject() {
		const input = document.createElement('input');
		input.type = 'file';
		input.accept = '.json';

		input.onchange = async (e: any) => {
			const file = e.target.files[0];
			if (!file) return;

			const reader = new FileReader();
			reader.onload = (event: any) => {
				const json = event.target.result;
				const success = this.projectManager.importProject(json);

				if (success) {
					new Notice('Projeto importado com sucesso!');
					this.activateView();
				} else {
					new Notice('Erro ao importar projeto. Verifique o arquivo JSON.');
				}
			};

			reader.readAsText(file);
		};

		input.click();
	}

	async onFileModified(file: TFile) {
		// Verifica se o arquivo tem metadados de timeline
		const cache = this.app.metadataCache.getFileCache(file);
		if (!cache?.frontmatter?.timelineId) return;

		// Sincroniza com todos os projetos (pode ser otimizado)
		const projects = this.projectManager.getProjects();
		for (const project of projects) {
			if (this.syncEngine) {
				await this.syncEngine.onNoteModified(file, project.projectId);
			}
		}
	}

	async promptForInput(title: string, defaultValue: string = ''): Promise<string | null> {
		return new Promise((resolve) => {
			const modal = document.createElement('div');
			modal.className = 'modal-container mod-dim';
			modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000;';

			const content = document.createElement('div');
			content.className = 'modal';
			content.style.cssText = 'background: var(--background-primary); padding: 20px; border-radius: 8px; max-width: 400px; width: 90%;';

			const heading = document.createElement('h2');
			heading.textContent = title;
			content.appendChild(heading);

			const input = document.createElement('input');
			input.type = 'text';
			input.value = defaultValue;
			input.style.cssText = 'width: 100%; margin: 10px 0; padding: 8px; border: 1px solid var(--background-modifier-border); border-radius: 4px;';
			content.appendChild(input);

			const buttons = document.createElement('div');
			buttons.style.cssText = 'display: flex; justify-content: flex-end; gap: 10px; margin-top: 15px;';

			const cancelBtn = document.createElement('button');
			cancelBtn.textContent = 'Cancelar';
			cancelBtn.onclick = () => {
				modal.remove();
				resolve(null);
			};

			const okBtn = document.createElement('button');
			okBtn.textContent = 'OK';
			okBtn.className = 'mod-cta';
			okBtn.onclick = () => {
				modal.remove();
				resolve(input.value);
			};

			buttons.appendChild(cancelBtn);
			buttons.appendChild(okBtn);
			content.appendChild(buttons);

			modal.appendChild(content);
			document.body.appendChild(modal);

			input.focus();
			input.select();

			input.onkeydown = (e) => {
				if (e.key === 'Enter') {
					okBtn.click();
				} else if (e.key === 'Escape') {
					cancelBtn.click();
				}
			};
		});
	}
}
