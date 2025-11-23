/**
 * Internationalization (i18n) support for Timeline Gantt Plugin
 */

export type SupportedLanguage = 'en' | 'pt' | 'es' | 'de';

export interface Translations {
	// General
	plugin_name: string;
	plugin_description: string;
	
	// Commands
	cmd_open_timeline: string;
	cmd_create_project: string;
	cmd_import_project: string;
	
	// UI Elements
	ui_project_select: string;
	ui_search_placeholder: string;
	ui_add_task: string;
	ui_add_milestone: string;
	ui_export: string;
	ui_import: string;
	
	// Zoom levels
	zoom_days: string;
	zoom_weeks: string;
	zoom_months: string;
	zoom_quarters: string;
	zoom_years: string;
	
	// Task status
	status_todo: string;
	status_in_progress: string;
	status_done: string;
	status_cancelled: string;
	
	// Milestone status
	milestone_pending: string;
	milestone_completed: string;
	
	// Priority
	priority_low: string;
	priority_medium: string;
	priority_high: string;
	
	// Form labels
	form_title: string;
	form_start_date: string;
	form_end_date: string;
	form_date: string;
	form_status: string;
	form_assignee: string;
	form_labels: string;
	form_priority: string;
	form_progress: string;
	form_dependencies: string;
	
	// Buttons
	btn_create: string;
	btn_save: string;
	btn_cancel: string;
	btn_delete: string;
	btn_ok: string;
	
	// Messages
	msg_project_created: string;
	msg_project_imported: string;
	msg_import_error: string;
	msg_no_project_selected: string;
	msg_no_items_found: string;
	msg_task_created: string;
	msg_milestone_created: string;
	msg_item_deleted: string;
	msg_circular_dependency: string;
	msg_invalid_date: string;
	msg_duplicate_id: string;
	
	// Settings
	settings_title: string;
	settings_general: string;
	settings_default_view: string;
	settings_default_view_desc: string;
	settings_project_folder: string;
	settings_project_folder_desc: string;
	settings_auto_sync: string;
	settings_auto_sync_desc: string;
	settings_show_weekends: string;
	settings_show_weekends_desc: string;
	settings_date_format: string;
	settings_date_format_desc: string;
	settings_first_day_week: string;
	settings_first_day_week_desc: string;
	settings_language: string;
	settings_language_desc: string;
	settings_templates: string;
	settings_task_template: string;
	settings_task_template_desc: string;
	settings_milestone_template: string;
	settings_milestone_template_desc: string;
	
	// Days of week
	day_sunday: string;
	day_monday: string;
	
	// Placeholders
	placeholder_project_name: string;
	placeholder_task_title: string;
	placeholder_milestone_title: string;
	placeholder_assignee: string;
	
	// Tooltips
	tooltip_drag_to_move: string;
	tooltip_click_to_open: string;
	tooltip_resize_to_adjust: string;
	
	// Errors
	error_load_project: string;
	error_save_project: string;
	error_sync_failed: string;
	error_invalid_format: string;
}

export const translations: Record<SupportedLanguage, Translations> = {
	en: {
		// General
		plugin_name: 'Timeline Gantt',
		plugin_description: 'Project planning plugin with dynamic Gantt timeline and bi-directional sync with notes',
		
		// Commands
		cmd_open_timeline: 'Open Timeline View',
		cmd_create_project: 'Create New Project',
		cmd_import_project: 'Import Project from JSON',
		
		// UI Elements
		ui_project_select: 'Select a project',
		ui_search_placeholder: 'Search...',
		ui_add_task: '+ Task',
		ui_add_milestone: '+ Milestone',
		ui_export: 'Export',
		ui_import: 'Import',
		
		// Zoom levels
		zoom_days: 'Days',
		zoom_weeks: 'Weeks',
		zoom_months: 'Months',
		zoom_quarters: 'Quarters',
		zoom_years: 'Years',
		
		// Task status
		status_todo: 'To Do',
		status_in_progress: 'In Progress',
		status_done: 'Done',
		status_cancelled: 'Cancelled',
		
		// Milestone status
		milestone_pending: 'Pending',
		milestone_completed: 'Completed',
		
		// Priority
		priority_low: 'Low',
		priority_medium: 'Medium',
		priority_high: 'High',
		
		// Form labels
		form_title: 'Title',
		form_start_date: 'Start Date',
		form_end_date: 'End Date',
		form_date: 'Date',
		form_status: 'Status',
		form_assignee: 'Assignee',
		form_labels: 'Labels',
		form_priority: 'Priority',
		form_progress: 'Progress',
		form_dependencies: 'Dependencies',
		
		// Buttons
		btn_create: 'Create',
		btn_save: 'Save',
		btn_cancel: 'Cancel',
		btn_delete: 'Delete',
		btn_ok: 'OK',
		
		// Messages
		msg_project_created: 'Project created successfully!',
		msg_project_imported: 'Project imported successfully!',
		msg_import_error: 'Error importing project. Check the JSON file.',
		msg_no_project_selected: 'Select a project to view the timeline',
		msg_no_items_found: 'No items found',
		msg_task_created: 'Task created successfully!',
		msg_milestone_created: 'Milestone created successfully!',
		msg_item_deleted: 'Item deleted',
		msg_circular_dependency: 'Circular dependency detected',
		msg_invalid_date: 'Invalid date format',
		msg_duplicate_id: 'Duplicate ID found',
		
		// Settings
		settings_title: 'Timeline Gantt Settings',
		settings_general: 'General',
		settings_default_view: 'Default View',
		settings_default_view_desc: 'Default time scale when opening timeline',
		settings_project_folder: 'Default Project Folder',
		settings_project_folder_desc: 'Default folder for new project notes',
		settings_auto_sync: 'Auto Sync',
		settings_auto_sync_desc: 'Automatically sync changes between notes and timeline',
		settings_show_weekends: 'Show Weekends',
		settings_show_weekends_desc: 'Display Saturday and Sunday on timeline',
		settings_date_format: 'Date Format',
		settings_date_format_desc: 'Date notation format (moment.js format)',
		settings_first_day_week: 'First Day of Week',
		settings_first_day_week_desc: 'Week starts on Sunday or Monday',
		settings_language: 'Language',
		settings_language_desc: 'Plugin interface language',
		settings_templates: 'Templates',
		settings_task_template: 'Task Template',
		settings_task_template_desc: 'Template for new tasks',
		settings_milestone_template: 'Milestone Template',
		settings_milestone_template_desc: 'Template for new milestones',
		
		// Days of week
		day_sunday: 'Sunday',
		day_monday: 'Monday',
		
		// Placeholders
		placeholder_project_name: 'New Project',
		placeholder_task_title: 'Enter task title',
		placeholder_milestone_title: 'Enter milestone title',
		placeholder_assignee: 'Assign to...',
		
		// Tooltips
		tooltip_drag_to_move: 'Drag to move',
		tooltip_click_to_open: 'Click to open note',
		tooltip_resize_to_adjust: 'Resize to adjust duration',
		
		// Errors
		error_load_project: 'Error loading project',
		error_save_project: 'Error saving project',
		error_sync_failed: 'Synchronization failed',
		error_invalid_format: 'Invalid format',
	},
	
	pt: {
		// General
		plugin_name: 'Timeline Gantt',
		plugin_description: 'Plugin de planejamento de projetos com linha do tempo dinâmica e sincronização bidirecional',
		
		// Commands
		cmd_open_timeline: 'Abrir Linha do Tempo',
		cmd_create_project: 'Criar Novo Projeto',
		cmd_import_project: 'Importar Projeto do JSON',
		
		// UI Elements
		ui_project_select: 'Selecione um projeto',
		ui_search_placeholder: 'Buscar...',
		ui_add_task: '+ Tarefa',
		ui_add_milestone: '+ Marco',
		ui_export: 'Exportar',
		ui_import: 'Importar',
		
		// Zoom levels
		zoom_days: 'Dias',
		zoom_weeks: 'Semanas',
		zoom_months: 'Meses',
		zoom_quarters: 'Trimestres',
		zoom_years: 'Anos',
		
		// Task status
		status_todo: 'A Fazer',
		status_in_progress: 'Em Progresso',
		status_done: 'Concluído',
		status_cancelled: 'Cancelado',
		
		// Milestone status
		milestone_pending: 'Pendente',
		milestone_completed: 'Concluído',
		
		// Priority
		priority_low: 'Baixa',
		priority_medium: 'Média',
		priority_high: 'Alta',
		
		// Form labels
		form_title: 'Título',
		form_start_date: 'Data de Início',
		form_end_date: 'Data de Término',
		form_date: 'Data',
		form_status: 'Status',
		form_assignee: 'Responsável',
		form_labels: 'Etiquetas',
		form_priority: 'Prioridade',
		form_progress: 'Progresso',
		form_dependencies: 'Dependências',
		
		// Buttons
		btn_create: 'Criar',
		btn_save: 'Salvar',
		btn_cancel: 'Cancelar',
		btn_delete: 'Excluir',
		btn_ok: 'OK',
		
		// Messages
		msg_project_created: 'Projeto criado com sucesso!',
		msg_project_imported: 'Projeto importado com sucesso!',
		msg_import_error: 'Erro ao importar projeto. Verifique o arquivo JSON.',
		msg_no_project_selected: 'Selecione um projeto para visualizar a linha do tempo',
		msg_no_items_found: 'Nenhum item encontrado',
		msg_task_created: 'Tarefa criada com sucesso!',
		msg_milestone_created: 'Marco criado com sucesso!',
		msg_item_deleted: 'Item excluído',
		msg_circular_dependency: 'Dependência circular detectada',
		msg_invalid_date: 'Formato de data inválido',
		msg_duplicate_id: 'ID duplicado encontrado',
		
		// Settings
		settings_title: 'Configurações do Timeline Gantt',
		settings_general: 'Geral',
		settings_default_view: 'Visualização Padrão',
		settings_default_view_desc: 'Escala de tempo padrão ao abrir a linha do tempo',
		settings_project_folder: 'Pasta Padrão de Projetos',
		settings_project_folder_desc: 'Pasta padrão para novas notas de projeto',
		settings_auto_sync: 'Sincronização Automática',
		settings_auto_sync_desc: 'Sincronizar automaticamente mudanças entre notas e linha do tempo',
		settings_show_weekends: 'Mostrar Fins de Semana',
		settings_show_weekends_desc: 'Exibir sábado e domingo na linha do tempo',
		settings_date_format: 'Formato de Data',
		settings_date_format_desc: 'Formato de notação de data (formato moment.js)',
		settings_first_day_week: 'Primeiro Dia da Semana',
		settings_first_day_week_desc: 'A semana começa no domingo ou segunda-feira',
		settings_language: 'Idioma',
		settings_language_desc: 'Idioma da interface do plugin',
		settings_templates: 'Templates',
		settings_task_template: 'Template de Tarefa',
		settings_task_template_desc: 'Template para novas tarefas',
		settings_milestone_template: 'Template de Marco',
		settings_milestone_template_desc: 'Template para novos marcos',
		
		// Days of week
		day_sunday: 'Domingo',
		day_monday: 'Segunda-feira',
		
		// Placeholders
		placeholder_project_name: 'Novo Projeto',
		placeholder_task_title: 'Digite o título da tarefa',
		placeholder_milestone_title: 'Digite o título do marco',
		placeholder_assignee: 'Atribuir a...',
		
		// Tooltips
		tooltip_drag_to_move: 'Arraste para mover',
		tooltip_click_to_open: 'Clique para abrir nota',
		tooltip_resize_to_adjust: 'Redimensione para ajustar duração',
		
		// Errors
		error_load_project: 'Erro ao carregar projeto',
		error_save_project: 'Erro ao salvar projeto',
		error_sync_failed: 'Falha na sincronização',
		error_invalid_format: 'Formato inválido',
	},
	
	es: {
		// General
		plugin_name: 'Timeline Gantt',
		plugin_description: 'Plugin de planificación de proyectos con línea de tiempo dinámica y sincronización bidireccional',
		
		// Commands
		cmd_open_timeline: 'Abrir Línea de Tiempo',
		cmd_create_project: 'Crear Nuevo Proyecto',
		cmd_import_project: 'Importar Proyecto desde JSON',
		
		// UI Elements
		ui_project_select: 'Seleccione un proyecto',
		ui_search_placeholder: 'Buscar...',
		ui_add_task: '+ Tarea',
		ui_add_milestone: '+ Hito',
		ui_export: 'Exportar',
		ui_import: 'Importar',
		
		// Zoom levels
		zoom_days: 'Días',
		zoom_weeks: 'Semanas',
		zoom_months: 'Meses',
		zoom_quarters: 'Trimestres',
		zoom_years: 'Años',
		
		// Task status
		status_todo: 'Por Hacer',
		status_in_progress: 'En Progreso',
		status_done: 'Completado',
		status_cancelled: 'Cancelado',
		
		// Milestone status
		milestone_pending: 'Pendiente',
		milestone_completed: 'Completado',
		
		// Priority
		priority_low: 'Baja',
		priority_medium: 'Media',
		priority_high: 'Alta',
		
		// Form labels
		form_title: 'Título',
		form_start_date: 'Fecha de Inicio',
		form_end_date: 'Fecha de Finalización',
		form_date: 'Fecha',
		form_status: 'Estado',
		form_assignee: 'Asignado a',
		form_labels: 'Etiquetas',
		form_priority: 'Prioridad',
		form_progress: 'Progreso',
		form_dependencies: 'Dependencias',
		
		// Buttons
		btn_create: 'Crear',
		btn_save: 'Guardar',
		btn_cancel: 'Cancelar',
		btn_delete: 'Eliminar',
		btn_ok: 'OK',
		
		// Messages
		msg_project_created: '¡Proyecto creado con éxito!',
		msg_project_imported: '¡Proyecto importado con éxito!',
		msg_import_error: 'Error al importar proyecto. Verifique el archivo JSON.',
		msg_no_project_selected: 'Seleccione un proyecto para ver la línea de tiempo',
		msg_no_items_found: 'No se encontraron elementos',
		msg_task_created: '¡Tarea creada con éxito!',
		msg_milestone_created: '¡Hito creado con éxito!',
		msg_item_deleted: 'Elemento eliminado',
		msg_circular_dependency: 'Dependencia circular detectada',
		msg_invalid_date: 'Formato de fecha inválido',
		msg_duplicate_id: 'ID duplicado encontrado',
		
		// Settings
		settings_title: 'Configuración de Timeline Gantt',
		settings_general: 'General',
		settings_default_view: 'Vista Predeterminada',
		settings_default_view_desc: 'Escala de tiempo predeterminada al abrir la línea de tiempo',
		settings_project_folder: 'Carpeta Predeterminada de Proyectos',
		settings_project_folder_desc: 'Carpeta predeterminada para nuevas notas de proyecto',
		settings_auto_sync: 'Sincronización Automática',
		settings_auto_sync_desc: 'Sincronizar automáticamente cambios entre notas y línea de tiempo',
		settings_show_weekends: 'Mostrar Fines de Semana',
		settings_show_weekends_desc: 'Mostrar sábado y domingo en la línea de tiempo',
		settings_date_format: 'Formato de Fecha',
		settings_date_format_desc: 'Formato de notación de fecha (formato moment.js)',
		settings_first_day_week: 'Primer Día de la Semana',
		settings_first_day_week_desc: 'La semana comienza en domingo o lunes',
		settings_language: 'Idioma',
		settings_language_desc: 'Idioma de la interfaz del plugin',
		settings_templates: 'Plantillas',
		settings_task_template: 'Plantilla de Tarea',
		settings_task_template_desc: 'Plantilla para nuevas tareas',
		settings_milestone_template: 'Plantilla de Hito',
		settings_milestone_template_desc: 'Plantilla para nuevos hitos',
		
		// Days of week
		day_sunday: 'Domingo',
		day_monday: 'Lunes',
		
		// Placeholders
		placeholder_project_name: 'Nuevo Proyecto',
		placeholder_task_title: 'Ingrese el título de la tarea',
		placeholder_milestone_title: 'Ingrese el título del hito',
		placeholder_assignee: 'Asignar a...',
		
		// Tooltips
		tooltip_drag_to_move: 'Arrastrar para mover',
		tooltip_click_to_open: 'Clic para abrir nota',
		tooltip_resize_to_adjust: 'Redimensionar para ajustar duración',
		
		// Errors
		error_load_project: 'Error al cargar proyecto',
		error_save_project: 'Error al guardar proyecto',
		error_sync_failed: 'Fallo en la sincronización',
		error_invalid_format: 'Formato inválido',
	},
	
	de: {
		// General
		plugin_name: 'Timeline Gantt',
		plugin_description: 'Projektplanungs-Plugin mit dynamischer Gantt-Zeitachse und bidirektionaler Synchronisation',
		
		// Commands
		cmd_open_timeline: 'Zeitachse Öffnen',
		cmd_create_project: 'Neues Projekt Erstellen',
		cmd_import_project: 'Projekt aus JSON Importieren',
		
		// UI Elements
		ui_project_select: 'Projekt auswählen',
		ui_search_placeholder: 'Suchen...',
		ui_add_task: '+ Aufgabe',
		ui_add_milestone: '+ Meilenstein',
		ui_export: 'Exportieren',
		ui_import: 'Importieren',
		
		// Zoom levels
		zoom_days: 'Tage',
		zoom_weeks: 'Wochen',
		zoom_months: 'Monate',
		zoom_quarters: 'Quartale',
		zoom_years: 'Jahre',
		
		// Task status
		status_todo: 'Zu Erledigen',
		status_in_progress: 'In Bearbeitung',
		status_done: 'Erledigt',
		status_cancelled: 'Abgebrochen',
		
		// Milestone status
		milestone_pending: 'Ausstehend',
		milestone_completed: 'Abgeschlossen',
		
		// Priority
		priority_low: 'Niedrig',
		priority_medium: 'Mittel',
		priority_high: 'Hoch',
		
		// Form labels
		form_title: 'Titel',
		form_start_date: 'Startdatum',
		form_end_date: 'Enddatum',
		form_date: 'Datum',
		form_status: 'Status',
		form_assignee: 'Zugewiesen an',
		form_labels: 'Etiketten',
		form_priority: 'Priorität',
		form_progress: 'Fortschritt',
		form_dependencies: 'Abhängigkeiten',
		
		// Buttons
		btn_create: 'Erstellen',
		btn_save: 'Speichern',
		btn_cancel: 'Abbrechen',
		btn_delete: 'Löschen',
		btn_ok: 'OK',
		
		// Messages
		msg_project_created: 'Projekt erfolgreich erstellt!',
		msg_project_imported: 'Projekt erfolgreich importiert!',
		msg_import_error: 'Fehler beim Importieren des Projekts. Überprüfen Sie die JSON-Datei.',
		msg_no_project_selected: 'Wählen Sie ein Projekt aus, um die Zeitachse anzuzeigen',
		msg_no_items_found: 'Keine Elemente gefunden',
		msg_task_created: 'Aufgabe erfolgreich erstellt!',
		msg_milestone_created: 'Meilenstein erfolgreich erstellt!',
		msg_item_deleted: 'Element gelöscht',
		msg_circular_dependency: 'Zirkuläre Abhängigkeit erkannt',
		msg_invalid_date: 'Ungültiges Datumsformat',
		msg_duplicate_id: 'Doppelte ID gefunden',
		
		// Settings
		settings_title: 'Timeline Gantt Einstellungen',
		settings_general: 'Allgemein',
		settings_default_view: 'Standardansicht',
		settings_default_view_desc: 'Standard-Zeitskala beim Öffnen der Zeitachse',
		settings_project_folder: 'Standard-Projektordner',
		settings_project_folder_desc: 'Standardordner für neue Projektnotizen',
		settings_auto_sync: 'Automatische Synchronisation',
		settings_auto_sync_desc: 'Änderungen zwischen Notizen und Zeitachse automatisch synchronisieren',
		settings_show_weekends: 'Wochenenden Anzeigen',
		settings_show_weekends_desc: 'Samstag und Sonntag in der Zeitachse anzeigen',
		settings_date_format: 'Datumsformat',
		settings_date_format_desc: 'Datumsnotationsformat (moment.js Format)',
		settings_first_day_week: 'Erster Tag der Woche',
		settings_first_day_week_desc: 'Woche beginnt am Sonntag oder Montag',
		settings_language: 'Sprache',
		settings_language_desc: 'Sprache der Plugin-Oberfläche',
		settings_templates: 'Vorlagen',
		settings_task_template: 'Aufgabenvorlage',
		settings_task_template_desc: 'Vorlage für neue Aufgaben',
		settings_milestone_template: 'Meilensteinvorlage',
		settings_milestone_template_desc: 'Vorlage für neue Meilensteine',
		
		// Days of week
		day_sunday: 'Sonntag',
		day_monday: 'Montag',
		
		// Placeholders
		placeholder_project_name: 'Neues Projekt',
		placeholder_task_title: 'Aufgabentitel eingeben',
		placeholder_milestone_title: 'Meilensteintitel eingeben',
		placeholder_assignee: 'Zuweisen an...',
		
		// Tooltips
		tooltip_drag_to_move: 'Zum Verschieben ziehen',
		tooltip_click_to_open: 'Klicken zum Öffnen der Notiz',
		tooltip_resize_to_adjust: 'Größe ändern zum Anpassen der Dauer',
		
		// Errors
		error_load_project: 'Fehler beim Laden des Projekts',
		error_save_project: 'Fehler beim Speichern des Projekts',
		error_sync_failed: 'Synchronisation fehlgeschlagen',
		error_invalid_format: 'Ungültiges Format',
	},
};

/**
 * Get translation for current language
 */
export function t(key: keyof Translations, language: SupportedLanguage = 'en'): string {
	return translations[language][key] || translations['en'][key];
}

/**
 * Get all translations for a language
 */
export function getTranslations(language: SupportedLanguage): Translations {
	return translations[language] || translations['en'];
}

/**
 * Detect system language
 */
export function detectLanguage(): SupportedLanguage {
	const lang = window.navigator.language.toLowerCase();
	
	if (lang.startsWith('pt')) return 'pt';
	if (lang.startsWith('es')) return 'es';
	if (lang.startsWith('de')) return 'de';
	
	return 'en';
}
