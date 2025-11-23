import { App, PluginSettingTab, Setting, Notice } from 'obsidian';
import TimelineGanttPlugin from '../main';

export class TimelineSettingsTab extends PluginSettingTab {
	plugin: TimelineGanttPlugin;

	constructor(app: App, plugin: TimelineGanttPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;
		const t = this.plugin.t;
		containerEl.empty();

		containerEl.createEl('h2', { text: t.settings_title });

		// Language Setting
		new Setting(containerEl)
			.setName(t.settings_language)
			.setDesc(t.settings_language_desc)
			.addDropdown(dropdown => dropdown
				.addOption('en', 'English')
				.addOption('pt', 'Português')
				.addOption('es', 'Español')
				.addOption('de', 'Deutsch')
				.setValue(this.plugin.settings.language)
				.onChange(async (value: any) => {
					this.plugin.settings.language = value;
					await this.plugin.saveSettings();
					new Notice(t.settings_language_desc + ' - ' + value);
					// Refresh the settings display
					this.display();
				}));

		new Setting(containerEl)
			.setName(t.settings_default_view)
			.setDesc(t.settings_default_view_desc)
			.addDropdown(dropdown => dropdown
				.addOption('days', t.zoom_days)
				.addOption('weeks', t.zoom_weeks)
				.addOption('months', t.zoom_months)
				.addOption('quarters', t.zoom_quarters)
				.addOption('years', t.zoom_years)
				.setValue(this.plugin.settings.defaultView)
				.onChange(async (value: any) => {
					this.plugin.settings.defaultView = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName(t.settings_project_folder)
			.setDesc(t.settings_project_folder_desc)
			.addText(text => text
				.setPlaceholder('Projects')
				.setValue(this.plugin.settings.defaultProjectFolder)
				.onChange(async (value) => {
					this.plugin.settings.defaultProjectFolder = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName(t.settings_auto_sync)
			.setDesc(t.settings_auto_sync_desc)
			.addToggle(toggle => toggle
				.setValue(this.plugin.settings.autoSync)
				.onChange(async (value) => {
					this.plugin.settings.autoSync = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName(t.settings_show_weekends)
			.setDesc(t.settings_show_weekends_desc)
			.addToggle(toggle => toggle
				.setValue(this.plugin.settings.showWeekends)
				.onChange(async (value) => {
					this.plugin.settings.showWeekends = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName(t.settings_date_format)
			.setDesc(t.settings_date_format_desc)
			.addText(text => text
				.setPlaceholder('YYYY-MM-DD')
				.setValue(this.plugin.settings.dateFormat)
				.onChange(async (value) => {
					this.plugin.settings.dateFormat = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName(t.settings_first_day_week)
			.setDesc(t.settings_first_day_week_desc)
			.addDropdown(dropdown => dropdown
				.addOption('0', t.day_sunday)
				.addOption('1', t.day_monday)
				.setValue(String(this.plugin.settings.firstDayOfWeek))
				.onChange(async (value) => {
					this.plugin.settings.firstDayOfWeek = Number(value) as 0 | 1;
					await this.plugin.saveSettings();
				}));

		// Templates
		containerEl.createEl('h3', { text: t.settings_templates });

		new Setting(containerEl)
			.setName(t.settings_task_template)
			.setDesc(t.settings_task_template_desc)
			.addTextArea(text => text
				.setPlaceholder('## Descrição\n\n## Notas\n')
				.setValue(this.plugin.settings.taskTemplate)
				.onChange(async (value) => {
					this.plugin.settings.taskTemplate = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName(t.settings_milestone_template)
			.setDesc(t.settings_milestone_template_desc)
			.addTextArea(text => text
				.setPlaceholder('## Descrição\n\n## Notas\n')
				.setValue(this.plugin.settings.milestoneTemplate)
				.onChange(async (value) => {
					this.plugin.settings.milestoneTemplate = value;
					await this.plugin.saveSettings();
				}));
	}
}
