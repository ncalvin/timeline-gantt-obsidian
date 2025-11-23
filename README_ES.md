# Timeline Gantt Plugin

Plugin de planificación de proyectos con línea de tiempo dinámica (Gantt) y sincronización bidireccional con notas para Obsidian.

**Idiomas Disponibles:** [English](README_EN.md) | [Português](README.md) | Español | [Deutsch](README_DE.md)

## 📋 Características

- **Visualización Gantt Interactiva**: Línea de tiempo visual con tareas e hitos
- **Sincronización Bidireccional**: Los cambios en las notas se reflejan en la línea de tiempo y viceversa
- **Arrastrar y Soltar**: Arrastra tareas para cambiar fechas
- **Dependencias**: Define relaciones entre tareas (FS, SS, FF, SF)
- **Filtrado Avanzado**: Filtra por estado, responsable, etiquetas, fechas
- **Exportar/Importar**: Exporta proyectos a JSON, CSV o imagen
- **Historial**: Rastrea todos los cambios con posibilidad de revertir
- **Plantillas Personalizables**: Configura plantillas para tareas e hitos
- **Soporte Multilingüe**: Inglés, Portugués, Español y Alemán

## 🌍 Soporte de Idiomas

El plugin soporta 4 idiomas:
- **English** (en)
- **Português** (pt)
- **Español** (es)
- **Deutsch** (de)

El plugin detecta automáticamente el idioma de tu sistema. Puedes cambiarlo manualmente en Configuración > Timeline Gantt > Idioma.

## 🚀 Instalación

### Instalación Manual

1. Descarga los archivos del plugin
2. Copia la carpeta `timeline-gantt` a `.obsidian/plugins/` en tu vault
3. En Obsidian, ve a `Configuración > Community Plugins`
4. Desactiva el modo restringido si es necesario
5. Activa el plugin "Timeline Gantt"

### Instalación vía NPM (para desarrollo)

```bash
cd .obsidian/plugins/timeline-gantt
npm install
npm run dev
```

## 📖 Cómo Usar

### 1. Crear un Proyecto

Usa el comando `Timeline Gantt: Create New Project` o haz clic en el ícono de calendario en la barra lateral.

### 2. Agregar Tareas

**Opción A: Por la Línea de Tiempo**
- Haz clic en el botón "+ Tarea" en la barra de herramientas
- Completa la información y haz clic en OK

**Opción B: Crear Nota Manualmente**
```markdown
---
timelineId: task-1
timelineType: task
timelineStart: 2025-01-05
timelineEnd: 2025-01-12
timelineStatus: in-progress
timelineAssignee: usuario
timelineLabels: [diseño, prioridad-alta]
timelineDependencies: []
timelinePriority: high
timelineProgress: 50
---

# Mi Tarea

## Descripción
Descripción detallada de la tarea...

## Notas
- Nota 1
- Nota 2
```

## ⚙️ Configuración

Accede a `Configuración > Timeline Gantt` para personalizar:

- **Idioma**: Selecciona el idioma de la interfaz (Inglés, Portugués, Español, Alemán)
- **Vista Predeterminada**: Escala de tiempo predeterminada (días, semanas, meses, etc.)
- **Carpeta Predeterminada de Proyectos**: Carpeta predeterminada para nuevas notas
- **Sincronización Automática**: Activa/desactiva la sincronización automática
- **Mostrar Fines de Semana**: Mostrar u ocultar fines de semana
- **Formato de Fecha**: Formato de fecha (predeterminado: YYYY-MM-DD)
- **Plantillas**: Configura plantillas para tareas e hitos

## 📄 Licencia

Licencia MIT - ver archivo LICENSE para detalles.

---

**Versión**: 1.0.0  
**Última Actualización**: Noviembre 2025
