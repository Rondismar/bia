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
- Você também deverar gerenciar o estado desses arquivos criados, ou seja, quando uma tafera for finalizada, você vai mover esse arquivo para uma pasta na mesma folder acima, chamado done/
