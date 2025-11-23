# Timeline Gantt Plugin

Project planning plugin with dynamic Gantt timeline and bi-directional synchronization with notes for Obsidian.

**Available Languages:** English | [Português](README.md) | [Español](README_ES.md) | [Deutsch](README_DE.md)

## 📋 Features

- **Interactive Gantt Visualization**: Visual timeline with tasks and milestones
- **Bi-directional Synchronization**: Changes in notes reflect in timeline and vice-versa
- **Drag & Drop**: Drag tasks to change dates
- **Dependencies**: Define relationships between tasks (FS, SS, FF, SF)
- **Advanced Filtering**: Filter by status, assignee, tags, dates
- **Export/Import**: Export projects to JSON, CSV, or image
- **History**: Track all changes with ability to revert
- **Customizable Templates**: Configure templates for tasks and milestones
- **Multi-language Support**: English, Portuguese, Spanish, and German

## 🌍 Language Support

The plugin supports 4 languages:
- **English** (en)
- **Português** (pt)
- **Español** (es)
- **Deutsch** (de)

The plugin automatically detects your system language. You can change it manually in Settings > Timeline Gantt > Language.

## 🚀 Installation

### Manual Installation

1. Download the plugin files
2. Copy the `timeline-gantt` folder to `.obsidian/plugins/` in your vault
3. In Obsidian, go to `Settings > Community Plugins`
4. Disable restricted mode if necessary
5. Enable the "Timeline Gantt" plugin

### Installation via NPM (for development)

```bash
cd .obsidian/plugins/timeline-gantt
npm install
npm run dev
```

## 📖 How to Use

### 1. Create a Project

Use the command `Timeline Gantt: Create New Project` or click the calendar icon in the sidebar.

### 2. Add Tasks

**Option A: Via Timeline**
- Click the "+ Task" button in the toolbar
- Fill in the information and click OK

**Option B: Create Note Manually**
```markdown
---
timelineId: task-1
timelineType: task
timelineStart: 2025-01-05
timelineEnd: 2025-01-12
timelineStatus: in-progress
timelineAssignee: username
timelineLabels: [design, high-priority]
timelineDependencies: []
timelinePriority: high
timelineProgress: 50
---

# My Task

## Description
Detailed task description...

## Notes
- Note 1
- Note 2
```

## ⚙️ Settings

Access `Settings > Timeline Gantt` to customize:

- **Language**: Select interface language (English, Portuguese, Spanish, German)
- **Default View**: Default time scale (days, weeks, months, etc.)
- **Default Project Folder**: Default folder for new notes
- **Auto Sync**: Enable/disable automatic synchronization
- **Show Weekends**: Show or hide weekends
- **Date Format**: Date format (default: YYYY-MM-DD)
- **Templates**: Configure templates for tasks and milestones

## 📄 License

MIT License - see LICENSE file for details.

---

**Version**: 1.0.0  
**Last Updated**: November 2025
