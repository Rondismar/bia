# [002] test: Atualizar e ampliar testes do endpoint GET /api/versao

## Descrição
Atualizar os testes unitários existentes do controller de versão para refletirem a nova resposta JSON (task 001), e ampliar a cobertura com novos cenários relevantes.

## Contexto
O arquivo `tests/unit/controllers/versao.test.js` foi criado quando o endpoint retornava uma string plana (`"Bia 4.3.0"`). Com a alteração da task 001, o controller passa a retornar um objeto JSON via `res.json()`. Os testes existentes quebrarão e precisam ser corrigidos.

## Arquivo envolvido
- `tests/unit/controllers/versao.test.js`

## O que deve ser feito

### 1. Atualizar o mock do `res`
O mock atual usa apenas `res.send`. Substituir por `res.json`:
```js
const res = {
  json: jest.fn(),
};
```

### 2. Atualizar os testes existentes
Ajustar as asserções para validar o objeto JSON retornado:

```js
expect(res.json).toHaveBeenCalledWith({ app: 'BIA', versao: '4.3.0' });
```

### 3. Adicionar novos cenários de teste

| Cenário | Comportamento esperado |
|---|---|
| `VERSAO_API` não definida | `versao` deve ser `"4.3.0"` (fallback) |
| `VERSAO_API` definida como `"5.0.0"` | `versao` deve ser `"5.0.0"` |
| Retorno sempre contém o campo `app` | `app` deve ser `"BIA"` em todos os casos |
| Resposta é um objeto JSON (não string) | `res.json` deve ser chamado, não `res.send` |

## Critérios de Aceite
- [ ] Todos os testes existentes foram atualizados para usar `res.json`
- [ ] Os 3 cenários originais continuam cobertos (string padrão, sem env, com env)
- [ ] Há ao menos um teste validando que `res.send` **não** é chamado
- [ ] Todos os testes passam com `npm test` sem erros

## Dependência
> Esta task depende da conclusão da **task 001** (alteração do controller para retornar JSON).

## Tipo
`test`

## Prioridade
Alta
