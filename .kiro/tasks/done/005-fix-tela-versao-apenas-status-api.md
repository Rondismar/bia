# 005 - [fix] Tela de Versão — exibir apenas o card de Status da API

## Modelo de Trabalho
- **Branch modelo:** feature/branch derivado de `ia-main`
- **Nome do branch:** `005-fix-tela-versao-apenas-status-api`
- **Agent responsável:** `dev` (`.kiro/agents/dev.json`)

## Instruções de Início para o Agent (dev)

1. Verificar se está na branch `ia-main`. Caso contrário, informar ao usuário e **aguardar autorização** para retornar antes de prosseguir.
2. Após autorização: mover este arquivo para a pasta `doing/` (`Desafio-labs-3.0/bia/.kiro/tasks/doing`), fazer **commit e push em `ia-main`**.
3. Criar o branch `005-fix-tela-versao-apenas-status-api` a partir de `ia-main` e iniciar a implementação.

---

## Descrição
A tela de Versão atualmente exibe três cards: **Status da API**, **Ambiente** e **Cliente**. O objetivo desta fix é simplificar a tela mantendo **apenas o card de Status da API**, preservando toda a estrutura visual (cabeçalho com título "Informações de Versão" e botão "Atualizar", layout de card, badges de status e campos label/value).

### Referência visual
A tela resultante deve ser semelhante à imagem `img/tela-de-versão-2.0.png`, porém somente com o bloco de informações de versão (Status da API).

---

## Critérios de Aceite
- [x] A tela de Versão exibe **somente** o card "Status da API".
- [x] Os cards "Ambiente" e "Cliente" são **removidos** do componente.
- [x] O cabeçalho da página (título "Informações de Versão" + botão "🔄 Atualizar") é **mantido**.
- [x] O card de Status da API continua exibindo: Versão, URL e Última verificação.
- [x] O badge de status (Online / Offline / Verificando…) continua funcionando corretamente.
- [x] A estrutura de classes CSS (`version-card`, `version-card-header`, `version-card-body`, `version-field`, etc.) é **mantida** para não quebrar estilos.
- [x] Nenhuma outra tela ou funcionalidade é afetada.

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

---

## Checklist de Implementação — Agent: dev

- [x] Verificar branch atual (`ia-main`) e criar branch `005-fix-tela-versao-apenas-status-api`
- [x] Mover este arquivo para `doing/`, commit e push em `ia-main`
- [x] Verificar se `detectEnvironment` ou `extractBrowser` são importadas em outros componentes
- [x] Remover bloco `Card 2 — Ambiente` de `VersionPage.jsx`
- [x] Remover bloco `Card 3 — Cliente` de `VersionPage.jsx`
- [x] Remover helpers órfãos (`detectEnvironment`, `extractBrowser`, `envType`, `envBadge`, `envBadgeMap`, `browser`, `loc`)
- [x] Verificar que o cabeçalho (título + botão Atualizar) permanece intacto
- [x] Verificar que o Card 1 — Status da API permanece funcional (badge + campos)
- [x] Verificar que nenhuma outra tela foi afetada
- [x] Executar a aplicação localmente e validar visualmente a tela de Versão
- [x] Fazer commit e push no branch `005-fix-tela-versao-apenas-status-api`
- [x] Abrir Pull Request de `005-fix-tela-versao-apenas-status-api` → `ia-main`
- [x] **Informar ao PO que a implementação está concluída e a task pode ser encerrada**

---

## Encerramento — Responsabilidade do PO

> ⚠️ **Somente o PO realiza o encerramento da task.**

Quando o agent `dev` sinalizar conclusão, o PO deverá:

- [x] Validar se todos os critérios de aceite foram atendidos
- [x] Confirmar que todos os itens do checklist de implementação estão marcados
- [x] Revisar o Pull Request e aprovar o merge para `ia-main`
- [x] Mover este arquivo de `doing/` para `done/` (`Desafio-labs-3.0/bia/.kiro/tasks/done/`)
- [x] Fazer commit e push final confirmando o encerramento da task
- [x] Informar ao usuário que a task **005** está **concluída** ✅

---

## Status

> ✅ **Concluída** — task encerrada pelo PO em 07/09/2026.
