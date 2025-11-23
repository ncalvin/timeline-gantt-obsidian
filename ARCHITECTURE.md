
# 🏗️ Timeline Gantt Plugin Architecture

## 📐 Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    OBSIDIAN APPLICATION                      │
│  ┌───────────────────────────────────────────────────────┐  │
│  │              Timeline Gantt Plugin                     │  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌─────────────┐ │  │
│  │  │   Main.ts    │  │ TimelineView │  │ SyncEngine  │ │  │
│  │  │  (Orquestrador)│ │  (UI/Gantt) │  │ (Bi-Sync)   │ │  │
│  │  └──────┬───────┘  └──────┬───────┘  └──────┬──────┘ │  │
│  │         │                 │                  │         │  │
│  │         └─────────────────┼──────────────────┘         │  │
│  │                           │                            │  │
│  │                  ┌────────▼────────┐                   │  │
│  │                  │ ProjectManager  │                   │  │
│  │                  │  (Data Layer)   │                   │  │
│  │                  └────────┬────────┘                   │  │
│  └───────────────────────────┼────────────────────────────┘  │
│                              │                               │
│  ┌───────────────────────────▼────────────────────────────┐ │
│  │          Obsidian Vault (Markdown Files)               │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌──────────────┐  │ │
│  │  │ Project.json│  │  Task.md    │  │ Milestone.md │  │ │
│  │  └─────────────┘  └─────────────┘  └──────────────┘  │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## 🔄 Data Flow

### 1. Task Creation

```
User → TimelineView → ProjectManager → SyncEngine → Note.md
          ↓
      D3.js Render
```

### 2. Editing in the Note

```
Note.md → FileWatcher → SyncEngine → ProjectManager → TimelineView
                              ↓
                           D3.js Update
```

### 3. Drag & Drop on Timeline

```
User Drag → TimelineView → ProjectManager → SyncEngine → Note.md
     ↓
   D3.js Update
```


## 🧩 Main Components

### 1. **Main.ts** - Central Orchestrator

```typescript
class TimelineGanttPlugin {
  ├── onload()           // Inicialização
  ├── registerView()     // Registra TimelineView
  ├── registerCommands() // Comandos do plugin
  ├── watchFiles()       // Monitora mudanças em arquivos
  └── settings           // Gerencia configurações
}
```

**Responsibilities:**
- Plugin lifecycle
- Registering views and commands
- Global settings
- Event listeners

---


### 2. **ProjectManager** - Data Layer

```typescript
class ProjectManager {
  ├── projects: Map<id, Project>
  ├── saveProject()
  ├── getProject()
  ├── addItem()
  ├── updateItem()
  ├── removeItem()
  └── validateDependencies()
}
```

**Responsibilities:**
- CRUD for projects and items
- Data validation
- In-memory state management
- Circular dependency detection

---


### 3. **SyncEngine** - Bidirectional Synchronization

```typescript
class SyncEngine {
  ├── extractNoteMeta()      // Nota → Dados
  ├── updateNoteMeta()       // Dados → Nota
  ├── syncNoteToTimeline()   // Nota modificada
  ├── syncTimelineToNote()   // Timeline modificada
  ├── createNoteFromItem()   // Criar nota vinculada
  └── loadProjectFromNotes() // Carregar do vault
}
```

**Responsibilities:**
- Bidirectional synchronization
- Frontmatter parsing
- Loop prevention
- Automatic note creation

**Loop Prevention:**
```typescript
syncInProgress: Set<string> // Rastreia sincronizações ativas
```

---


### 4. **TimelineView** - Visual Interface

```typescript
class TimelineView extends ItemView {
  ├── renderToolbar()        // Barra de ferramentas
  ├── renderTimeline()       // Gantt com D3.js
  ├── renderDependencies()   // Setas de dependência
  ├── filterItems()          // Aplicar filtros
  ├── onItemClick()          // Abrir nota
  ├── onTaskMoved()          // Drag & drop
  └── exportProject()        // Export JSON/CSV/PNG
}
```

**Responsibilities:**
- Visual rendering (D3.js)
- User interactions
- Filters and search
- Data export

**Visual Technologies:**
- D3.js - Scales, axes, shapes
- SVG - Vector graphics
- CSS3 - Styles and animations

---


### 5. **SettingsTab** - Settings

```typescript
class TimelineSettingsTab {
  ├── display()            // Renderiza UI de settings
  └── save/load settings   // Persistência
}
```

**Managed Settings:**
- Default view
- Project folder
- Templates
- Auto-sync
- Date format
- Colors by label


## 📊 Data Model

### Hierarchy

```
Project
├── projectId: string
├── title: string
├── items: Array<Task | Milestone>
└── metadata (created, updated, tags)

Task extends TimelineItem
├── id: string
├── title: string
├── start: date
├── end: date
├── status: enum
├── assignee: string
├── dependencies: string[]
├── progress: number (0-100)
├── priority: enum
└── notePath: string

Milestone extends TimelineItem
├── id: string
├── title: string
├── date: date
├── status: enum
└── notePath: string
```


### Frontmatter (YAML)

```yaml
---
timelineId: task-123
timelineType: task
timelineStart: 2025-11-25
timelineEnd: 2025-12-05
timelineStatus: in-progress
timelineAssignee: Calvin
timelineLabels: [dev, backend]
timelineDependencies: [task-120]
timelinePriority: high
timelineProgress: 50
---
```


## 🔌 Integration with Obsidian API

### Used APIs

```typescript
// Vault API
app.vault.getMarkdownFiles()
app.vault.create(path, content)
app.vault.modify(file, content)

// Metadata Cache API
app.metadataCache.getFileCache(file)
app.fileManager.processFrontMatter(file, callback)

// Workspace API
app.workspace.openLinkText(path)
app.workspace.getLeavesOfType(type)
app.workspace.getRightLeaf()

// Events API
app.vault.on('modify', callback)
app.vault.on('create', callback)
app.vault.on('delete', callback)
```

## 🎨 Visual Layer (D3.js)

### Rendering Pipeline

```
Data → Scales → Layout → SVG Elements → Interactions
```

### Visual Components

1. **X Axis (Time)**
   - `d3.scaleTime()` - Time scale
   - `d3.axisTop()` - Top axis
   - Custom date formatting

2. **Y Axis (Tasks)**
   - `d3.scaleBand()` - Band scale
   - Task labels
   - Grouping by project

3. **Task Bars**
   - `<rect>` - Main bars
   - Status colors
   - Overlaid progress bar

4. **Milestones**
   - `d3.symbol(d3.symbolDiamond)` - Diamonds
   - Temporal positioning
   - Status colors

5. **Dependencies**
   - `<path>` - Connector lines
   - Arrows (`<marker>`)
   - Hover detection

6. **Interactions**
   - `d3.drag()` - Drag tasks
   - `d3.zoom()` - Zoom and pan (future)
   - Click handlers

## 🔐 Security and Validation

### Implemented Validations

1. **Unique IDs**
   ```typescript
   // Validation when adding item
   if (existingItem) throw Error("Duplicate ID")
   ```

2. **Circular Dependencies**
   ```typescript
   hasCircularDependency(taskId, depId)
   // DFS to detect cycles
   ```

3. **Date Format**
   ```typescript
   // Validate YYYY-MM-DD
   /^\d{4}-\d{2}-\d{2}$/.test(date)
   ```

4. **Types and Status**
   ```typescript
   type TaskStatus = 'todo' | 'in-progress' | 'done' | 'cancelled'
   // TypeScript ensures valid values
   ```

## 🚀 Performance

### Optimizations

1. **Efficient Synchronization**
   - Debounce on file watchers
   - Set to track sync in progress
   - Sync only modified files

2. **Rendering**
   - Virtualization (for large projects) - TODO
   - Filters applied before render
   - D3.js enter/update/exit pattern

3. **Memory**
   - Map for O(1) project access
   - Lazy loading of notes
   - Listener garbage collection

## 🔮 Extensibility

### Extension Points

1. **New Item Types**
   ```typescript
   type TimelineItemType = 'task' | 'milestone' | 'phase'
   ```

2. **New Filters**
   ```typescript
   interface TimelineFilters {
     // Add new fields here
   }
   ```

3. **Custom Exporters**
   ```typescript
   exportProject(format: 'json' | 'csv' | 'png' | 'svg')
   ```

4. **Visual Themes**
   ```typescript
   settings.colorByLabel: Record<string, string>
   ```

## 📝 Code Patterns

### Used Design Patterns

1. **Observer Pattern**
   - File watchers observe changes
   - TimelineView observes ProjectManager

2. **Singleton Pattern**
   - ProjectManager (single instance)
   - SyncEngine (single instance)

3. **Factory Pattern**
   - Item creation via ProjectManager

4. **MVC-like**
   - Model: ProjectManager + types
   - View: TimelineView
   - Controller: SyncEngine + Main

## 🧪 Testability

### Test Areas

```typescript
// Unit
- ProjectManager.addItem()
- ProjectManager.hasCircularDependency()
- SyncEngine.extractNoteMeta()

// Integration
- Full bidirectional sync
- Note creation → Timeline
- Drag on timeline → Note update

// E2E
- Full project creation flow
- Import/Export roundtrip
- Filters and search
```


## 📚 External Dependencies

```json
{
   "obsidian": "Obsidian API",
   "d3": "Data visualization",
   "d3-zoom": "Zoom features",
   "moment": "Date manipulation",
   "typescript": "Type safety",
   "esbuild": "Fast bundler"
}
```

---

---

**Conclusion:** Modular, extensible, and well-layered architecture, following TypeScript best practices and native integration with Obsidian.
