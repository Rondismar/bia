# 007 - [fix] Regressão — tela de Versão exibindo cards Ambiente e Cliente indevidamente

## Modelo de Trabalho
- **Branch modelo:** feature/branch derivado de `ia-main`
- **Nome do branch:** `007-fix-regressao-versao-apenas-status-api`
- **Agent responsável:** `dev` (`.kiro/agents/dev.json`)

## Instruções de Início para o Agent (dev)

1. **OBRIGATÓRIO INÍCIO:** Garantir que o branch `ia-main` está atualizado antes de qualquer coisa:
   - `git checkout ia-main`
   - `git pull origin ia-main`
2. Verificar que está na branch `ia-main`. Caso contrário, informar ao usuário e **aguardar autorização** para retornar antes de prosseguir.
3. Após autorização: mover este arquivo para a pasta `doing/` (`Desafio-labs-3.0/bia/.kiro/tasks/doing`), fazer **commit e push em `ia-main`**.
4. Criar o branch `007-fix-regressao-versao-apenas-status-api` a partir de `ia-main` e iniciar a implementação.

---

## Descrição
A task 005 removeu os cards "Ambiente" e "Cliente" do `VersionPage.jsx`, deixando apenas o card "Status da API". Durante a execução da task 006, o dev iniciou sem fazer `git pull origin ia-main`, trabalhando em cima de uma versão desatualizada do branch. Com isso, os cards "Ambiente" e "Cliente" foram reintroduzidos por regressão.

Esta task corrige a regressão removendo novamente os cards "Ambiente" e "Cliente" e seus helpers órfãos do `VersionPage.jsx`.

---

## Causa Raiz
O dev iniciou a task 006 sem executar `git pull origin ia-main`, obtendo uma versão desatualizada do `VersionPage.jsx` com os cards já presentes. Ao fazer push, sobrescreveu o estado correto da task 005.

---

## Critérios de Aceite
- [ ] A tela de Versão exibe **somente** o card "Status da API".
- [ ] Os cards "Ambiente" e "Cliente" são **removidos** do componente.
- [ ] O cabeçalho da página (título "Informações de Versão" + botão "🔄 Atualizar") é **mantido**.
- [ ] O card de Status da API continua exibindo: Versão, URL e Última verificação.
- [ ] O badge de status (Online / Offline / Verificando…) continua funcionando corretamente.
- [ ] As classes CSS (`version-card`, `version-card-header`, `version-card-body`, `version-field`) são **mantidas**.
- [ ] O checkbox "Importante" continua marcado por padrão no formulário de cadastro (task 006 não deve ser desfeita).
- [ ] Nenhuma outra tela ou funcionalidade é afetada.

---

## Escopo Técnico

**Arquivo a ser alterado:**
- `client/src/components/VersionPage.jsx`

**O que remover:**
- Funções `detectEnvironment` e `extractBrowser`
- Derivações: `envType`, `envBadge`, `envBadgeMap`, `browser`, `loc`
- Bloco JSX `{/* Card 2 — Ambiente */}` completo
- Bloco JSX `{/* Card 3 — Cliente */}` completo

**O que manter:**
- Imports e hooks (`useState`, `useEffect`, `useCallback`)
- Constante `apiUrl`
- Função `checkApi` e o `useEffect` que a chama
- Lógica do badge da API (`apiBadge`)
- Cabeçalho da página (título + botão Atualizar)
- Card 1 — Status da API completo

> ⚠️ Verificar que `AddTask.jsx` continua com `useState(true)` e `setImportante(true)` — a task 006 não deve ser desfeita.

---

## Tipo
`fix`

## Estimativa
P (Pequena) — remoção de blocos JSX e helpers órfãos em um único arquivo.

---

## Checklist de Implementação — Agent: dev

- [ ] **OBRIGATÓRIO INÍCIO:** `git checkout ia-main` e `git pull origin ia-main`
- [ ] Confirmar que está na versão mais recente do `ia-main` antes de criar o branch
- [ ] Criar branch `007-fix-regressao-versao-apenas-status-api` a partir de `ia-main`
- [ ] Mover este arquivo para `doing/`, commit e push em `ia-main`
- [ ] Remover funções `detectEnvironment` e `extractBrowser` de `VersionPage.jsx`
- [ ] Remover derivações órfãs: `envType`, `envBadge`, `envBadgeMap`, `browser`, `loc`
- [ ] Remover bloco JSX `Card 2 — Ambiente` de `VersionPage.jsx`
- [ ] Remover bloco JSX `Card 3 — Cliente` de `VersionPage.jsx`
- [ ] Verificar que cabeçalho e Card 1 — Status da API permanecem intactos
- [ ] Verificar que `AddTask.jsx` mantém `useState(true)` e `setImportante(true)`
- [ ] Verificar que nenhum outro arquivo foi afetado
- [ ] **OBRIGATÓRIO FIM** — Executar rebuild do container:
  - [ ] `docker compose down`
  - [ ] `docker compose build server`
  - [ ] `docker compose up -d`
  - [ ] Testar aplicação: `curl -s http://localhost:3001/api/versao`
- [ ] Fazer commit e push no branch `007-fix-regressao-versao-apenas-status-api`
- [ ] Abrir Pull Request de `007-fix-regressao-versao-apenas-status-api` → `ia-main`
- [ ] **Informar ao PO que a implementação está concluída e a task pode ser encerrada**

---

## Encerramento — Responsabilidade do PO

> ⚠️ **Somente o PO realiza o encerramento da task.**

Quando o agent `dev` sinalizar conclusão, o PO deverá:

- [ ] Validar se todos os critérios de aceite foram atendidos
- [ ] Confirmar que todos os itens do checklist de implementação estão marcados
- [ ] Revisar o Pull Request e aprovar o merge para `ia-main`
- [ ] Mover este arquivo de `doing/` para `done/` (`Desafio-labs-3.0/bia/.kiro/tasks/done/`)
- [ ] Fazer commit e push final confirmando o encerramento da task
- [ ] Informar ao usuário que a task **007** está **concluída** ✅

---

## Status

> 📋 **Aguardando revisão do PO** — task criada, pendente de aprovação para iniciar.
