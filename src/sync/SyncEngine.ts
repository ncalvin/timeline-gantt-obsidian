import { App, TFile, CachedMetadata } from 'obsidian';
import { Task, Milestone, TimelineItem, NoteMeta, HistoryEntry, TaskStatus } from '../models/types';
import { ProjectManager } from '../models/ProjectManager';

/**
 * Gerencia a sincronização bidirecional entre notas e linha do tempo
 */
export class SyncEngine {
	private app: App;
	private projectManager: ProjectManager;
	private syncInProgress: Set<string> = new Set();

	constructor(app: App, projectManager: ProjectManager) {
		this.app = app;
		this.projectManager = projectManager;
	}

	/**
	 * Extrai metadados da nota
	 */
	async extractNoteMeta(file: TFile): Promise<NoteMeta | null> {
		const cache = this.app.metadataCache.getFileCache(file);
		if (!cache?.frontmatter) return null;

		const fm = cache.frontmatter;
		return {
			timelineId: fm.timelineId,
			timelineType: fm.timelineType,
			timelineStart: fm.timelineStart,
			timelineEnd: fm.timelineEnd,
			timelineDate: fm.timelineDate,
			timelineStatus: fm.timelineStatus,
			timelineAssignee: fm.timelineAssignee,
			timelineLabels: fm.timelineLabels,
			timelineDependencies: fm.timelineDependencies,
			timelinePriority: fm.timelinePriority,
			timelineProgress: fm.timelineProgress,
		};
	}

	/**
	 * Atualiza os metadados de uma nota
	 */
	async updateNoteMeta(file: TFile, meta: Partial<NoteMeta>): Promise<void> {
		// Previne loop de sincronização
		if (this.syncInProgress.has(file.path)) return;
		this.syncInProgress.add(file.path);

		try {
			await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
				Object.assign(frontmatter, meta);
			});
		} finally {
			this.syncInProgress.delete(file.path);
		}
	}

	/**
	 * Sincroniza mudanças da nota para a linha do tempo
	 */
	async syncNoteToTimeline(file: TFile, projectId: string): Promise<boolean> {
		const meta = await this.extractNoteMeta(file);
		if (!meta?.timelineId) return false;

		const item = this.projectManager.getItem(projectId, meta.timelineId);
		if (!item) return false;

		let updates: Partial<Task | Milestone> = {};

		// Adiciona entrada ao histórico
		const historyEntry: HistoryEntry = {
			by: 'user',
			at: new Date().toISOString(),
			changes: 'Updated from note',
		};

		if (item.type === 'task' && meta.timelineType === 'task') {
			// Build taskUpdates from scratch
			const taskUpdates: Partial<Task> = {
				notePath: file.path,
			};
			if (meta.timelineStart) taskUpdates.start = meta.timelineStart;
			if (meta.timelineEnd) taskUpdates.end = meta.timelineEnd;
			if (meta.timelineStatus) taskUpdates.status = meta.timelineStatus as TaskStatus;
			if (meta.timelineAssignee) taskUpdates.assignee = meta.timelineAssignee;
			if (meta.timelineLabels) taskUpdates.labels = meta.timelineLabels;
			if (meta.timelineDependencies) taskUpdates.dependencies = meta.timelineDependencies;
			if (meta.timelinePriority) taskUpdates.priority = meta.timelinePriority;
			if (meta.timelineProgress !== undefined) taskUpdates.progress = meta.timelineProgress;

			// Calcula duração se start e end mudaram
			if (taskUpdates.start && taskUpdates.end) {
				const start = new Date(taskUpdates.start);
				const end = new Date(taskUpdates.end);
				const diffTime = Math.abs(end.getTime() - start.getTime());
				taskUpdates.durationDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
			}
			updates = taskUpdates;
		} else if (item.type === 'milestone' && meta.timelineType === 'milestone') {
			// Build milestoneUpdates from scratch
			const milestoneUpdates: Partial<Milestone> = {
				notePath: file.path,
			};
			if (meta.timelineDate) milestoneUpdates.date = meta.timelineDate;
			if (meta.timelineStatus && (meta.timelineStatus === 'pending' || meta.timelineStatus === 'completed')) {
				milestoneUpdates.status = meta.timelineStatus;
			}
			if (meta.timelineLabels) milestoneUpdates.labels = meta.timelineLabels;
			updates = milestoneUpdates;
		}

		updates.history = [...item.history, historyEntry];

		return this.projectManager.updateItem(projectId, meta.timelineId, updates);
	}

	/**
	 * Sincroniza mudanças da linha do tempo para a nota
	 */
	async syncTimelineToNote(projectId: string, itemId: string): Promise<boolean> {
		const item = this.projectManager.getItem(projectId, itemId);
		if (!item?.notePath) return false;

		const file = this.app.vault.getAbstractFileByPath(item.notePath);
		if (!(file instanceof TFile)) return false;

		const meta: Partial<NoteMeta> = {
			timelineId: item.id,
			timelineType: item.type,
			timelineLabels: item.labels,
		};

		if (item.type === 'task') {
			const task = item as Task;
			meta.timelineStart = task.start;
			meta.timelineEnd = task.end;
			meta.timelineStatus = task.status;
			meta.timelineAssignee = task.assignee;
			meta.timelineDependencies = task.dependencies;
			meta.timelinePriority = task.priority;
			meta.timelineProgress = task.progress;
		} else if (item.type === 'milestone') {
			const milestone = item as Milestone;
			meta.timelineDate = milestone.date;
			meta.timelineStatus = milestone.status;
		}

		await this.updateNoteMeta(file, meta);
		return true;
	}

	/**
	 * Cria uma nota a partir de um item da linha do tempo
	 */
	async createNoteFromItem(
		projectId: string,
		itemId: string,
		folderPath: string,
		template?: string
	): Promise<TFile | null> {
		const item = this.projectManager.getItem(projectId, itemId);
		if (!item) return null;

		// Gera nome do arquivo
		const fileName = `${item.title.replace(/[\\/:*?"<>|]/g, '_')}.md`;
		const filePath = `${folderPath}/${fileName}`;

		// Cria frontmatter
		const frontmatter: NoteMeta = {
			timelineId: item.id,
			timelineType: item.type,
			timelineLabels: item.labels,
		};

		if (item.type === 'task') {
			const task = item as Task;
			frontmatter.timelineStart = task.start;
			frontmatter.timelineEnd = task.end;
			frontmatter.timelineStatus = task.status;
			frontmatter.timelineAssignee = task.assignee;
			frontmatter.timelineDependencies = task.dependencies;
			frontmatter.timelinePriority = task.priority;
			frontmatter.timelineProgress = task.progress;
		} else if (item.type === 'milestone') {
			const milestone = item as Milestone;
			frontmatter.timelineDate = milestone.date;
			frontmatter.timelineStatus = milestone.status;
		}

		// Cria conteúdo da nota
		let content = '---\n';
		for (const [key, value] of Object.entries(frontmatter)) {
			if (value !== undefined) {
				if (Array.isArray(value)) {
					content += `${key}: [${value.map(v => `"${v}"`).join(', ')}]\n`;
				} else {
					content += `${key}: ${typeof value === 'string' ? `"${value}"` : value}\n`;
				}
			}
		}
		content += '---\n\n';
		content += `# ${item.title}\n\n`;

		if (template) {
			content += template;
		} else {
			content += '## Descrição\n\n';
			content += '## Notas\n\n';
		}

		// Cria arquivo
		const file = await this.app.vault.create(filePath, content);

		// Atualiza referência no item
		this.projectManager.updateItem(projectId, itemId, { notePath: file.path });

		return file;
	}

	/**
	 * Carrega todos os itens de notas existentes
	 */
	async loadProjectFromNotes(projectId: string, folderPath: string): Promise<void> {
		const files = this.app.vault.getMarkdownFiles()
			.filter(file => file.path.startsWith(folderPath));

		for (const file of files) {
			const meta = await this.extractNoteMeta(file);
			if (!meta?.timelineId || !meta.timelineType) continue;

			// Verifica se o item já existe
			const existing = this.projectManager.getItem(projectId, meta.timelineId);
			if (existing) {
				await this.syncNoteToTimeline(file, projectId);
			}
		}
	}

	/**
	 * Detecta mudanças em uma nota e sincroniza
	 */
	async onNoteModified(file: TFile, projectId: string): Promise<void> {
		if (this.syncInProgress.has(file.path)) return;

		await this.syncNoteToTimeline(file, projectId);
	}
}
