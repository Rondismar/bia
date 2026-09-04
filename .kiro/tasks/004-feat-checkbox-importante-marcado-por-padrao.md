# 004 - [feat] Checkbox "Importante" marcado por padrão no cadastro de tarefa

## Descrição
Atualmente, ao abrir o formulário de cadastro de tarefa, o checkbox **Importante** inicia desmarcado (`false`). O objetivo desta task é alterar o comportamento padrão para que o checkbox venha **marcado** (`true`) toda vez que o formulário for exibido ou resetado após o cadastro.

## Critérios de Aceite
- [ ] Ao abrir o formulário de cadastro de tarefa, o checkbox "Importante" deve estar marcado por padrão.
- [ ] Após o envio bem-sucedido do formulário, o checkbox deve retornar ao estado marcado (não desmarcado).
- [ ] O comportamento de marcar/desmarcar manualmente deve continuar funcionando normalmente.
- [ ] Nenhuma outra funcionalidade do formulário deve ser afetada.

## Escopo Técnico

**Arquivo a ser alterado:**
- `client/src/components/AddTask.jsx`

**Mudança necessária:**
- Linha: `const [importante, setImportante] = useState(false);`
- Alterar para: `const [importante, setImportante] = useState(true);`

- Linha (dentro de `onSubmit`, após o `onAdd`): `setImportante(false);`
- Alterar para: `setImportante(true);`

## Tipo
`feat`

## Estimativa
P (Pequena) — alteração pontual em 2 linhas do componente `AddTask.jsx`

## Status
- [ ] To Do
