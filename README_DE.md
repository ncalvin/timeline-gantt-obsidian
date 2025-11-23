# Timeline Gantt Plugin

Projektplanungs-Plugin mit dynamischer Gantt-Zeitachse und bidirektionaler Synchronisation mit Notizen für Obsidian.

**Verfügbare Sprachen:** [English](README_EN.md) | [Português](README.md) | [Español](README_ES.md) | Deutsch

## 📋 Funktionen

- **Interaktive Gantt-Visualisierung**: Visuelle Zeitachse mit Aufgaben und Meilensteinen
- **Bidirektionale Synchronisation**: Änderungen in Notizen werden in der Zeitachse widergespiegelt und umgekehrt
- **Drag & Drop**: Ziehen Sie Aufgaben, um Daten zu ändern
- **Abhängigkeiten**: Definieren Sie Beziehungen zwischen Aufgaben (FS, SS, FF, SF)
- **Erweiterte Filterung**: Filtern nach Status, Zuständigkeit, Tags, Daten
- **Export/Import**: Exportieren Sie Projekte nach JSON, CSV oder Bild
- **Verlauf**: Verfolgen Sie alle Änderungen mit der Möglichkeit zum Rückgängigmachen
- **Anpassbare Vorlagen**: Konfigurieren Sie Vorlagen für Aufgaben und Meilensteine
- **Mehrsprachige Unterstützung**: Englisch, Portugiesisch, Spanisch und Deutsch

## 🌍 Sprachunterstützung

Das Plugin unterstützt 4 Sprachen:
- **English** (en)
- **Português** (pt)
- **Español** (es)
- **Deutsch** (de)

Das Plugin erkennt automatisch Ihre Systemsprache. Sie können sie manuell unter Einstellungen > Timeline Gantt > Sprache ändern.

## 🚀 Installation

### Manuelle Installation

1. Laden Sie die Plugin-Dateien herunter
2. Kopieren Sie den Ordner `timeline-gantt` nach `.obsidian/plugins/` in Ihrem Vault
3. Gehen Sie in Obsidian zu `Einstellungen > Community Plugins`
4. Deaktivieren Sie bei Bedarf den eingeschränkten Modus
5. Aktivieren Sie das Plugin "Timeline Gantt"

### Installation über NPM (für Entwicklung)

```bash
cd .obsidian/plugins/timeline-gantt
npm install
npm run dev
```

## 📖 Verwendung

### 1. Projekt Erstellen

Verwenden Sie den Befehl `Timeline Gantt: Create New Project` oder klicken Sie auf das Kalendersymbol in der Seitenleiste.

### 2. Aufgaben Hinzufügen

**Option A: Über die Zeitachse**
- Klicken Sie auf die Schaltfläche "+ Aufgabe" in der Symbolleiste
- Füllen Sie die Informationen aus und klicken Sie auf OK

**Option B: Notiz Manuell Erstellen**
```markdown
---
timelineId: task-1
timelineType: task
timelineStart: 2025-01-05
timelineEnd: 2025-01-12
timelineStatus: in-progress
timelineAssignee: benutzername
timelineLabels: [design, hohe-priorität]
timelineDependencies: []
timelinePriority: high
timelineProgress: 50
---

# Meine Aufgabe

## Beschreibung
Detaillierte Aufgabenbeschreibung...

## Notizen
- Notiz 1
- Notiz 2
```

## ⚙️ Einstellungen

Gehen Sie zu `Einstellungen > Timeline Gantt` zum Anpassen:

- **Sprache**: Wählen Sie die Sprache der Benutzeroberfläche (Englisch, Portugiesisch, Spanisch, Deutsch)
- **Standardansicht**: Standard-Zeitskala (Tage, Wochen, Monate usw.)
- **Standard-Projektordner**: Standardordner für neue Notizen
- **Automatische Synchronisation**: Automatische Synchronisation aktivieren/deaktivieren
- **Wochenenden Anzeigen**: Wochenenden anzeigen oder ausblenden
- **Datumsformat**: Datumsformat (Standard: YYYY-MM-DD)
- **Vorlagen**: Vorlagen für Aufgaben und Meilensteine konfigurieren

## 📄 Lizenz

MIT-Lizenz - siehe LICENSE-Datei für Details.

---

**Version**: 1.0.0  
**Letzte Aktualisierung**: November 2025
