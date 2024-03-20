# Como contribuir

Bemvindo(a), obrigado por demonstrar interese em contribuir.

Você pode achar útil se conectar no canal [#website-devpira](https://discord.gg/yuDcbUPphx) no servidor da comunidade no Discord.

Aqui estão alguns recursos importantes:

- Nossas atividades são mapeadas aqui no GitHub, na aba [Projeto](https://github.com/orgs/dev-pira/projects/2);
- A documentação inicial pode ser encontrada no arquivo [README](readme.md), mas você pode encontrar ainda mais detalhes nas [`docs`](./docs).

## Testando

Você é convidado a executar testes de qualquer natureza no nosso site.<br />
Se encontrar um problema, certifique-se de contribuir abrindo um [_bug_](https://github.com/dev-pira/site/issues/new?assignees=&labels=&projects=&template=bug_report.md&title=) relatando o problema.<br />
Se você tem familiaridade com testes automatizados, o projeto está atualmente instrumentado com [Jest](https://jestjs.io). Fique convidado a colaborar:

- Evoluindo testes existentes;
- Criando novos testes;
- Instrumentando outros escopos de testes;

> **Testes de Invasão**: Certifique-se de comunicar os membros do Core Team sobre essa rotina. A não comunicação pode ser considerada - mesmo que por engano - uma atividade de má fé.

## Abrindo discuções

Se você tem uma ideia bacana e gostaria evoluir com a ajuda da comunidade, você pode querer iniciar uma [discução](https://github.com/dev-pira/site/discussions).<br />
**Esse é o método preferível para propor uma nova funcionalidade para nosso site.**<br />
Boas discuções são enriquecidas com detalhes - inclusive técnicos -, métricas, pesquisas. Dados ajudam a construir ideias cada vez melhores.<br />
Ao participar das discuções, lembre-se do nosso [Código de Conduta](CODE_OF_CONDUCT.md).

## Enviando sugestões

Sugestões são preferivelmente recebidas como resultado das discuções. Acreditamos que esse seja o meio mais democrático de fazê-lo. Mas você também pode abrir uma [requisição de funcionalidade](https://github.com/dev-pira/site/issues/new?assignees=&labels=&projects=&template=feature_request.md&title=).<br />
Lembre-se de ser claro ao expor o cenário explorado e detalhar o comportamento esperado. _Nós gostamos se por ventura um caso de teste em Gherkin vier associado_.

## Submetendo mudanças

Sinta-se convidado para enviar sua contribuição como código!<br />
Faça um _fork_, implemente sua mudança e abra um _pull request_ para que seja revisado.<br />
Todas as colaborações são bemvindas! Em especial aquelas que nos ajudam a endereçar atividades mapeadas no [Projeto](https://github.com/orgs/dev-pira/projects/2).<br />
As atividades da coluna **READY TO DEVEOP** entendemos que são tasks num ponto bom para receber colaboração.

> **Importate:** as contribuições passam por algumas validações automatizadas.<br />
> Certifique-se de que sua contribuição atenda os requisitos de: `yarn audit --groups dependencies`, `yarn lint` e `yarn test-ci`.<br />
> As contribuições também são avaliadas pelo [Sonar Cloud](https://sonarcloud.io/organizations/dev-pira/projects).

## Governança

O Core Team reune-se a cada terça-feira para:

- Revisar [_Pull Requests_](https://github.com/dev-pira/site/pulls);
- Revisar _bugs_, discuções e requisições de funcionalidades;
- Dividir tarefas prioritárias entre o Core Team;
- Discutir e priorizar tarefas no quadro do [Projeto](https://github.com/orgs/dev-pira/projects/2);
