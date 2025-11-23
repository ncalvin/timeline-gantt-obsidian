# Timeline Gantt Plugin


Project planning plugin with dynamic Gantt timeline and bidirectional sync with notes for Obsidian.

**Available Languages:** [English](README_EN.md) | Portuguese | [Español](README_ES.md) | [Deutsch](README_DE.md)

## 📋 Features

- **Interactive Gantt Visualization**: Visual timeline with tasks and milestones
- **Bidirectional Sync**: Changes in notes reflect on the timeline and vice versa
- **Drag & Drop**: Move tasks to change dates
- **Dependencies**: Define relationships between tasks (FS, SS, FF, SF)
- **Advanced Filtering**: Filter by status, assignee, labels, dates
- **Export/Import**: Export projects as JSON, CSV, or image
- **History**: Track all changes with undo capability
- **Customizable Templates**: Configure templates for tasks and milestones
- **Multilanguage Support**: English, Portuguese, Spanish, and German

## 🌍 Language Support

The plugin supports 4 languages:
- **English** (en)
- **Portuguese** (pt)
- **Spanish** (es)
- **German** (de)

The plugin automatically detects your system language. You can change it manually in Settings > Timeline Gantt > Language.

## 🚀 Installation

### Manual Installation

1. Download the plugin files
2. Copy the `timeline-gantt` folder to `.obsidian/plugins/` in your vault
3. In Obsidian, go to `Settings > Community Plugins`
4. Disable restricted mode if necessary
5. Enable the "Timeline Gantt" plugin

### NPM Installation (for development)

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
timelineAssignee: ncalvin
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

### 3. Add Milestones

**Milestone via Timeline:**
- Click "+ Milestone" in the toolbar

**Milestone via Note:**
```markdown
---
timelineId: milestone-1
timelineType: milestone
timelineDate: 2025-02-01
timelineStatus: pending
timelineLabels: [release]
---

# Release Candidate

## Description
First release candidate for testing...
```

### 4. Navigate and Filter

- **Zoom**: Use the "Days", "Weeks", "Months", etc. buttons
- **Search**: Type in the search field to filter tasks
- **Filters**: Set advanced filters by status, labels, assignee

### 5. Interact with the Timeline

- **Click an item**: Opens the linked note
- **Drag a task**: Changes the start date
- **Resize**: Adjusts the task duration
- **Context menu**: Right-click for options

## ⚙️ Settings

Go to `Settings > Timeline Gantt` to customize:

- **Language**: Select the interface language (English, Portuguese, Spanish, German)
- **Default View**: Default time scale (days, weeks, months, etc.)
- **Default Project Folder**: Default folder for new notes
- **Auto Sync**: Enable/disable automatic sync
- **Show Weekends**: Show or hide weekends
- **Date Format**: Date format (default: YYYY-MM-DD)
- **Templates**: Configure templates for tasks and milestones

## 📊 Data Structure

### Task Metadata

| Field | Type | Description |
|-------|------|-------------|
| `timelineId` | string | Unique task ID |
| `timelineType` | `task` \| `milestone` | Item type |
| `timelineStart` | date (YYYY-MM-DD) | Start date |
| `timelineEnd` | date (YYYY-MM-DD) | End date |
| `timelineStatus` | `todo` \| `in-progress` \| `done` \| `cancelled` | Status |
| `timelineAssignee` | string | Assignee |
| `timelineLabels` | array | Labels/tags |
| `timelineDependencies` | array | Predecessor task IDs |
| `timelinePriority` | `low` \| `medium` \| `high` | Priority |
| `timelineProgress` | number (0-100) | Progress percentage |

### Milestone Metadata

| Field | Type | Description |
|-------|------|-------------|
| `timelineId` | string | Unique milestone ID |
| `timelineType` | `milestone` | Item type |
| `timelineDate` | date (YYYY-MM-DD) | Milestone date |
| `timelineStatus` | `pending` \| `completed` | Status |
| `timelineLabels` | array | Labels/tags |

## 🔄 Synchronization

The plugin keeps bidirectional sync:

- **Note → Timeline**: Editing metadata in the note automatically updates the timeline
- **Timeline → Note**: Dragging/editing on the timeline updates the note's metadata

### Avoiding Sync Loops

The plugin automatically detects when a sync is in progress to avoid infinite loops.

## 📤 Export/Import

### Export Project

1. Select the project
2. Click "Export"
3. Choose the format (JSON, CSV, PNG)

### Import Project

Use the command `Timeline Gantt: Import Project from JSON` and select the file.

## 🎨 Color Customization

Set custom colors by label in the settings:

```json
{
  "colorByLabel": {
    "design": "#007bff",
    "development": "#28a745",
    "test": "#ffc107",
    "release": "#dc3545"
  }
}
```

## 🔧 Available Commands

- `Timeline Gantt: Open Timeline View` - Opens the timeline view
- `Timeline Gantt: Create New Project` - Creates a new project
- `Timeline Gantt: Import Project from JSON` - Imports project from JSON

## 🐛 Troubleshooting

### Sync is not working

1. Check if "Auto Sync" is enabled in settings
2. Make sure metadata is in the correct format
3. Reload the plugin (Ctrl/Cmd + R)

### Timeline does not appear

1. Check if a project is selected
2. Make sure the project has at least one item
3. Try closing and reopening the view

### Dates are not updating

1. Check the date format (should be YYYY-MM-DD)
2. Make sure the field is in the frontmatter (between `---`)
3. Check if the `timelineId` is correct

## 📝 Complete Example

```markdown
---
timelineId: task-example-1
timelineType: task
timelineStart: 2025-01-15
timelineEnd: 2025-01-30
timelineStatus: in-progress
timelineAssignee: Calvin
timelineLabels: [development, backend, api]
timelineDependencies: [task-design-1]
timelinePriority: high
timelineProgress: 65
---

# Implement REST API

## Description

Develop the REST API for the project management system.

### Required Endpoints

- [ ] POST /projects
- [ ] GET /projects/:id
- [ ] PUT /projects/:id
- [ ] DELETE /projects/:id
- [x] GET /projects
- [x] POST /tasks
- [x] GET /tasks/:id

## Notes

- Use Express.js
- Implement JWT authentication
- Add data validation with Joi
- Write unit tests

## Dependencies

This task depends on [[API Design]] being complete.

## History

- 2025-01-15: Task created
- 2025-01-20: Progress 40% - Basic endpoints implemented
- 2025-01-25: Progress 65% - Authentication added
```

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/MyFeature`)
3. Commit your changes (`git commit -m 'Add: MyFeature'`)
4. Push to the branch (`git push origin feature/MyFeature`)
5. Open a Pull Request

## 📄 License

MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- D3.js for data visualization
- Obsidian API and community
- All contributors

## 📞 Support

- Issues: [GitHub Issues](https://github.com/your-username/timeline-gantt/issues)
- Discussions: [GitHub Discussions](https://github.com/your-username/timeline-gantt/discussions)
- Email: your-email@example.com

---

**Version**: 1.0.0  
**Last Updated**: November 2025
