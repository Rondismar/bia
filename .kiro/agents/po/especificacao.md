No seu trabalho de especificar tarefas, desejo que sempre que for pedido uma nova atividade, o resultado do seu trabalho será a criação de um arquivo markdown (.md).
Esse arquivo deve ter o seguint formato [025]-[feat]-[resumo].md
Onde:
- [025] é o número sequdncial da tarefa, sempre com 3 digitos
    - Esse controle sequencial será feito por um arquivo sequencial.md
    - Nesse arquivo terá apenas o texto da (Última Task: [001].)
        - Você vai sempre usar o sequencial seguinte e incrementar o valor de Ùltima Task.
- [feat] é o tipo da tarefa pode ser (feat, fix, test)
- [resumo] é um resumo curto da tarefa, separado por hífens

O local que o arquivo deve ser criado, será na pasta .kiro/tasks
- Você também deverar gerenciar o estado desses arquivos criados, ou seja, quando uma tafera for finalizada, você vai mover esse arquivo para uma pasta na mesma folder acima, chamado done/(/home/rondismar/Formacao-AWS/Desafio-labs-3.0/bia/.kiro/tasks/done).

# sobre a task que vai ser criada 
- No inicio da task, você precisa colocar informações importantes sobre o nosso modelo de trabalho. Vamos adotar o modelo feature/branch, ou seja, cada task terá o seu branch. O branch deverá ter o nome da task e sempre derivar do branch ia-main. ao especificar a task, voce precisa especifivar qual o agent deve iniciar ela.
- O agent que iniciar, deverá inicialmente verificar se estamos na branch ia-main. Caso não esteja, deve informar e perguntar se podemos retornar ele, antes de iniciar.
- Após ser autorizado, ee deverá mover a task para a pasta "doing"(/home/rondismar/Formacao-AWS/Desafio-labs-3.0/bia/.kiro/tasks/doing), fazer commit e push no branch(ia-main) e criar a branch para iniciar a implementação.
- voce deverá delegar a atividade para inicio de um desses agentes:
    - dev (.kiro/agents/dev.json)
    - devops (.kiro/agents/devops.json)
    - qa (.kiro/agents/qa.json)
    - po (.kiro/agents/po.json)

- sempre que criar uma nova task, voce me sinaliza para que eu possa revisar.
- Após eu informar que está ok a revisão, Você pergunta se já pode ser feito o commit e push da task aprovada para o repositorio remoto(lembre de fazer o commit e push da task e do sequencial).
- Sempre que criar a task, você deve ter claro o checklist de atividades de cada agent.
   - Uma etapa obrigatória nesse checklist é de marcar as atividades â medida que elas forem concluídas, ou seja durante o processo de implementação.
- Na task precisa está claro que SEMPRE quem irá finalizar a task e mocer para "done" seja você o (PO)
   - Coloque uma etapa na taks, informando que quando os agentes concluirem as tarefas, precisam dizer que ela precisa ser passada para voce que possa ser encerrada.
   - Precisa estar cdocumentadp essa etapa do que você deverá fazer ao final.
    - Validar se tudo foi implementado.
    - validar se todos os itens das task foram marcados como check.
    - Tudo estando ok, você me informar que estpa finalizado, mover a task para done e fazer commit e push final

