# 004 - [feat] Checkbox "Importante" marcado por padrão no cadastro de tarefa

## Modelo de Trabalho
- **Branch modelo:** feature/branch derivado de `ia-main`
- **Nome do branch:** `004-feat-checkbox-importante-marcado-por-padrao`
- **Agent responsável:** `dev` (`.kiro/agents/dev.json`)

## Instruções de Início para o Agent
1. Verificar se está na branch `ia-main`. Caso contrário, informar ao usuário e aguardar autorização para retornar.
2. Após autorização: mover este arquivo para a pasta `doing/`, fazer commit e push em `ia-main`.
3. Criar o branch `004-feat-checkbox-importante-marcado-por-padrao` a partir de `ia-main` e iniciar a implementação.

---

## Descrição
Atualmente, ao abrir o formulário de cadastro de tarefa, o checkbox **Importante** inicia desmarcado (`false`). O objetivo desta task é alterar o comportamento padrão para que o checkbox venha **marcado** (`true`) toda vez que o formulário for exibido ou resetado após o cadastro.

## Critérios de Aceite
- [ ] Ao abrir o formulário de cadastro de tarefa, o checkbox "Importante" deve estar marcado por padrão.
- [ ] Após o envio bem-sucedido do formulário, o checkbox deve retornar ao estado marcado (não desmarcado).
- [ ] O comportamento de marcar/desmarcar manualmente deve continuar funcionando normalmente.
- [ ] Nenhuma outra funcionalidade do formulário deve ser afetada.

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

## Status
- [ ] To Do
