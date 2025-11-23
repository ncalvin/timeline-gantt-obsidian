timelineId: task-001
timelineType: task
timelineStart: 2025-11-25
timelineEnd: 2025-12-02
timelineStatus: in-progress
timelineAssignee: Seu Nome
timelineLabels: [importante]
timelinePriority: high
timelineProgress: 0
timelineDependencies: [task-001, task-002]

# 🚀 Quickstart Guide - Timeline Gantt

This guide will take you from zero to your first project in 5 minutes!

## ⚡ Quick Start

### Step 1: Install Dependencies

```bash
cd .obsidian/plugins/timeline-gantt
npm install
```

### Step 2: Build the Plugin

```bash
npm run build
```

For development with hot reload:
```bash
npm run dev
```

### Step 3: Enable the Plugin

1. In Obsidian, go to `Settings > Community Plugins`
2. Disable "Restricted Mode" if necessary
3. Find "Timeline Gantt" in the list
4. Enable the plugin

### Step 4: Open the Timeline

- **Option 1**: Click the calendar icon in the left sidebar
- **Option 2**: Use the command palette `Ctrl/Cmd + P` and type "Open Timeline View"
- **Option 3**: Use the keyboard shortcut (configurable)

### Step 5: Create Your First Project

1. In the Timeline view, click "Create Project"
2. Enter the project name (e.g., "My First Project")
3. Click "OK"

### Step 6: Add a Task

**Method 1: Via Interface**
1. Select your project in the dropdown
2. Click "+ Task"
3. Fill in:
   - Title: "My first task"
   - Start date: Today
   - End date: 7 days from now
   - Status: "In Progress"
4. Click "Create"

**Method 2: Via Note**
1. Create a new note in `Projects/`
2. Add the frontmatter:

```yaml
---
timelineId: task-001
timelineType: task
timelineStart: 2025-11-25
timelineEnd: 2025-12-02
timelineStatus: in-progress
timelineAssignee: Your Name
timelineLabels: [important]
timelinePriority: high
timelineProgress: 0
---

# My First Task

## Description
What you need to do...

## Notes
- Note 1
- Note 2
```

3. Save the note
4. The task will automatically appear on the timeline!

## 🎯 Try It Now

### Drag and Drop
1. On the timeline, click and drag a task
2. Drop it on a new date
3. Go back to the note - the dates have been updated!

### Edit in the Note
1. Open the task note
2. Change `timelineEnd` to a different date
3. Go back to the timeline - the bar has been resized!

### Add a Milestone
1. Click "+ Milestone"
2. Set:
   - Title: "Release v1.0"
   - Date: A future date
3. The diamond appears on the timeline!

## 📊 Next Steps

### Explore Filters
- Use the search field to find tasks
- Filter by status, labels, or assignee

### Set Up Dependencies
Add dependencies in the frontmatter:
```yaml
timelineDependencies: [task-001, task-002]
```

### Export Your Project
1. Select the project
2. Click "Export"
3. Choose JSON, CSV, or PNG

### Customize
Go to `Settings > Timeline Gantt` to:
- Change the default time scale
- Configure templates
- Set colors by label
- Adjust date format

## 💡 Tips

### Useful Shortcuts
- `Ctrl/Cmd + Click`: Open the task note
- `Scroll`: Navigate horizontally
- `Ctrl/Cmd + Scroll`: Zoom in/out

### Organization
- Keep all project notes in `Projects/`
- Use consistent labels
- Clearly define assignees
- Update progress regularly

### Synchronization
- Enable "Auto Sync" in settings
- Changes are instant
- No need to worry about loops - the plugin detects them automatically

## 🐛 Common Issues

### "No project selected"
→ Create a project first using the command or button

### "Item does not appear on the timeline"
→ Check if:
  - The frontmatter is correct
  - Dates are in YYYY-MM-DD format
  - The `timelineId` is unique

### "Synchronization does not work"
→ Check:
  - Auto Sync is enabled
  - The note is saved
  - The plugin was reloaded

## 📚 Resources

- [Full README](README.md)
- [Examples](../Projects/)
- [Changelog](CHANGELOG.md)

## 🎉 Done!

You are now ready to manage your projects with Timeline Gantt!

Try creating more tasks, adding dependencies, and exploring all the features.

---

**Need help?**
- Check the full README
- See the examples in `Projects/`
- Open an issue on GitHub
