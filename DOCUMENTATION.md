# Timeline Gantt Plugin - Complete Documentation

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Installation](#installation)
4. [Quick Start](#quick-start)
5. [User Guide](#user-guide)
6. [Configuration](#configuration)
7. [Data Model](#data-model)
8. [Synchronization](#synchronization)
9. [Advanced Features](#advanced-features)
10. [Troubleshooting](#troubleshooting)
11. [API Reference](#api-reference)
12. [Development](#development)
13. [Contributing](#contributing)
14. [License](#license)

---

## Overview

**Timeline Gantt** is a comprehensive project management plugin for Obsidian that provides an interactive Gantt chart timeline with bi-directional synchronization between your notes and the visual timeline.

### Key Capabilities

- **Visual Project Management**: Interactive Gantt chart with drag-and-drop functionality
- **Bi-directional Sync**: Changes in notes automatically update the timeline and vice versa
- **Task Dependencies**: Define and visualize relationships between tasks
- **Flexible Filtering**: Filter by status, tags, assignee, dates, and more
- **Export/Import**: Share projects via JSON, CSV, or image formats
- **History Tracking**: Complete audit trail of all changes
- **Customizable**: Templates, colors, and date formats tailored to your workflow

### System Requirements

- **Obsidian**: v0.15.0 or higher
- **Node.js**: v16.0.0 or higher (for development)
- **npm**: Latest version

---

## Features

### Core Features

#### 📊 Interactive Gantt Timeline

- **Multi-scale Visualization**: View your timeline in days, weeks, months, quarters, or years
- **Smooth Navigation**: Scroll horizontally and vertically through large projects
- **Responsive Design**: Works seamlessly on desktop and tablet devices
- **Grid System**: Time-aligned grid for precise planning

#### 🔄 Bi-directional Synchronization

- **Note → Timeline**: Edit metadata in your notes, see instant updates on the timeline
- **Timeline → Note**: Drag tasks on the timeline, metadata automatically updates in notes
- **Loop Prevention**: Intelligent detection prevents infinite sync loops
- **Real-time Updates**: Changes reflect immediately across the interface

#### 🎯 Task Management

- **Task Creation**: Create tasks directly from the timeline or via notes
- **Status Tracking**: Todo, In Progress, Done, Cancelled
- **Progress Indicators**: Visual progress bars (0-100%)
- **Priority Levels**: Low, Medium, High priority settings
- **Assignee Management**: Assign tasks to team members
- **Duration Calculation**: Automatic duration calculation based on dates

#### 🏁 Milestones

- **Visual Markers**: Diamond-shaped markers for important dates
- **Status Tracking**: Pending or Completed
- **Quick Navigation**: Click to jump to milestone notes
- **Timeline Anchors**: Key project phases and deliverables

#### 🔗 Dependencies

- **Multiple Types**: Finish-to-Start (FS), Start-to-Start (SS), Finish-to-Finish (FF), Start-to-Finish (SF)
- **Visual Connections**: Arrows showing task relationships
- **Circular Detection**: Automatic prevention of circular dependencies
- **Critical Path**: Identify bottlenecks (future feature)

#### 🔍 Filtering & Search

- **Text Search**: Find tasks by title or description
- **Status Filter**: Show only specific statuses
- **Tag Filter**: Filter by one or multiple tags
- **Assignee Filter**: View tasks for specific team members
- **Date Range**: Focus on specific time periods
- **Compound Filters**: Combine multiple filters simultaneously

#### 📤 Export & Import

- **JSON Export**: Complete project data with all metadata
- **CSV Export**: Compatible with Excel and Google Sheets
- **Image Export**: PNG/SVG snapshots of your timeline (planned)
- **JSON Import**: Restore or share projects across vaults
- **Backup/Restore**: Full project state preservation

### Advanced Features

#### 📝 Templates

- **Task Templates**: Predefined structure for new tasks
- **Milestone Templates**: Standard milestone format
- **Custom Fields**: Add your own metadata fields
- **Placeholder Support**: Dynamic content in templates

#### 🎨 Customization

- **Color Schemes**: Custom colors per tag or status
- **Date Formats**: Choose your preferred date notation
- **First Day of Week**: Sunday or Monday start
- **Density Settings**: Compact or detailed view modes
- **Weekend Display**: Show or hide weekends

#### 📊 History & Audit

- **Change Tracking**: Every modification is logged
- **Who/When/What**: User, timestamp, and change details
- **Before/After States**: Complete change history
- **Revert Capability**: Undo individual changes (future)

---

## Installation

### Method 1: Automated Installation (Recommended)

1. Navigate to the plugin directory:
   ```bash
   cd /path/to/your/vault/.obsidian/plugins/timeline-gantt
   ```

2. Run the installation script:
   ```bash
   ./install.sh
   ```

3. Restart Obsidian or reload plugins

### Method 2: Manual Installation

1. Navigate to the plugin directory:
   ```bash
   cd /path/to/your/vault/.obsidian/plugins/timeline-gantt
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the plugin:
   ```bash
   npm run build
   ```

4. Enable the plugin:
   - Open Obsidian Settings
   - Go to **Community Plugins**
   - Disable **Safe Mode** if enabled
   - Find **Timeline Gantt** in the list
   - Toggle it **ON**

### Verification

To verify successful installation:

1. Look for the calendar icon (📅) in the left sidebar
2. Open Command Palette (`Ctrl/Cmd + P`)
3. Type "Timeline" - you should see plugin commands
4. Click the ribbon icon to open the timeline view

---

## Quick Start

### Step 1: Create Your First Project

1. Open Command Palette: `Ctrl/Cmd + P`
2. Type and select: "Timeline Gantt: Create New Project"
3. Enter project name (e.g., "Website Redesign")
4. Press OK

### Step 2: Add a Task

#### Option A: Via Note

1. Create a new note in your `Projects/` folder
2. Add this frontmatter:

```yaml
---
timelineId: task-001
timelineType: task
timelineStart: 2025-12-01
timelineEnd: 2025-12-15
timelineStatus: in-progress
timelineAssignee: John Doe
timelineLabels: [design, frontend]
timelinePriority: high
timelineProgress: 30
---

# Design Homepage

## Description
Create modern homepage design with hero section and feature showcase.

## Tasks
- [x] Research competitor designs
- [x] Create wireframes
- [ ] Design mockups
- [ ] Review with team
```

#### Option B: Via Timeline

1. Click the calendar icon to open timeline
2. Select your project from the dropdown
3. Click **"+ Task"** button
4. Fill in the form:
   - Title: "Design Homepage"
   - Start Date: 2025-12-01
   - End Date: 2025-12-15
   - Status: In Progress
   - Assignee: John Doe
5. Click **Create**

### Step 3: Add a Milestone

1. Click **"+ Milestone"** button
2. Fill in:
   - Title: "Design Review Complete"
   - Date: 2025-12-20
   - Status: Pending
3. Click **Create**

### Step 4: Interact with the Timeline

- **Click on a task/milestone**: Opens the linked note
- **Drag a task**: Changes start date (end date moves with it)
- **Resize a task**: Changes duration
- **Hover over items**: View details in tooltip

### Step 5: Use Filters

1. Type in the search box to filter by text
2. Use status dropdown to show specific statuses
3. Click tag buttons to filter by labels
4. Use date picker for custom date ranges

---

## User Guide

### Working with Projects

#### Creating Projects

Projects are containers for related tasks and milestones. Create them via:

```
Command Palette → "Timeline Gantt: Create New Project"
```

Each project can have:
- Unique ID
- Title and description
- Multiple tasks and milestones
- Custom tags
- Metadata (created/updated timestamps)

#### Project Structure

```
Project
├── Project ID: proj-1234567890
├── Title: Website Redesign
├── Description: Complete overhaul of company website
├── Items: [tasks and milestones]
├── Tags: [marketing, web, q4-2025]
├── Created: 2025-11-20T10:00:00Z
└── Updated: 2025-11-23T15:30:00Z
```

### Working with Tasks

#### Task Anatomy

Every task has:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `timelineId` | string | Yes | Unique identifier (e.g., task-001) |
| `timelineType` | `task` | Yes | Must be "task" |
| `timelineStart` | date | Yes | Start date (YYYY-MM-DD) |
| `timelineEnd` | date | Yes | End date (YYYY-MM-DD) |
| `timelineStatus` | enum | Yes | todo, in-progress, done, cancelled |
| `timelineAssignee` | string | No | Person responsible |
| `timelineLabels` | array | No | Tags/categories |
| `timelineDependencies` | array | No | IDs of prerequisite tasks |
| `timelinePriority` | enum | No | low, medium, high |
| `timelineProgress` | number | No | Percentage complete (0-100) |

#### Creating Tasks

**Method 1: Create Note First**

1. Create markdown file in `Projects/` folder
2. Add frontmatter with timeline metadata
3. Save - task appears automatically on timeline

**Method 2: Create from Timeline**

1. Click "+ Task" button
2. Fill in the form
3. Click Create
4. Note is automatically generated

#### Editing Tasks

**Via Note:**
1. Open the task note
2. Edit frontmatter fields
3. Save - timeline updates automatically

**Via Timeline:**
1. Drag task to new date
2. Or right-click → Edit
3. Note updates automatically

#### Task States

- **Todo** (Gray): Not started
- **In Progress** (Blue): Currently being worked on
- **Done** (Green): Completed
- **Cancelled** (Red): Abandoned or no longer needed

### Working with Milestones

#### Milestone Anatomy

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `timelineId` | string | Yes | Unique identifier |
| `timelineType` | `milestone` | Yes | Must be "milestone" |
| `timelineDate` | date | Yes | Milestone date (YYYY-MM-DD) |
| `timelineStatus` | enum | No | pending, completed |
| `timelineLabels` | array | No | Tags/categories |

#### Creating Milestones

Similar to tasks, but simpler:

```yaml
---
timelineId: milestone-001
timelineType: milestone
timelineDate: 2025-12-31
timelineStatus: pending
timelineLabels: [release, major]
---

# Version 2.0 Release

## Success Criteria
- [ ] All features complete
- [ ] QA passed
- [ ] Documentation updated
- [ ] Deployment successful
```

#### Milestone Visualization

- **Diamond Shape**: Easily distinguishable from tasks
- **Color Coding**: Pending (gray), Completed (green)
- **Single Date**: Point in time, not a duration

### Dependencies

#### Dependency Types

1. **Finish-to-Start (FS)** - Most common
   - Task B cannot start until Task A finishes
   - Example: Design must finish before Development starts

2. **Start-to-Start (SS)**
   - Tasks must start together
   - Example: Testing starts when Development starts

3. **Finish-to-Finish (FF)**
   - Tasks must finish together
   - Example: Documentation finishes when Development finishes

4. **Start-to-Finish (SF)** - Rare
   - Task B cannot finish until Task A starts
   - Example: Old system runs until new system starts

#### Adding Dependencies

In your task frontmatter:

```yaml
timelineDependencies: [task-design-001, task-research-002]
```

#### Visual Representation

Dependencies appear as:
- Curved arrows connecting tasks
- Color-coded by type
- Hoverable for details
- Clickable to highlight path

#### Circular Dependency Detection

The plugin prevents circular dependencies:

```
Task A depends on Task B
Task B depends on Task C
Task C depends on Task A ← BLOCKED!
```

You'll receive an error if you try to create a circular dependency.

### Filtering and Search

#### Text Search

Type in the search box to filter tasks by:
- Task title
- Task description (if enabled)
- Assignee name
- Tags

**Example**: Type "design" to see all design-related tasks

#### Status Filter

Filter by task status:
- Show only "In Progress" tasks
- Hide completed tasks
- Focus on overdue items

#### Tag Filter

Click tag buttons or select from dropdown:
- Single tag: `[design]`
- Multiple tags: `[design, frontend]`
- OR logic: Shows tasks with ANY selected tag
- AND logic available in settings

#### Date Range Filter

Focus on specific time periods:
- This week
- This month
- This quarter
- Custom range

#### Assignee Filter

View tasks for specific people:
- Select from dropdown
- Multiple assignees supported
- Unassigned tasks option

#### Compound Filters

Combine multiple filters:
```
Search: "backend"
Status: in-progress
Tags: [api, critical]
Assignee: John Doe
Date: This Sprint
```

### Timeline Navigation

#### Zooming

Use the zoom buttons:
- **Days**: Hourly precision
- **Weeks**: Daily precision
- **Months**: Weekly precision
- **Quarters**: Monthly precision
- **Years**: Quarterly precision

Or use keyboard:
- `Ctrl/Cmd + Scroll`: Zoom in/out
- `Shift + Scroll`: Horizontal scroll

#### Panning

- **Mouse Drag**: Click and drag empty space
- **Scroll Wheel**: Horizontal movement
- **Arrow Keys**: Navigate in all directions

#### Focusing

- **Click task**: Centers on that task
- **Today button**: Returns to current date
- **Fit to screen**: Auto-zoom to show all tasks

---

## Configuration

### Settings Panel

Access via `Settings → Timeline Gantt`

#### General Settings

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Default View | dropdown | weeks | Initial zoom level when opening timeline |
| Default Project Folder | text | Projects | Where new task notes are created |
| Auto Sync | toggle | ON | Automatic bi-directional synchronization |
| Show Weekends | toggle | ON | Display Saturday and Sunday |
| Date Format | text | YYYY-MM-DD | Date notation (moment.js format) |
| First Day of Week | dropdown | Monday | Week starts on Sunday or Monday |

#### Template Settings

**Task Template**

Default template for new tasks:

```markdown
## Description
[Describe the task here]

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2

## Notes
[Additional notes]
```

**Milestone Template**

Default template for milestones:

```markdown
## Success Criteria
- [ ] Criterion 1
- [ ] Criterion 2

## Notes
[Additional notes]
```

#### Color Settings

Customize colors by tag:

```json
{
  "design": "#007bff",
  "development": "#28a745",
  "testing": "#ffc107",
  "deployment": "#dc3545"
}
```

Or by status:

```json
{
  "todo": "#6c757d",
  "in-progress": "#007bff",
  "done": "#28a745",
  "cancelled": "#dc3545"
}
```

#### Advanced Settings

- **Performance Mode**: Limit rendering for large projects
- **Render Limit**: Max tasks to display (default: 200)
- **Animation Speed**: Transition duration in ms
- **Tooltip Delay**: Hover delay before showing tooltip

---

## Data Model

### Project Schema

```typescript
interface Project {
  projectId: string;           // Unique ID (e.g., "proj-1234567890")
  title: string;               // Project name
  description?: string;        // Optional description
  items: (Task | Milestone)[]; // Array of timeline items
  tags?: string[];             // Project-level tags
  createdAt: string;           // ISO 8601 timestamp
  updatedAt: string;           // ISO 8601 timestamp
}
```

### Task Schema

```typescript
interface Task extends TimelineItem {
  id: string;                  // Unique ID (e.g., "task-001")
  type: 'task';                // Item type
  title: string;               // Task name
  start: string;               // Start date (YYYY-MM-DD)
  end: string;                 // End date (YYYY-MM-DD)
  durationDays: number;        // Calculated duration
  status: TaskStatus;          // todo | in-progress | done | cancelled
  assignee?: string;           // Assigned person
  labels: string[];            // Tags/categories
  dependencies: string[];      // IDs of prerequisite tasks
  priority?: Priority;         // low | medium | high
  progress?: number;           // 0-100 percentage
  notePath?: string;           // Link to Obsidian note
  history: HistoryEntry[];     // Change log
}
```

### Milestone Schema

```typescript
interface Milestone extends TimelineItem {
  id: string;                  // Unique ID (e.g., "milestone-001")
  type: 'milestone';           // Item type
  title: string;               // Milestone name
  date: string;                // Milestone date (YYYY-MM-DD)
  status?: MilestoneStatus;    // pending | completed
  labels: string[];            // Tags/categories
  notePath?: string;           // Link to Obsidian note
  history: HistoryEntry[];     // Change log
}
```

### History Entry Schema

```typescript
interface HistoryEntry {
  by: string;                  // User who made the change
  at: string;                  // ISO 8601 timestamp
  changes: string;             // Description of changes
  before?: any;                // Previous state
  after?: any;                 // New state
}
```

### Frontmatter Format

Tasks and milestones are stored in your notes' frontmatter:

**Task Example:**

```yaml
---
timelineId: task-homepage-design
timelineType: task
timelineStart: 2025-12-01
timelineEnd: 2025-12-15
timelineStatus: in-progress
timelineAssignee: Jane Smith
timelineLabels: [design, frontend, high-priority]
timelineDependencies: [task-research-001]
timelinePriority: high
timelineProgress: 60
---
```

**Milestone Example:**

```yaml
---
timelineId: milestone-beta-launch
timelineType: milestone
timelineDate: 2025-12-31
timelineStatus: pending
timelineLabels: [release, major, v2]
---
```

---

## Synchronization

### How Sync Works

The Timeline Gantt plugin maintains **bi-directional synchronization** between your Markdown notes and the visual timeline.

#### Note → Timeline

1. You edit frontmatter in a note
2. File watcher detects the change
3. SyncEngine parses the frontmatter
4. ProjectManager updates the in-memory data
5. TimelineView re-renders affected items

#### Timeline → Note

1. You drag a task on the timeline
2. TimelineView calculates new dates
3. ProjectManager updates the data
4. SyncEngine writes to frontmatter
5. Note file is updated

### Sync Prevention

To prevent infinite loops, the plugin:

1. **Tracks Active Syncs**: Maintains a `Set<string>` of files currently syncing
2. **Skips Re-entry**: If a file is already syncing, skip additional sync attempts
3. **Clears on Complete**: Removes from set when sync finishes

```typescript
private syncInProgress: Set<string> = new Set();

async updateNoteMeta(file: TFile, meta: Partial<NoteMeta>): Promise<void> {
  if (this.syncInProgress.has(file.path)) return; // Skip if already syncing
  
  this.syncInProgress.add(file.path);
  try {
    // Perform sync
  } finally {
    this.syncInProgress.delete(file.path); // Always cleanup
  }
}
```

### Conflict Resolution

If conflicts occur (rare):

1. **Last Write Wins**: Most recent change is preserved
2. **History Preserved**: Previous states saved in history
3. **Manual Revert**: User can manually undo via history (future)

### Performance Optimization

- **Debouncing**: File changes debounced by 300ms
- **Batch Updates**: Multiple changes batched into single sync
- **Selective Sync**: Only changed fields are updated
- **Lazy Loading**: Notes loaded on-demand

---

## Advanced Features

### Custom Fields

Add your own metadata fields:

```yaml
---
# Standard fields
timelineId: task-001
timelineType: task
# ... other standard fields

# Custom fields
customCategory: engineering
customCost: 5000
customRisk: medium
customTeam: backend-squad
---
```

Access in templates or queries.

### Bulk Operations

Select multiple tasks (Shift+Click) to:
- Move all selected tasks
- Change status in bulk
- Assign to same person
- Add common tags

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + P` | Open command palette |
| `Ctrl/Cmd + Click` | Open linked note |
| `Delete` | Delete selected task |
| `Ctrl/Cmd + Z` | Undo last change |
| `Ctrl/Cmd + F` | Focus search box |
| `Escape` | Clear selection |
| `Space` | Toggle task status |
| Arrow keys | Navigate tasks |

### Integration with Other Plugins

#### Tasks Plugin

Compatible with Obsidian Tasks plugin:

```markdown
- [ ] Design homepage 📅 2025-12-01 ⏫
- [x] Research competitors ✅ 2025-11-20
```

#### Dataview

Query timeline data with Dataview:

```dataview
TABLE timelineStatus, timelineAssignee, timelineProgress
FROM ""
WHERE timelineType = "task" AND timelineStatus = "in-progress"
SORT timelineStart ASC
```

#### Calendar

Timeline dates sync with Daily Notes and Calendar plugin.

### Webhooks (Future)

Planned support for webhooks:

- Notify external systems on task completion
- Sync with GitHub issues
- Update Jira tickets
- Send Slack notifications

---

## Troubleshooting

### Common Issues

#### Plugin Doesn't Appear

**Symptoms**: No calendar icon in sidebar, commands not found

**Solutions**:
1. Check if `main.js` exists in plugin folder
2. Restart Obsidian completely
3. Re-run `npm run build`
4. Check browser console for errors (`Ctrl/Cmd + Shift + I`)

#### Sync Not Working

**Symptoms**: Changes in note don't update timeline

**Solutions**:
1. Verify Auto Sync is enabled in settings
2. Check frontmatter format is correct (YAML syntax)
3. Ensure `timelineId` matches between note and timeline
4. Look for sync errors in console
5. Try manually reloading the project

#### Timeline Empty

**Symptoms**: Timeline shows "No items found"

**Solutions**:
1. Create a project first
2. Ensure notes have correct `timelineType` field
3. Check date format is `YYYY-MM-DD`
4. Verify notes are in the configured folder
5. Clear filters that might be hiding items

#### Dates Not Updating

**Symptoms**: Dragging tasks doesn't update note

**Solutions**:
1. Check file permissions (is note read-only?)
2. Verify frontmatter is properly formatted
3. Ensure no syntax errors in YAML
4. Check console for error messages
5. Try editing note manually first

#### Performance Issues

**Symptoms**: Timeline is slow or laggy

**Solutions**:
1. Reduce visible time range
2. Enable Performance Mode in settings
3. Lower render limit
4. Close other heavy plugins
5. Consider splitting into smaller projects

### Error Messages

#### "Circular dependency detected"

**Cause**: You're trying to create a dependency loop

**Solution**: Review your dependencies and remove the circular reference

#### "Invalid date format"

**Cause**: Date is not in `YYYY-MM-DD` format

**Solution**: Update to correct format, e.g., `2025-12-01`

#### "Duplicate ID found"

**Cause**: Two items have the same `timelineId`

**Solution**: Make IDs unique, e.g., `task-001`, `task-002`

### Debug Mode

Enable debug logging:

1. Open DevTools (`Ctrl/Cmd + Shift + I`)
2. Go to Console tab
3. Filter by "Timeline Gantt"
4. Look for error or warning messages

### Reset Plugin

If all else fails:

1. Disable plugin in settings
2. Delete `main.js` from plugin folder
3. Run `npm run build` again
4. Re-enable plugin
5. Reload projects

---

## API Reference

### Plugin Commands

#### Open Timeline View

```typescript
app.commands.executeCommandById('timeline-gantt:open-timeline-view');
```

Opens the timeline view in the sidebar.

#### Create New Project

```typescript
app.commands.executeCommandById('timeline-gantt:create-project');
```

Prompts for project name and creates new project.

#### Import Project

```typescript
app.commands.executeCommandById('timeline-gantt:import-project');
```

Opens file picker to import JSON project.

### ProjectManager API

```typescript
// Get project manager instance
const pm = plugin.projectManager;

// Create project
pm.saveProject({
  projectId: 'proj-001',
  title: 'My Project',
  items: [],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
});

// Get project
const project = pm.getProject('proj-001');

// Add task to project
pm.addItem('proj-001', {
  id: 'task-001',
  type: 'task',
  title: 'My Task',
  start: '2025-12-01',
  end: '2025-12-15',
  status: 'todo',
  labels: [],
  dependencies: [],
  history: []
});

// Update task
pm.updateItem('proj-001', 'task-001', {
  status: 'in-progress',
  progress: 50
});

// Remove task
pm.removeItem('proj-001', 'task-001');

// Export project
const json = pm.exportProject('proj-001');

// Import project
pm.importProject(jsonString);
```

### SyncEngine API

```typescript
// Get sync engine instance
const sync = plugin.syncEngine;

// Extract metadata from note
const meta = await sync.extractNoteMeta(file);

// Update note metadata
await sync.updateNoteMeta(file, {
  timelineStatus: 'done',
  timelineProgress: 100
});

// Sync note to timeline
await sync.syncNoteToTimeline(file, 'proj-001');

// Sync timeline to note
await sync.syncTimelineToNote('proj-001', 'task-001');

// Create note from timeline item
const note = await sync.createNoteFromItem(
  'proj-001',
  'task-001',
  'Projects',
  templateContent
);

// Load project from notes
await sync.loadProjectFromNotes('proj-001', 'Projects');
```

### Events

```typescript
// Listen for item updates
plugin.on('item-updated', (projectId, itemId) => {
  console.log(`Item ${itemId} updated in project ${projectId}`);
});

// Listen for sync events
plugin.on('sync-complete', (filePath) => {
  console.log(`Sync complete for ${filePath}`);
});

// Listen for dependency changes
plugin.on('dependency-added', (taskId, dependencyId) => {
  console.log(`Dependency added: ${taskId} depends on ${dependencyId}`);
});
```

---

## Development

### Setup Development Environment

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development mode:
   ```bash
   npm run dev
   ```
4. Make changes in `src/`
5. Changes auto-compile
6. Reload Obsidian to see updates

### Project Structure

```
src/
├── main.ts                    # Plugin entry point
├── models/
│   ├── types.ts              # TypeScript definitions
│   └── ProjectManager.ts     # Data management
├── sync/
│   └── SyncEngine.ts         # Bi-directional sync
├── views/
│   └── TimelineView.ts       # Gantt visualization
├── settings/
│   └── SettingsTab.ts        # Settings UI
└── utils/                     # Helper functions
```

### Build Commands

```bash
# Development (watch mode)
npm run dev

# Production build
npm run build

# Type checking
npm run check

# Linting
npm run lint

# Format code
npm run format
```

### Testing

```bash
# Run unit tests
npm run test

# Run with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

### Code Style

Follow TypeScript best practices:

- Use strict mode
- Prefer interfaces over types
- Document public APIs
- Use async/await over promises
- Handle errors gracefully

### Debugging

1. Open DevTools in Obsidian: `Ctrl/Cmd + Shift + I`
2. Set breakpoints in source code
3. Add `debugger;` statements
4. Use `console.log()` for quick debugging
5. Check Network tab for API calls

---

## Contributing

We welcome contributions! Here's how to get started:

### Reporting Issues

1. Check existing issues first
2. Provide clear reproduction steps
3. Include system information
4. Attach screenshots if applicable
5. Describe expected vs actual behavior

### Submitting Pull Requests

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/my-new-feature
   ```
3. Make your changes
4. Add tests for new features
5. Ensure all tests pass
6. Update documentation
7. Commit with clear messages:
   ```bash
   git commit -m "Add: New feature description"
   ```
8. Push to your fork
9. Open a Pull Request

### Commit Message Format

Use conventional commits:

```
<type>: <description>

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding tests
- `chore`: Maintenance tasks

### Code Review Process

1. Maintainer reviews PR
2. Address feedback
3. Tests must pass
4. Two approvals required
5. Merge when ready

---

## License

**MIT License**

Copyright (c) 2025 Calvin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

## Support

### Documentation

- **README**: Overview and basic usage
- **QUICKSTART**: 5-minute tutorial
- **INSTALLATION**: Setup guide
- **ARCHITECTURE**: Technical documentation

### Community

- **GitHub Issues**: Bug reports and feature requests
- **Discussions**: Questions and community support
- **Discord**: Real-time chat (if available)

### Contact

- **Email**: your-email@example.com
- **GitHub**: @your-username
- **Twitter**: @your-handle

---

**Version**: 1.0.0  
**Last Updated**: November 23, 2025  
**Minimum Obsidian Version**: 0.15.0
