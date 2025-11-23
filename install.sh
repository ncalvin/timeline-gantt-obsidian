#!/bin/bash

# Script de instalação automática do Timeline Gantt Plugin
# Autor: Calvin
# Data: 23/11/2025

echo "=========================================="
echo "  Timeline Gantt Plugin - Instalação"
echo "=========================================="
echo ""

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Função para mensagens de sucesso
success() {
    echo -e "${GREEN}✓${NC} $1"
}

# Função para mensagens de informação
info() {
    echo -e "${BLUE}➜${NC} $1"
}

# Função para mensagens de erro
error() {
    echo -e "${RED}✗${NC} $1"
}

# Verificar se Node.js está instalado
info "Verificando pré-requisitos..."
if ! command -v node &> /dev/null; then
    error "Node.js não encontrado!"
    echo "Por favor, instale o Node.js: https://nodejs.org/"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    error "npm não encontrado!"
    echo "Por favor, instale o npm (vem com Node.js)"
    exit 1
fi

success "Node.js $(node --version) encontrado"
success "npm $(npm --version) encontrado"
echo ""

# Verificar se estamos na pasta correta
if [ ! -f "manifest.json" ]; then
    error "Erro: arquivo manifest.json não encontrado"
    echo "Execute este script da pasta do plugin:"
    echo "cd .obsidian/plugins/timeline-gantt"
    exit 1
fi

success "Pasta do plugin verificada"
echo ""

# Instalar dependências
info "Instalando dependências..."
if npm install; then
    success "Dependências instaladas com sucesso!"
else
    error "Falha ao instalar dependências"
    exit 1
fi
echo ""

# Compilar plugin
info "Compilando plugin..."
if npm run build; then
    success "Plugin compilado com sucesso!"
else
    error "Falha ao compilar plugin"
    exit 1
fi
echo ""

# Verificar se main.js foi gerado
if [ -f "main.js" ]; then
    success "Arquivo main.js gerado"
else
    error "Arquivo main.js não foi gerado"
    exit 1
fi
echo ""

# Resumo
echo "=========================================="
echo "  ✓ Instalação Concluída!"
echo "=========================================="
echo ""
echo "Próximos passos:"
echo ""
echo "1. Reinicie o Obsidian ou recarregue os plugins"
echo "2. Vá em Configurações > Community Plugins"
echo "3. Ative o plugin 'Timeline Gantt'"
echo "4. Clique no ícone de calendário na sidebar"
echo ""
echo "Documentação:"
echo "  - QUICKSTART.md  - Guia rápido de 5 minutos"
echo "  - README.md      - Documentação completa"
echo "  - INSTALLATION.md - Detalhes de instalação"
echo ""
echo "Para desenvolvimento:"
echo "  npm run dev     - Modo desenvolvimento (auto-reload)"
echo "  npm run build   - Build de produção"
echo ""
success "Aproveite o Timeline Gantt Plugin!"
echo ""
