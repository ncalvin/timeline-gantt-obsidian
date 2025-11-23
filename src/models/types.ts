/**
 * Tipos de itens na linha do tempo
 */
export type TimelineItemType = 'task' | 'milestone';

/**
 * Status possíveis para uma tarefa
 */
export type TaskStatus = 'todo' | 'in-progress' | 'done' | 'cancelled';

/**
 * Tipos de dependência entre tarefas
 */
export type DependencyType = 'FS' | 'SS' | 'FF' | 'SF';

/**
 * Entrada no histórico de mudanças
 */
export interface HistoryEntry {
	by: string;
	at: string; // ISO 8601 timestamp
	changes: string;
	before?: any;
	after?: any;
}

/**
 * Dependência entre tarefas
 */
export interface Dependency {
	targetId: string;
	type: DependencyType;
}

/**
 * Item base da linha do tempo
 */
export interface TimelineItem {
	id: string;
	type: TimelineItemType;
	title: string;
	notePath?: string;
	labels: string[];
	history: HistoryEntry[];
}

/**
 * Tarefa na linha do tempo
 */
export interface Task extends TimelineItem {
	type: 'task';
	start: string; // YYYY-MM-DD
	end: string; // YYYY-MM-DD
	durationDays: number;
	status: TaskStatus;
	assignee?: string;
	dependencies: string[]; // IDs das tarefas predecessoras
	priority?: 'low' | 'medium' | 'high';
	progress?: number; // 0-100
}

/**
 * Marco na linha do tempo
 */
export interface Milestone extends TimelineItem {
	type: 'milestone';
	date: string; // YYYY-MM-DD
	status?: 'pending' | 'completed';
}

/**
 * Projeto (coleção de itens)
 */
export interface Project {
	projectId: string;
	title: string;
	description?: string;
	items: (Task | Milestone)[];
	tags?: string[];
	createdAt: string;
	updatedAt: string;
}

/**
 * Configurações do plugin
 */
export interface TimelineSettings {
	defaultView: 'days' | 'weeks' | 'months' | 'quarters' | 'years';
	defaultProjectFolder: string;
	noteTemplate: string;
	taskTemplate: string;
	milestoneTemplate: string;
	autoSync: boolean;
	showWeekends: boolean;
	colorByLabel: Record<string, string>;
	dateFormat: string;
	firstDayOfWeek: 0 | 1; // 0 = Sunday, 1 = Monday
	language: 'en' | 'pt' | 'es' | 'de';
}

/**
 * Filtros de visualização
 */
export interface TimelineFilters {
	labels?: string[];
	assignees?: string[];
	statuses?: TaskStatus[];
	priority?: ('low' | 'medium' | 'high')[];
	dateRange?: {
		start: string;
		end: string;
	};
	searchText?: string;
}

/**
 * Metadados da nota para sincronização
 */
export interface NoteMeta {
	timelineId?: string;
	timelineType?: TimelineItemType;
	timelineStart?: string;
	timelineEnd?: string;
	timelineDate?: string;
	timelineStatus?: TaskStatus | 'pending' | 'completed';
	timelineAssignee?: string;
	timelineLabels?: string[];
	timelineDependencies?: string[];
	timelinePriority?: 'low' | 'medium' | 'high';
	timelineProgress?: number;
}
