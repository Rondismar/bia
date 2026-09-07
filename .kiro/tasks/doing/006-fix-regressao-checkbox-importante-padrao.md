# 006 - [fix] Regressão — checkbox "Importante" marcado por padrão

## Modelo de Trabalho
- **Branch modelo:** feature/branch derivado de `ia-main`
- **Nome do branch:** `006-fix-regressao-checkbox-importante-padrao`
- **Agent responsável:** `dev` (`.kiro/agents/dev.json`)

## Instruções de Início para o Agent (dev)

1. Verificar se está na branch `ia-main`. Caso contrário, informar ao usuário e **aguardar autorização** para retornar antes de prosseguir.
2. Após autorização: mover este arquivo para a pasta `doing/` (`Desafio-labs-3.0/bia/.kiro/tasks/doing`), fazer **commit e push em `ia-main`**.
3. Criar o branch `006-fix-regressao-checkbox-importante-padrao` a partir de `ia-main` e iniciar a implementação.

---

## Descrição
A task 004 implementou o checkbox "Importante" marcado por padrão no formulário de cadastro de tarefas (`AddTask.jsx`). Após a execução da task 005 (branch criado a partir de `ia-main` antes do merge da 004), as alterações da task 004 foram desfeitas por regressão. O `AddTask.jsx` voltou a ter `useState(false)` e `setImportante(false)`.

Esta task corrige a regressão reaplicando as mesmas alterações da task 004 no estado atual do branch `ia-main`.

---

## Causa Raiz
O branch `005-fix-tela-versao-apenas-status-api` foi criado a partir de `ia-main` antes do merge do branch `004-feat-checkbox-importante-marcado-por-padrao`. Com isso, o merge/push da 005 sobrescreveu as alterações da 004 no `AddTask.jsx`.

---

## Critérios de Aceite
- [x] Ao abrir o formulário de cadastro de tarefa, o checkbox "Importante" deve estar marcado por padrão.
- [x] Após o envio bem-sucedido do formulário, o checkbox deve retornar ao estado marcado (não desmarcado).
- [x] O comportamento de marcar/desmarcar manualmente deve continuar funcionando normalmente.
- [x] Nenhuma outra funcionalidade do formulário deve ser afetada.
- [x] A funcionalidade da tela de Versão (task 005) deve permanecer intacta.

---

## Escopo Técnico

**Arquivo a ser alterado:**
- `client/src/components/AddTask.jsx`

**Mudança 1 — valor inicial do estado:**
```js
// DE:
const [importante, setImportante] = useState(false);

// PARA:
const [importante, setImportante] = useState(true);
```

**Mudança 2 — reset após envio do formulário:**
```js
// DE:
setImportante(false);

// PARA:
setImportante(true);
```

> ⚠️ Nenhum outro arquivo precisa ser alterado. Confirmar que `VersionPage.jsx` e demais componentes continuam intactos após a mudança.

---

## Tipo
`fix`

## Estimativa
P (Pequena) — correção pontual em 2 linhas do componente `AddTask.jsx`

---

## Checklist de Implementação — Agent: dev

- [x] Verificar branch atual (`ia-main`) e criar branch `006-fix-regressao-checkbox-importante-padrao`
- [x] Mover este arquivo para `doing/`, commit e push em `ia-main`
- [x] Alterar `useState(false)` para `useState(true)` no estado inicial de `importante` em `AddTask.jsx`
- [x] Alterar `setImportante(false)` para `setImportante(true)` no reset pós-envio em `AddTask.jsx`
- [x] Verificar que `VersionPage.jsx` permanece intacto
- [x] Verificar que nenhum outro arquivo foi afetado
- [x] Testar abertura do formulário — checkbox deve iniciar marcado
- [x] Testar envio do formulário — checkbox deve voltar marcado após reset
- [x] Testar marcação/desmarcação manual — deve continuar funcionando normalmente
- [ ] **OBRIGATÓRIO** — Executar rebuild do container:
  - [ ] `docker compose down`
  - [ ] `docker compose build server`
  - [ ] `docker compose up -d`
  - [ ] Testar aplicação: `curl -s http://localhost:3001/api/versao`
- [x] Fazer commit e push no branch `006-fix-regressao-checkbox-importante-padrao`
- [x] Abrir Pull Request de `006-fix-regressao-checkbox-importante-padrao` → `ia-main`
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
- [ ] Informar ao usuário que a task **006** está **concluída** ✅

---

## Status

> 🔄 **Reaberta** — etapas obrigatórias de rebuild do container não foram executadas. O agent `dev` deve executar o rebuild, marcar os itens pendentes e sinalizar ao PO para nova validação.
