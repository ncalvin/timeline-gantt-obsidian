# 📑 Timeline Gantt Plugin - Documentation Index

Welcome to the **Timeline Gantt Plugin** for Obsidian! This is your guide to quickly find all the documentation you need.

## 🚀 Where to Start?

### New User?
1. Read **[INSTALLATION.md](INSTALLATION.md)** - Step-by-step installation guide
2. Run the script: `./install.sh` (macOS/Linux) or follow the manual guide
3. Read **[QUICKSTART.md](QUICKSTART.md)** - 5-minute tutorial
4. Explore the examples in `../../Projects/`

### Already Installed?
- See **[README.md](README.md)** - Full usage documentation
- Configure in `Settings > Timeline Gantt` in Obsidian

## 📚 Complete Documentation

### 📖 User Guides

| Document | Description | When to Use |
|----------|-------------|-------------|
| **[INSTALLATION.md](INSTALLATION.md)** | Detailed installation guide | First install, technical issues |
| **[QUICKSTART.md](QUICKSTART.md)** | 5-minute quick tutorial | Learn the basics quickly |
| **[README.md](README.md)** | Full plugin documentation | Complete reference, advanced features |

### 🔧 Technical Documentation

| Document | Description | Audience |
|----------|-------------|----------|
| **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** | Technical project summary | Developers, contributors |
| **[CHANGELOG.md](CHANGELOG.md)** | Version history | All users |
| **package.json** | Dependencies and scripts | Developers |
| **tsconfig.json** | TypeScript configuration | Developers |

### 📄 Other Files

| File | Description |
|------|-------------|
| **[LICENSE](LICENSE)** | MIT License |
| **manifest.json** | Plugin metadata |
| **versions.json** | Version compatibility |
| **install.sh** | Automated install script |

## 🗂️ Code Structure

```
src/
├── main.ts                    # 🎯 Plugin entry point
├── models/
│   ├── types.ts              # 📝 TypeScript type definitions
│   └── ProjectManager.ts     # 📊 Project manager
├── sync/
│   └── SyncEngine.ts         # 🔄 Bidirectional sync engine
├── views/
│   └── TimelineView.ts       # 📈 Gantt view (D3.js)
└── settings/
    └── SettingsTab.ts        # ⚙️ Settings interface
```

## 🎯 Use Cases

### Beginner
1. **Install** → [INSTALLATION.md](INSTALLATION.md)
2. **Learn** → [QUICKSTART.md](QUICKSTART.md)
3. **Explore** → Examples in `Projects/`

### Intermediate
1. **Reference** → [README.md](README.md)
2. **Configure** → Settings section in README
3. **Customize** → Templates and colors

### Advanced
1. **Architecture** → [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)
2. **Code** → Explore `src/`
3. **Contribute** → Modify and create PRs

### Developer
1. **Setup** → `npm install && npm run dev`
2. **Structure** → See "Code Structure" section
3. **API** → TypeScript code comments

## 📋 Installation Checklist

- [ ] Node.js installed (v16+)
- [ ] Dependencies installed (`npm install`)
- [ ] Plugin built (`npm run build`)
- [ ] `main.js` generated
- [ ] Plugin enabled in Obsidian
- [ ] Icon visible in the sidebar
- [ ] Timeline opens without errors

## 🎓 Learning Resources

### Topic Tutorials

| Topic | Where to Find |
|-------|---------------|
| Create projects | [QUICKSTART.md](QUICKSTART.md) - Step 5 |
| Add tasks | [README.md](README.md) - "How to Use" section |
| Add milestones | [README.md](README.md) - "How to Use" section |
| Synchronization | [README.md](README.md) - "Synchronization" section |
| Dependencies | [README.md](README.md) - "How to Use" section |
| Export/Import | [README.md](README.md) - "Export/Import" section |
| Filters | [QUICKSTART.md](QUICKSTART.md) - "Explore Filters" section |
| Customization | [README.md](README.md) - "Color Customization" section |

### Practical Examples

| Example | Location | What It Demonstrates |
|---------|----------|----------------------|
| Complete task | `../../Projects/Tarefa de Exemplo.md` | Frontmatter, sync, progress |
| Milestone | `../../Projects/Marco de Exemplo.md` | Milestones, checklists, status |

## 🔍 Quick Search

### Need to...

- **Install?** → [INSTALLATION.md](INSTALLATION.md)
- **Quick start?** → [QUICKSTART.md](QUICKSTART.md)
- **Full reference?** → [README.md](README.md)
- **Understand the code?** → [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)
- **See changes?** → [CHANGELOG.md](CHANGELOG.md)
- **Troubleshoot?** → README.md - "Troubleshooting" section
- **Configure?** → README.md - "Settings" section
- **Contribute?** → README.md - "Contributing" section

### Useful Commands

```bash
# Quick install
./install.sh

# Development
npm run dev

# Production build
npm run build

# Clean and reinstall
rm -rf node_modules && npm install
```

## 📞 Support & Community

### Technical Issues
1. See README.md - "Troubleshooting" section
2. Check the DevTools Console (Ctrl/Cmd + Shift + I)
3. Review INSTALLATION.md for install issues

### Feedback & Suggestions
- GitHub Issues (when available)
- Pull Requests are welcome!

## 🎯 Suggested Next Steps

1. ✅ **Install** the plugin using [INSTALLATION.md](INSTALLATION.md)
2. ✅ **Learn** the basics with [QUICKSTART.md](QUICKSTART.md)
3. ✅ **Create** your first project
4. ✅ **Explore** the examples in `Projects/`
5. ✅ **Configure** preferences in Settings
6. ✅ **Customize** templates and colors
7. ✅ **Master** advanced features with [README.md](README.md)

## 📊 Version & Compatibility

- **Plugin Version**: 1.0.0
- **Minimum Obsidian**: v0.15.0
- **Minimum Node.js**: v16.0.0
- **Last Updated**: 2025-11-23

## 🏆 Main Features

- ✅ Interactive Gantt timeline
- ✅ Bidirectional sync
- ✅ Drag & drop
- ✅ Task dependencies
- ✅ Filters and search
- ✅ Export/Import
- ✅ Change history
- ✅ Customizable templates
- ✅ Responsive view

---

**Developed with ❤️ by Calvin**  
**License**: MIT  
**Version**: 1.0.0

*Last updated: November 23, 2025*
