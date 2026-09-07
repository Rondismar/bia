# 004 - [feat] Checkbox "Importante" marcado por padrão no cadastro de tarefa

## Modelo de Trabalho
- **Branch modelo:** feature/branch derivado de `ia-main`
- **Nome do branch:** `004-feat-checkbox-importante-marcado-por-padrao`
- **Agent responsável:** `dev` (`.kiro/agents/dev.json`)

## Instruções de Início para o Agent (dev)

1. Verificar se está na branch `ia-main`. Caso contrário, informar ao usuário e **aguardar autorização** para retornar antes de prosseguir.
2. Após autorização: mover este arquivo para a pasta `doing/` (`Desafio-labs-3.0/bia/.kiro/tasks/doing`), fazer **commit e push em `ia-main`**.
3. Criar o branch `004-feat-checkbox-importante-marcado-por-padrao` a partir de `ia-main` e iniciar a implementação.

---

## Descrição
Atualmente, ao abrir o formulário de cadastro de tarefa, o checkbox **Importante** inicia desmarcado (`false`). O objetivo desta task é alterar o comportamento padrão para que o checkbox venha **marcado** (`true`) toda vez que o formulário for exibido ou resetado após o cadastro.

---

## Critérios de Aceite
- [x] Ao abrir o formulário de cadastro de tarefa, o checkbox "Importante" deve estar marcado por padrão.
- [x] Após o envio bem-sucedido do formulário, o checkbox deve retornar ao estado marcado (não desmarcado).
- [x] O comportamento de marcar/desmarcar manualmente deve continuar funcionando normalmente.
- [x] Nenhuma outra funcionalidade do formulário deve ser afetada.

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

**Mudança 2 — reset após envio do formulário (dentro de `onSubmit`, após a chamada de `onAdd`):**
```js
// DE:
setImportante(false);

// PARA:
setImportante(true);
```

> ⚠️ Nenhum outro arquivo precisa ser alterado. Confirmar que as demais funcionalidades do formulário (campo Tarefa, Data/Prazo, validação de título vazio e Modal de aviso) continuam funcionando após a mudança.

---

## Tipo
`feat`

## Estimativa
P (Pequena) — alteração pontual em 2 linhas do componente `AddTask.jsx`

---

## Checklist de Implementação — Agent: dev

- [x] Verificar branch atual (`ia-main`) e criar branch `004-feat-checkbox-importante-marcado-por-padrao`
- [x] Mover este arquivo para `doing/`, commit e push em `ia-main`
- [x] Alterar `useState(false)` para `useState(true)` no estado inicial de `importante` em `AddTask.jsx`
- [x] Alterar `setImportante(false)` para `setImportante(true)` no reset pós-envio em `AddTask.jsx`
- [x] Verificar que nenhum outro arquivo precisa ser ajustado
- [x] Testar abertura do formulário — checkbox deve iniciar marcado
- [x] Testar envio do formulário — checkbox deve voltar marcado após reset
- [x] Testar marcação/desmarcação manual — deve continuar funcionando normalmente
- [x] Verificar que campo Tarefa, Data/Prazo, validação de título vazio e Modal de aviso continuam funcionando
- [x] Fazer commit e push no branch `004-feat-checkbox-importante-marcado-por-padrao`
- [x] Abrir Pull Request de `004-feat-checkbox-importante-marcado-por-padrao` → `ia-main`
- [x] **Informar ao PO que a implementação está concluída e a task pode ser encerrada**

---

## Encerramento — Responsabilidade do PO

> ⚠️ **Somente o PO realiza o encerramento da task.**

Quando o agent `dev` sinalizar conclusão, o PO deverá:

- [ ] Validar se todos os critérios de aceite foram atendidos
- [ ] Confirmar que todos os itens do checklist de implementação estão marcados
- [ ] Revisar o Pull Request e aprovar o merge para `ia-main`
- [ ] Mover este arquivo de `doing/` para `done/` (`Desafio-labs-3.0/bia/.kiro/tasks/done/`)
- [ ] Fazer commit e push final confirmando o encerramento da task
- [ ] Informar ao usuário que a task **004** está **concluída** ✅

---

## Status

> 🔄 **Retornada ao dev** — o agent `dev` deve revisar a task, marcar todos os itens do checklist de implementação e dos critérios de aceite, e então sinalizar ao PO para validação.
