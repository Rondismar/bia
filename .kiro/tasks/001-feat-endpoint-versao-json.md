# [001] feat: Retornar dados estruturados da API de versão

## Descrição
Alterar o endpoint existente `GET /api/versao` para retornar os dados da aplicação em formato JSON estruturado, em vez de uma string plana.

## Contexto
Atualmente o endpoint retorna uma string no formato `"Bia 4.3.0"`, o que dificulta o consumo programático. A mudança padroniza a resposta em JSON, mantendo as mesmas informações já presentes.

## Endpoint alterado
- **GET** `/api/versao`
- **Content-Type:** `application/json`
- **Resposta atual:** `"Bia 4.3.0"` (string plana)
- **Resposta esperada após a alteração:**
```json
{
  "app": "BIA",
  "versao": "4.3.0"
}
```

> O campo `versao` deve continuar lendo a variável de ambiente `VERSAO_API`, com fallback para `"4.3.0"`.

## Arquivos envolvidos
- `api/controllers/versao.js` — alterar o método `get` para retornar JSON com `res.json()`
- `api/routes/versao.js` — nenhuma alteração necessária

## Critérios de Aceite — Backend (já implementado)
- [x] `GET /api/versao` retorna HTTP 200
- [x] A resposta é um JSON válido com os campos `app` e `versao`
- [x] O campo `versao` reflete o valor da variável de ambiente `VERSAO_API` quando definida
- [x] O campo `versao` usa `"4.3.0"` como fallback quando `VERSAO_API` não está definida
- [ ] Existe ao menos um teste unitário cobrindo o comportamento do endpoint

---

## ⚠️ Problema identificado — Regressão no Frontend

A implementação atual do componente `client/src/components/VersionInfo.jsx` introduziu funcionalidades **fora do escopo da task**, causando regressão na experiência do usuário:

- A bolinha de status foi deslocada visualmente no header
- Foram adicionados: detecção de ambiente, health check automático (30s), chamada ao endpoint `/api/cache-config`, botões de refresh e link externo
- Nada disso foi solicitado nesta task

### Estado original (commit `f122703`)
O componente era simples:
- Botão redondo com a letra `v` no header (posição fixa, ao lado do botão de tema)
- Ao clicar, exibia um tooltip com: versão ("BIA 4.3.0") e link `🔗 /api/versao`

### O que deve ser corrigido

**Arquivo:** `client/src/components/VersionInfo.jsx`

Reverter o componente ao comportamento original, com duas adaptações:
1. **Consumir o JSON** retornado pelo endpoint e exibir `{app} {versao}` no tooltip (ex: "BIA 4.3.0")
2. **Trocar o ícone** do botão: substituir a letra `v` por uma bolinha verde `🟢`

#### Comportamento esperado após a correção:
- O botão deve permanecer **na mesma posição de antes** no header (ao lado do botão de tema)
- O botão exibe apenas `🟢` — sem texto adicional
- Ao clicar, exibir tooltip simples com:
  - `{app} {versao}` vindos do `GET /api/versao` (ex: "BIA 4.3.0")
  - Link `🔗 /api/versao`
- **Remover** completamente: detecção de ambiente, health check periódico, chamada ao `/api/cache-config`, botão de refresh, indicadores coloridos de status online/offline

#### Exemplo de estrutura do componente:
```jsx
return (
  <div className="version-info">
    <button
      className="version-trigger"
      onClick={handleVersionClick}
      title="Versão da aplicação"
    >
      🟢
    </button>
    {showVersion && (
      <div className="version-tooltip">
        <div className="version-content">
          <strong>{apiData.app} {apiData.versao}</strong>
          <div className="version-details">
            <small>
              <button className="version-link" onClick={openVersionEndpoint}>
                🔗 /api/versao
              </button>
            </small>
          </div>
        </div>
      </div>
    )}
  </div>
);
```

### Critérios de Aceite — Correção do Frontend
- [ ] O botão exibe a bolinha verde `🟢` no lugar da letra `v`
- [ ] O botão está posicionado no mesmo local de antes (header, à esquerda do botão de tema)
- [ ] Ao clicar, o tooltip exibe `{app} {versao}` lidos do `GET /api/versao`
- [ ] O link `🔗 /api/versao` abre o endpoint em nova aba
- [ ] Não há chamada ao `/api/cache-config`
- [ ] Não há health check automático (sem `setInterval`)
- [ ] Não há lógica de detecção de ambiente (Local/IP/ALB/Produção)
- [ ] Não há botão de "Atualizar/Refresh" no tooltip
- [ ] O CSS existente em `index.css` para `.version-info`, `.version-trigger` e `.version-tooltip` **não é alterado**

## Tipo
`feat`

## Prioridade
Alta
