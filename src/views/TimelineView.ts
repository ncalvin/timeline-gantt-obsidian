import { ItemView, WorkspaceLeaf } from 'obsidian';
import { Project, Task, Milestone, TimelineFilters } from '../models/types';
import { ProjectManager } from '../models/ProjectManager';
import { Translations } from '../utils/i18n';
import * as d3 from 'd3';

export const VIEW_TYPE_TIMELINE = 'timeline-gantt-view';

/**
 * View da linha do tempo Gantt
 */
export class TimelineView extends ItemView {
	private projectManager: ProjectManager;
	private currentProject: Project | null = null;
	private filters: TimelineFilters = {};
	private svg: any;
	private zoom: any;
	public t: Translations;
	private projectSelectElement: HTMLSelectElement | null = null;
	private onProjectsChanged: (() => Promise<void>) | null = null;

	constructor(
		leaf: WorkspaceLeaf, 
		projectManager: ProjectManager, 
		translations: Translations,
		onProjectsChanged?: () => Promise<void>
	) {
		super(leaf);
		this.projectManager = projectManager;
		this.t = translations;
		this.onProjectsChanged = onProjectsChanged || null;
	}

	getViewType(): string {
		return VIEW_TYPE_TIMELINE;
	}

	getDisplayText(): string {
		return this.t.plugin_name;
	}

	getIcon(): string {
		return 'calendar-range';
	}

	async onOpen(): Promise<void> {
		const container = this.containerEl.children[1];
		container.empty();
		container.addClass('timeline-gantt-view');

		this.renderToolbar(container);
		this.renderTimeline(container);
	}

	async onClose(): Promise<void> {
		// Cleanup
	}

	/**
	 * Seleciona um projeto e atualiza a visualização
	 */
	public selectProject(projectId: string): void {
		this.currentProject = this.projectManager.getProject(projectId) || null;
		
		// Update the dropdown if it exists
		if (this.projectSelectElement) {
			this.projectSelectElement.value = projectId;
		}
		
		// Refresh the view
		const container = this.containerEl.children[1];
		this.renderTimeline(container);
	}

	/**
	 * Renderiza a barra de ferramentas
	 */
	private renderToolbar(container: Element): void {
		const toolbar = container.createDiv({ cls: 'timeline-toolbar' });

		// Seletor de projeto
		const projectSelect = toolbar.createEl('select', { cls: 'timeline-project-select' });
		this.projectSelectElement = projectSelect;
		projectSelect.createEl('option', { text: this.t.ui_project_select, value: '' });

		const projects = this.projectManager.getProjects();
		projects.forEach(project => {
			projectSelect.createEl('option', {
				text: project.title,
				value: project.projectId
			});
		});

		// Set current project if available
		if (this.currentProject) {
			projectSelect.value = this.currentProject.projectId;
		}

		projectSelect.addEventListener('change', (e) => {
			const projectId = (e.target as HTMLSelectElement).value;
			if (projectId) {
				this.currentProject = this.projectManager.getProject(projectId) || null;
				this.renderTimeline(container);
			}
		});

		// Botões de zoom
		const zoomGroup = toolbar.createDiv({ cls: 'timeline-zoom-group' });
		
		const zoomScales = [
			{ key: 'days', label: this.t.zoom_days },
			{ key: 'weeks', label: this.t.zoom_weeks },
			{ key: 'months', label: this.t.zoom_months },
			{ key: 'quarters', label: this.t.zoom_quarters },
			{ key: 'years', label: this.t.zoom_years }
		];
		
		zoomScales.forEach(scale => {
			const btn = zoomGroup.createEl('button', { text: scale.label, cls: 'timeline-zoom-btn' });
			btn.addEventListener('click', () => {
				this.changeTimeScale(scale.key);
			});
		});

		// Botões de ação
		const actionGroup = toolbar.createDiv({ cls: 'timeline-action-group' });

		const addTaskBtn = actionGroup.createEl('button', { text: this.t.ui_add_task, cls: 'timeline-add-btn' });
		addTaskBtn.addEventListener('click', () => this.createTask());

		const addMilestoneBtn = actionGroup.createEl('button', { text: this.t.ui_add_milestone, cls: 'timeline-add-btn' });
		addMilestoneBtn.addEventListener('click', () => this.createMilestone());

		const exportBtn = actionGroup.createEl('button', { text: this.t.ui_export, cls: 'timeline-export-btn' });
		exportBtn.addEventListener('click', () => this.exportProject());

		// Campo de busca
		const searchInput = toolbar.createEl('input', {
			type: 'text',
			placeholder: this.t.ui_search_placeholder,
			cls: 'timeline-search'
		});

		searchInput.addEventListener('input', (e) => {
			this.filters.searchText = (e.target as HTMLInputElement).value;
			this.renderTimeline(container);
		});
	}

	/**
	 * Renderiza a linha do tempo
	 */
	private renderTimeline(container: Element): void {
		// Remove timeline anterior
		const existingTimeline = container.querySelector('.timeline-canvas');
		if (existingTimeline) {
			existingTimeline.remove();
		}

		if (!this.currentProject) {
			const placeholder = container.createDiv({ cls: 'timeline-placeholder' });
			placeholder.createEl('p', { text: 'Selecione um projeto para visualizar a linha do tempo' });
			return;
		}

		const timelineContainer = container.createDiv({ cls: 'timeline-canvas' });
		
		// Configurações da visualização
		const margin = { top: 60, right: 30, bottom: 30, left: 200 };
		const width = timelineContainer.clientWidth - margin.left - margin.right;
		const height = 600 - margin.top - margin.bottom;

		// Cria SVG
		this.svg = d3.select(timelineContainer)
			.append('svg')
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom);

		const g = this.svg.append('g')
			.attr('transform', `translate(${margin.left},${margin.top})`);

		// Filtra itens
		const items = this.filterItems(this.currentProject.items);

		if (items.length === 0) {
			g.append('text')
				.attr('x', width / 2)
				.attr('y', height / 2)
				.attr('text-anchor', 'middle')
				.text('Nenhum item encontrado');
			return;
		}

		// Calcula range de datas
		const dates = items.flatMap(item => {
			if (item.type === 'task') {
				return [new Date(item.start), new Date(item.end)];
			} else {
				return [new Date(item.date)];
			}
		});

		const minDate = d3.min(dates) || new Date();
		const maxDate = d3.max(dates) || new Date();

		// Escalas
		const xScale = d3.scaleTime()
			.domain([minDate, maxDate])
			.range([0, width]);

		const yScale = d3.scaleBand()
			.domain(items.map(item => item.id))
			.range([0, height])
			.padding(0.2);

		// Eixo X (tempo)
		const xAxis = d3.axisTop(xScale)
			.ticks(d3.timeWeek.every(1))
			.tickFormat(d3.timeFormat('%d/%m') as any);

		g.append('g')
			.attr('class', 'x-axis')
			.call(xAxis);

		// Grid vertical
		g.append('g')
			.attr('class', 'grid')
			.call(d3.axisTop(xScale)
				.ticks(d3.timeDay.every(1))
				.tickSize(-height)
				.tickFormat(() => '') as any
			);

		// Renderiza itens
		items.forEach(item => {
			const itemGroup = g.append('g')
				.attr('class', `timeline-item timeline-${item.type}`)
				.attr('data-id', item.id);

			// Label do item
			itemGroup.append('text')
				.attr('x', -10)
				.attr('y', (yScale(item.id) || 0) + yScale.bandwidth() / 2)
				.attr('text-anchor', 'end')
				.attr('dominant-baseline', 'middle')
				.text(item.title);

			if (item.type === 'task') {
				const task = item as Task;
				const startX = xScale(new Date(task.start));
				const endX = xScale(new Date(task.end));
				const barWidth = endX - startX;

				// Barra da tarefa
				const rect = itemGroup.append('rect')
					.attr('x', startX)
					.attr('y', yScale(item.id) || 0)
					.attr('width', barWidth)
					.attr('height', yScale.bandwidth())
					.attr('class', `task-bar task-${task.status}`)
					.attr('rx', 3);

				// Progresso
				if (task.progress && task.progress > 0) {
					itemGroup.append('rect')
						.attr('x', startX)
						.attr('y', yScale(item.id) || 0)
						.attr('width', barWidth * (task.progress / 100))
						.attr('height', yScale.bandwidth())
						.attr('class', 'task-progress')
						.attr('rx', 3);
				}

				// Evento de clique
				rect.on('click', () => {
					this.onItemClick(item);
				});

				// Drag para mover tarefa
				const drag = d3.drag()
					.on('start', function() {
						d3.select(this).raise().classed('dragging', true);
					})
					.on('drag', function(event: any) {
						const newX = Math.max(0, Math.min(width, event.x));
						d3.select(this).attr('x', newX);
					})
					.on('end', (event: any) => {
						const newDate = xScale.invert(event.x);
						this.onTaskMoved(task, newDate);
					});

				rect.call(drag as any);

			} else if (item.type === 'milestone') {
				const milestone = item as Milestone;
				const x = xScale(new Date(milestone.date));

				// Diamante do marco
				const diamond = itemGroup.append('path')
					.attr('d', d3.symbol().type(d3.symbolDiamond).size(200) as any)
					.attr('transform', `translate(${x},${(yScale(item.id) || 0) + yScale.bandwidth() / 2})`)
					.attr('class', `milestone-marker milestone-${milestone.status || 'pending'}`);

				diamond.on('click', () => {
					this.onItemClick(item);
				});
			}
		});

		// Renderiza dependências
		this.renderDependencies(g, items, xScale, yScale);
	}

	/**
	 * Renderiza as setas de dependência
	 */
	private renderDependencies(g: any, items: (Task | Milestone)[], xScale: any, yScale: any): void {
		items.forEach(item => {
			if (item.type === 'task') {
				const task = item as Task;
				task.dependencies.forEach(depId => {
					const depItem = items.find(i => i.id === depId);
					if (!depItem) return;

					const startY = (yScale(depId) || 0) + yScale.bandwidth() / 2;
					const endY = (yScale(task.id) || 0) + yScale.bandwidth() / 2;

					let startX: number;
					let endX: number;

					if (depItem.type === 'task') {
						endX = xScale(new Date((depItem as Task).end));
						startX = xScale(new Date(task.start));
					} else {
						endX = xScale(new Date((depItem as Milestone).date));
						startX = xScale(new Date(task.start));
					}

					// Linha de dependência
					g.append('path')
						.attr('d', `M ${endX} ${startY} L ${endX + 20} ${startY} L ${startX - 20} ${endY} L ${startX} ${endY}`)
						.attr('class', 'dependency-line')
						.attr('fill', 'none')
						.attr('stroke', '#999')
						.attr('stroke-width', 2)
						.attr('marker-end', 'url(#arrowhead)');
				});
			}
		});

		// Define a seta
		g.append('defs').append('marker')
			.attr('id', 'arrowhead')
			.attr('markerWidth', 10)
			.attr('markerHeight', 10)
			.attr('refX', 9)
			.attr('refY', 3)
			.attr('orient', 'auto')
			.append('polygon')
			.attr('points', '0 0, 10 3, 0 6')
			.attr('fill', '#999');
	}

	/**
	 * Filtra itens baseado nos filtros ativos
	 */
	private filterItems(items: (Task | Milestone)[]): (Task | Milestone)[] {
		return items.filter(item => {
			if (this.filters.searchText) {
				const search = this.filters.searchText.toLowerCase();
				if (!item.title.toLowerCase().includes(search)) {
					return false;
				}
			}

			if (this.filters.labels && this.filters.labels.length > 0) {
				if (!this.filters.labels.some(label => item.labels.includes(label))) {
					return false;
				}
			}

			if (this.filters.statuses && this.filters.statuses.length > 0 && item.type === 'task') {
				if (!this.filters.statuses.includes((item as Task).status)) {
					return false;
				}
			}

			return true;
		});
	}

	/**
	 * Manipuladores de eventos
	 */
	private onItemClick(item: Task | Milestone): void {
		if (item.notePath) {
			this.app.workspace.openLinkText(item.notePath, '', false);
		}
	}

	private async onTaskMoved(task: Task, newStartDate: Date): Promise<void> {
		// Implementar lógica de movimentação
		console.log('Task moved:', task.title, 'to', newStartDate);
	}

	private changeTimeScale(scale: string): void {
		// Implementar mudança de escala de tempo
		console.log('Changing time scale to:', scale);
	}

	private createTask(): void {
		// Implementar criação de tarefa
		console.log('Creating new task');
	}

	private createMilestone(): void {
		// Implementar criação de marco
		console.log('Creating new milestone');
	}

	private exportProject(): void {
		if (!this.currentProject) return;

		const json = this.projectManager.exportProject(this.currentProject.projectId);
		if (json) {
			// Criar arquivo de export
			const blob = new Blob([json], { type: 'application/json' });
			const url = URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = `${this.currentProject.title}-export.json`;
			a.click();
		}
	}
}
