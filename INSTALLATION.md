# 📦 Installation Guide - Timeline Gantt Plugin

## Prerequisites

Before you start, make sure you have installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Obsidian** (v0.15.0 or higher)

To check if you have them installed:
```bash
node --version
npm --version
```

## 🚀 Complete Installation

### Step 1: Navigate to the plugin folder

```bash
cd "/Users/calvin/Library/CloudStorage/OneDrive-BibliotecasCompartilhadas-onedrive/Pilot/Pilot/.obsidian/plugins/timeline-gantt"
```

### Step 2: Install dependencies

```bash
npm install
```

This will install:
- `obsidian` - Obsidian API
- `d3` - Visualization library
- `d3-zoom` - Zoom features
- `moment` - Date manipulation
- `typescript` - TypeScript compiler
- `esbuild` - Build tool
- And other development dependencies

**Estimated time**: 1-2 minutes

### Step 3: Build the plugin

**For development** (with auto-reload):
```bash
npm run dev
```

**For production**:
```bash
npm run build
```

This will create the `main.js` file in the root of the plugin folder.

**Estimated time**: 10-30 seconds

### Step 4: Enable the plugin in Obsidian

1. **Open Obsidian**
2. Go to **Settings** (gear icon)
3. Navigate to **Community Plugins**
4. If necessary, disable "**Restricted Mode**"
5. Click "**Reload plugins**" or restart Obsidian
6. Find "**Timeline Gantt**" in the list
7. **Enable** the plugin using the toggle

### Step 5: Verify installation

To check if it is working:

1. You should see a **calendar icon** in the left sidebar
2. Use the command palette `Ctrl/Cmd + P` and type "Timeline"
3. You should see the plugin commands appear

## ✅ Quick Checklist

Run this checklist to ensure everything is working:

- [ ] Dependencies installed (`node_modules/` exists)
- [ ] Plugin built (`main.js` exists)
- [ ] Plugin enabled in Obsidian
- [ ] Calendar icon visible in the sidebar
- [ ] Commands appear in the command palette
- [ ] Timeline view opens without errors

## 🔧 Troubleshooting

### Error: "Cannot find module 'obsidian'"

**Solution**: Run `npm install` again

### Error: "Command not found: npm"

**Solution**: Install Node.js from https://nodejs.org/

### Plugin does not appear in Obsidian

**Solutions**:
1. Check if the `main.js` file was generated
2. Restart Obsidian completely
3. Make sure it is in the correct folder: `.obsidian/plugins/timeline-gantt/`

### TypeScript compilation error

**Solution**: Run `npm run build` instead of `npm run dev`

### "main.js" is not generated

**Solutions**:
1. Make sure `esbuild.config.mjs` exists
2. Run `npm install` again
3. Check for errors in the console

## 📝 Useful Commands

### During Development

```bash
# Install dependencies
npm install

# Development mode (auto-reload)
npm run dev

# Production build
npm run build

# Check TypeScript version
npx tsc --version

# Clean node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Update the Plugin

```bash
# Stop the dev server (Ctrl + C if running)

# Update dependencies
npm update

# Rebuild
npm run build
```

## 🎯 First Run

After successful installation:

1. **Open the Timeline**
   - Click the calendar icon
   - Or use `Ctrl/Cmd + P` → "Open Timeline View"

2. **Create a Project**
   - Use `Ctrl/Cmd + P` → "Create New Project"
   - Enter the project name
   - Click OK

3. **See the Examples**
   - Go to the `Projects/` folder
   - Open "Tarefa de Exemplo.md"
   - Open the Timeline and see the task appear

## 📚 Next Steps

Now that the plugin is installed:

1. Read [QUICKSTART.md](QUICKSTART.md) for a quick tutorial
2. Check [README.md](README.md) for full documentation
3. Explore the examples in `Projects/`
4. Configure the plugin in `Settings > Timeline Gantt`

## 🔄 Continuous Development

If you plan to contribute or modify the plugin:

### File Structure

```
src/
├── main.ts              # Entry point
├── models/              # Data models
│   ├── types.ts
│   └── ProjectManager.ts
├── sync/                # Synchronization
│   └── SyncEngine.ts
├── views/               # Visual interface
│   └── TimelineView.ts
└── settings/            # Settings
    └── SettingsTab.ts
```

### Development Workflow

1. Make your changes in `src/`
2. `npm run dev` recompiles automatically
3. Reload Obsidian (Ctrl/Cmd + R)
4. Test your changes
5. Commit when satisfied

### Debugging

To debug the plugin:

1. Open Obsidian DevTools: `Ctrl/Cmd + Shift + I`
2. Go to the "Console" tab
3. Plugin logs will appear here
4. Use `console.log()` in the code for debugging

## ⚙️ Advanced Settings

### Change the Build Output Folder

Edit `esbuild.config.mjs`:
```javascript
outfile: "main.js",  // Change to another name if needed
```

### Add New Dependencies

```bash
npm install package-name
```

Then add to `external` in `esbuild.config.mjs` if it is an Obsidian dependency.

## 🎉 Done!

Your Timeline Gantt plugin is installed and working!

For any issues, check:
- [README.md](README.md) - Full documentation
- [QUICKSTART.md](QUICKSTART.md) - Quick guide
- DevTools Console - For technical errors

---

**Last updated**: November 23, 2025  
**Plugin Version**: 1.0.0
