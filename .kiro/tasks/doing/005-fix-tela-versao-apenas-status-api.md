# 005 - [fix] Tela de Versão — exibir apenas o card de Status da API

## Modelo de Trabalho
- **Branch modelo:** feature/branch derivado de `ia-main`
- **Nome do branch:** `005-fix-tela-versao-apenas-status-api`
- **Agent responsável:** `dev` (`.kiro/agents/dev.json`)

## Instruções de Início para o Agent
1. Verificar se está na branch `ia-main`. Caso contrário, informar ao usuário e aguardar autorização para retornar.
2. Após autorização: mover este arquivo para a pasta `doing/`, fazer commit e push em `ia-main`.
3. Criar o branch `005-fix-tela-versao-apenas-status-api` a partir de `ia-main` e iniciar a implementação.

---

## Descrição
A tela de Versão atualmente exibe três cards: **Status da API**, **Ambiente** e **Cliente**. O objetivo desta fix é simplificar a tela mantendo **apenas o card de Status da API**, preservando toda a estrutura visual (cabeçalho com título "Informações de Versão" e botão "Atualizar", layout de card, badges de status e campos label/value).

### Referência visual
A tela resultante deve ser semelhante à imagem `img/tela-de-versão-2.0.png`, porém somente com o bloco de informações de versão (Status da API).

---

## Critérios de Aceite
- [ ] A tela de Versão exibe **somente** o card "Status da API".
- [ ] Os cards "Ambiente" e "Cliente" são **removidos** do componente.
- [ ] O cabeçalho da página (título "Informações de Versão" + botão "🔄 Atualizar") é **mantido**.
- [ ] O card de Status da API continua exibindo: Versão, URL e Última verificação.
- [ ] O badge de status (Online / Offline / Verificando…) continua funcionando corretamente.
- [ ] A estrutura de classes CSS (`version-card`, `version-card-header`, `version-card-body`, `version-field`, etc.) é **mantida** para não quebrar estilos.
- [ ] Nenhuma outra tela ou funcionalidade é afetada.

---

## Escopo Técnico

**Arquivo a ser alterado:**
- `client/src/components/VersionPage.jsx`

**O que remover:**
- Todo o bloco `{/* Card 2 — Ambiente */}` (aprox. linhas 92–123)
- Todo o bloco `{/* Card 3 — Cliente */}` (aprox. linhas 125–153)

**O que manter:**
- Imports e hooks (`useState`, `useEffect`, `useCallback`)
- Constante `apiUrl`
- Função `checkApi` e o `useEffect` que a chama
- Lógica do badge da API (`apiBadge`)
- Cabeçalho da página (título + botão Atualizar)
- Card 1 — Status da API completo

**O que pode ser removido (helpers que ficam órfãos):**
- Função `detectEnvironment`
- Função `extractBrowser`
- Derivações de `envType`, `envBadge`, `envBadgeMap`
- Derivação de `browser`
- Variável `loc` (usada apenas pelos cards removidos)

> ⚠️ Confirmar que nenhum outro componente importa `detectEnvironment` ou `extractBrowser` de `VersionPage.jsx` antes de removê-las.

---

## Tipo
`fix`

## Estimativa
P (Pequena) — remoção de blocos JSX e helpers órfãos em um único arquivo.

## Status
- [ ] To Do
