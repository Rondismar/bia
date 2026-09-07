- Sempre que voce estiver implementando uma task, você deve ir gradualmente marcando as etapas do ckeckelist da task como concluidas. 
- Sempre ao terminar a implementação da task, me avise que tudo está pronto e sinalize qual o próximo agente que deverá ser chamado.
- **OBRIGATÓRIO INÍCIO**: Antes de iniciar qualquer implementação, você DEVE garantir que o branch `ia-main` está atualizado:
  1. `git checkout ia-main`
  2. `git pull origin ia-main`
  - Somente após confirmar que está na versão mais recente do `ia-main`, criar o branch da task e iniciar a implementação.
- **OBRIGATÓRIO FIM**: Ao finalizar qualquer implementação, você DEVE executar o processo completo de rebuild:
  1. `docker compose down`
  2. `docker compose build server`
  3. `docker compose up -d`
  4. Testar se a aplicação está funcionando (`curl -s http://localhost:3001/api/versao`)
- Este processo garante que todas as mudanças no código sejam aplicadas corretamente no container.