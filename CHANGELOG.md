# Changelog

## [1.1.0] - 2025-11-23

### Adicionado
- **Suporte Multilíngue**: Plugin agora suporta 4 idiomas
  - Inglês (en)
  - Português (pt)
  - Espanhol (es)
  - Alemão (de)
- Detecção automática do idioma do sistema
- Configuração de idioma nas configurações do plugin
- Arquivos README em múltiplos idiomas (README_EN.md, README_ES.md, README_DE.md)
- Sistema completo de i18n com todas as strings traduzidas
- Atualização dinâmica da interface ao mudar o idioma

### Modificado
- Interface do plugin totalmente internacionalizada
- Settings tab com suporte a múltiplos idiomas
- Comandos do plugin traduzidos
- Timeline view com textos traduzidos
- README.md principal atualizado com informações sobre idiomas suportados

### Técnico
- Criado módulo `src/utils/i18n.ts` com sistema de traduções
- Adicionada propriedade `language` nas configurações
- Método `updateTranslations()` para atualizar traduções dinamicamente
- Tipo `SupportedLanguage` e interface `Translations`
- Função `detectLanguage()` para detecção automática do idioma

## [1.0.0] - 2025-11-23

### Adicionado
- Visualização de linha do tempo Gantt interativa
- Sincronização bidirecional entre notas e timeline
- Suporte para tarefas com datas de início e fim
- Suporte para marcos (milestones)
- Sistema de dependências entre tarefas
- Filtros por status, etiquetas, responsável
- Busca por texto
- Export/Import de projetos em JSON
- Drag & drop para mover tarefas
- Histórico de alterações
- Templates configuráveis
- Configurações personalizáveis
- Documentação completa
- Exemplos de uso

### Características Principais
- Zoom escalável (dias, semanas, meses, trimestres, anos)
- Visualização de progresso em tarefas
- Cores por status
- Atalhos de teclado
- Responsivo para diferentes tamanhos de tela

### Conhecido
- Os erros de TypeScript durante desenvolvimento são esperados até a instalação das dependências
- Requer Obsidian v0.15.0 ou superior
