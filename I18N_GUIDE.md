
# Internationalization Guide (i18n)

## Supported Languages

The Timeline Gantt plugin supports the following languages:

- **English** (en)
- **Portuguese** (pt)
- **Spanish** (es)
- **German** (de)

## How It Works

### 1. Translation System

The i18n system is located in `src/utils/i18n.ts` and contains:

- **`Translations` interface**: Defines all translation keys
- **`translations` object**: Contains translations for each language
- **`t()` function**: Returns the translation for a specific key
- **`getTranslations()` function**: Returns all translations for a language
- **`detectLanguage()` function**: Detects the system language

### 2. Translation Structure

Each language has a complete object with all translations:

```typescript
export const translations: Record<SupportedLanguage, Translations> = {
	en: {
		plugin_name: 'Timeline Gantt',
		cmd_open_timeline: 'Open Timeline View',
		// ... mais traduções
	},
	pt: {
		plugin_name: 'Timeline Gantt',
		cmd_open_timeline: 'Abrir Linha do Tempo',
		// ... mais traduções
	},
	// ... outros idiomas
};
```


### 3. Using Translations in Code

#### In the Main Plugin (main.ts)

```typescript
import { getTranslations } from './utils/i18n';

export default class TimelineGanttPlugin extends Plugin {
	t: Translations;
	
	async onload() {
		await this.loadSettings();
		this.t = getTranslations(this.settings.language);
		
		// Usar traduções nos comandos
		this.addCommand({
			id: 'open-timeline-view',
			name: this.t.cmd_open_timeline,
			callback: () => this.activateView()
		});
	}
}
```


#### In Views (TimelineView.ts)

```typescript
export class TimelineView extends ItemView {
	public t: Translations;
	
	constructor(leaf: WorkspaceLeaf, projectManager: ProjectManager, translations: Translations) {
		super(leaf);
		this.t = translations;
	}
	
	getDisplayText(): string {
		return this.t.plugin_name;
	}
	
	private renderToolbar(container: Element): void {
		const btn = container.createEl('button', { 
			text: this.t.ui_add_task 
		});
	}
}
```


#### In Settings (SettingsTab.ts)

```typescript
display(): void {
	const t = this.plugin.t;
	
	containerEl.createEl('h2', { text: t.settings_title });
	
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
				this.display(); // Atualiza a interface
			}));
}
```


## Adding a New Language

### Step 1: Add the language type

In `src/utils/i18n.ts`:

```typescript
export type SupportedLanguage = 'en' | 'pt' | 'es' | 'de' | 'fr'; // adiciona 'fr' para francês
```


### Step 2: Add the translations

```typescript
export const translations: Record<SupportedLanguage, Translations> = {
	// ... idiomas existentes
	
	fr: {
		plugin_name: 'Timeline Gantt',
		plugin_description: 'Plugin de planification de projets...',
		cmd_open_timeline: 'Ouvrir la Chronologie',
		// ... todas as outras chaves
	}
};
```


### Step 3: Update language detection

```typescript
export function detectLanguage(): SupportedLanguage {
	const lang = window.navigator.language.toLowerCase();
	
	if (lang.startsWith('pt')) return 'pt';
	if (lang.startsWith('es')) return 'es';
	if (lang.startsWith('de')) return 'de';
	if (lang.startsWith('fr')) return 'fr'; // adiciona detecção de francês
	
	return 'en';
}
```


### Step 4: Update the Settings Tab

```typescript
new Setting(containerEl)
	.setName(t.settings_language)
	.setDesc(t.settings_language_desc)
	.addDropdown(dropdown => dropdown
		.addOption('en', 'English')
		.addOption('pt', 'Português')
		.addOption('es', 'Español')
		.addOption('de', 'Deutsch')
		.addOption('fr', 'Français') // adiciona opção de francês
		// ...
```


### Step 5: Create README in the new language

Create `README_FR.md` with the translated documentation.


### Step 6: Update language links

Update all READMEs to include the new language link:

```markdown
**Idiomas Disponíveis:** [English](README_EN.md) | [Português](README.md) | [Español](README_ES.md) | [Deutsch](README_DE.md) | [Français](README_FR.md)
```


## Translation Categories

### 1. General
- `plugin_name`: Plugin name
- `plugin_description`: Plugin description

### 2. Commands
- `cmd_open_timeline`: Open timeline
- `cmd_create_project`: Create new project
- `cmd_import_project`: Import project

### 3. UI Elements
- `ui_project_select`: Project selector
- `ui_add_task`: Add task button
- `ui_add_milestone`: Add milestone button
- `ui_search_placeholder`: Search placeholder

### 4. Status
- `status_todo`: To do
- `status_in_progress`: In progress
- `status_done`: Done
- `status_cancelled`: Cancelled

### 5. Forms
- `form_title`: Title
- `form_start_date`: Start date
- `form_end_date`: End date
- `form_status`: Status

### 6. Messages
- `msg_project_created`: Project created successfully
- `msg_import_error`: Error importing project

### 7. Settings
- `settings_title`: Settings title
- `settings_language`: Language setting name
- `settings_auto_sync`: Auto sync

### 8. Errors
- `error_load_project`: Error loading project
- `error_save_project`: Error saving project


## Best Practices

1. **Maintain consistency**: Use the same terms throughout the plugin
2. **Be concise**: Translations should be clear and direct
3. **Cultural context**: Adapt to the cultural context of the language
4. **Test**: Always test with native speakers when possible
5. **Documentation**: Keep READMEs updated in all languages
6. **Completeness**: Ensure ALL keys are translated


## Dynamic Update

When the user changes the language in settings:

```typescript
async saveSettings() {
	await this.saveData(this.settings);
	this.updateTranslations();
}

updateTranslations() {
	this.t = getTranslations(this.settings.language);
	// A interface será atualizada na próxima vez que a view for aberta
}
```


## Fallback

The system always falls back to English:

```typescript
export function t(key: keyof Translations, language: SupportedLanguage = 'en'): string {
	return translations[language][key] || translations['en'][key];
}
```


## Checklist for Adding a Language

- [ ] Add type in `SupportedLanguage`
- [ ] Add complete translations in the `translations` object
- [ ] Update `detectLanguage()` function
- [ ] Add option in the settings dropdown
- [ ] Create README_XX.md file
- [ ] Update links in all READMEs
- [ ] Update CHANGELOG.md
- [ ] Test all translated strings
- [ ] Check with a native speaker (if possible)
- [ ] Update version in manifest.json

---

---

**Developed with ❤️ for the Obsidian community**
