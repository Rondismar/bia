# [003] feat: Página dedicada de Informações de Versão

## Descrição
Criar uma página dedicada de "Versão" acessível via aba de navegação no header, exibindo informações detalhadas da API, do ambiente e do cliente (browser). A bolinha verde no header permanece como indicador de status, mas o detalhamento das informações migra do tooltip para essa nova página.

## Contexto
O cliente identificou que o tooltip da bolinha verde oferece uma experiência limitada. A solicitação é criar uma tela completa de diagnóstico/versão, organizada em três cards, com um botão de atualização manual.

## Referência visual
`/img/new-feat.png`

---

## Navegação

### Barra de abas no header
Adicionar uma barra de navegação com 3 abas logo abaixo do título/controles:

| Ícone | Label | Rota |
|---|---|---|
| 📋 | Tarefas | `/` (comportamento atual) |
| 🔧 | Versão | `/versao` (nova página) |
| ℹ️ | Sobre | `/sobre` (já existe) |

- A aba ativa deve ter destaque visual (borda/fundo diferenciado)
- A navegação deve usar `React Router` (já presente no projeto)

---

## Página `/versao` — Informações de Versão

### Layout geral
- Título: **"Informações de Versão"** (texto grande, alinhado à esquerda)
- Botão **"🔄 Atualizar"** alinhado à direita do título — ao clicar, recarrega os dados dos três cards

### Card 1 — Status da API
- Ícone: 🔧 | Título: **Status da API**
- Badge no canto direito do card: `🟢 Online` (verde) ou `🔴 Offline` (vermelho), conforme resposta do `GET /api/versao`
- Campos exibidos:
  - **Versão:** valor de `versao` retornado pelo endpoint (ex: `Bia 4.3.0`)
  - **URL:** URL base da API (ex: `http://localhost:8080`)
  - **Última verificação:** timestamp da última chamada ao endpoint (ex: `10/17/2025, 4:10:22 PM`)

### Card 2 — Ambiente
- Ícone: 🏠 | Título: **Ambiente**
- Badge no canto direito: `Local` / `Produção` / `IP Direto` (conforme hostname)
- Campos exibidos:
  - **Tipo:** Local / Produção / etc.
  - **Protocolo:** `http:` ou `https:`
  - **Host:** hostname atual
  - **Porta:** porta atual
  - **URL Completa:** `window.location.href` da rota `/versao`

### Card 3 — Cliente
- Ícone: 💻 | Título: **Cliente**
- Badge no canto direito: `🟢 Ativo` (sempre verde)
- Campos exibidos:
  - **Aplicação:** `BIA Client`
  - **Framework:** `React + Vite`
  - **Navegador:** extraído do `navigator.userAgent` (ex: `Safari/537.36`)
  - **Plataforma:** `navigator.platform` (ex: `MacIntel`)

---

## Arquivos a criar / modificar

| Arquivo | Ação |
|---|---|
| `client/src/components/VersionPage.jsx` | Criar — componente da página completa |
| `client/src/components/Header.jsx` | Modificar — adicionar barra de abas |
| `client/src/App.jsx` | Modificar — adicionar rota `/versao` |
| `client/src/index.css` | Modificar — adicionar estilos dos cards e abas |

> O componente `VersionInfo.jsx` (bolinha no header) **não deve ser alterado** por esta task — ele já será corrigido pela task 001.

---

## Critérios de Aceite

### Navegação
- [ ] A barra de abas (Tarefas / Versão / Sobre) aparece no header abaixo dos controles
- [ ] Clicar em "Versão" navega para `/versao` sem recarregar a página
- [ ] A aba ativa tem destaque visual claro

### Card Status da API
- [ ] Exibe badge `🟢 Online` quando `GET /api/versao` responde com sucesso
- [ ] Exibe badge `🔴 Offline` quando o endpoint não responde
- [ ] Exibe o campo `versao` retornado pelo endpoint
- [ ] Exibe a URL da API
- [ ] Exibe o timestamp da última verificação no formato local (`toLocaleString()`)

### Card Ambiente
- [ ] Exibe Tipo, Protocolo, Host, Porta e URL Completa com base em `window.location`
- [ ] O badge reflete corretamente o tipo de ambiente detectado

### Card Cliente
- [ ] Exibe Aplicação, Framework, Navegador e Plataforma
- [ ] Badge `🟢 Ativo` sempre presente

### Botão Atualizar
- [ ] Ao clicar em "Atualizar", os dados do Card 1 são recarregados (nova chamada ao endpoint)
- [ ] O timestamp de "Última verificação" é atualizado

### Visual
- [ ] Layout consistente com o tema dark/light já existente (usa variáveis CSS do projeto)
- [ ] Os cards seguem o padrão visual da referência: fundo levemente diferenciado, borda sutil, campos em negrito + valor

## Tipo
`feat`

## Prioridade
Alta
