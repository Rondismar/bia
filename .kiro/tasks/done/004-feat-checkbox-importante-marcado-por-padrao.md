# [004] feat: Checkbox "Importante" Marcado por Padrão

## Descrição
Alterar o estado inicial do checkbox **"Importante"** no formulário de adição de tarefas (`AddTask.jsx`) para que venha **marcado por padrão** ao abrir o formulário.

## Contexto
Atualmente, ao adicionar uma nova tarefa, o checkbox "Importante" inicia como `false` (desmarcado). O comportamento desejado é que ele venha marcado por padrão (`true`), refletindo que a maioria das tarefas criadas pelos usuários é considerada importante. O usuário ainda poderá desmarcar manualmente caso não queira marcar a tarefa como importante.

## Arquivo a modificar

| Arquivo | Ação |
|---|---|
| `client/src/components/AddTask.jsx` | Modificar — alterar o estado inicial de `importante` de `false` para `true` |

---

## Mudança Técnica

**Antes:**
```js
const [importante, setImportante] = useState(false);
```

**Depois:**
```js
const [importante, setImportante] = useState(true);
```

> ⚠️ O reset do formulário após o `onSubmit` deve continuar resetando para `true` (padrão) ao invés de `false`, para manter a consistência do comportamento:

**Antes (no onSubmit):**
```js
setImportante(false);
```

**Depois (no onSubmit):**
```js
setImportante(true);
```

---

## Critérios de Aceite

- [ ] Ao abrir o formulário de adição de tarefas, o checkbox "Importante" deve estar marcado por padrão
- [ ] O usuário ainda pode desmarcar o checkbox livremente antes de submeter
- [ ] Após submeter o formulário, o checkbox deve retornar ao estado padrão: **marcado**
- [ ] O comportamento de adição de tarefa não é afetado — a tarefa é criada com o valor atual do checkbox no momento do submit
- [ ] Nenhuma outra funcionalidade do formulário é impactada

## Tipo
`feat`

## Prioridade
Baixa
