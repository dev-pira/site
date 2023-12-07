# Diagramas de Arquitetura.

Aqui se concentram os diagramas de arquitetura.<br />
Existem dois tipos de diagrams disponíveis:

1. C4 DSL - Segue o padrão de notação DSL para diagramas de arquitetura gerais baseados em C4 (Contexto, Container e Componente)
2. UML - Que é descrito pela notação proposta por PlantUML. Especialmente útil para detalhar aspectos pontuais da arquitetura como estrutura de classes ou fluxo de informações

## C4 DSL

O arquivo único [c4.dsl](./c4.dsl) descrive o modelo e declara a visualização.<br />
Para explorar a prévisualização e receber dicas e coloração no Visual Studio Code, é possível instalar a extenção [C4 DSL Extension](https://marketplace.visualstudio.com/items?itemName=systemticks.c4-dsl-extension)<br />
É possível exportar o modelo em diversos formatos.<br/>
Para consultar a documentação sobre exportação, consulte a documentação da [CLI do Structurizr](https://docs.structurizr.com/cli/export)<br />.
Para exportar, a CLI do Structurizr é necessária. Consulte também o [guia de instalação](https://docs.structurizr.com/cli/installation).<br />
Para exportar para PlantUML, use o seguinte comando no diretório onde se encontra o arquivo DSL:

```sh
$ structurizr-cli export -workspace c4.dsl -format plantuml -out ./out
```

## UML

Para documentar detalhes sobre arquitetura, usamos a notação PlantUml.<br />
Para detalhes sobre a notação, é possível consultar a [documentação oficial](https://plantuml.com).

## PlantUML

É possível explorar a visualização ou mesmo exportar diagramas em PlantUML.<br />
Para isso é necessário:

- Uma instalação ou instancia de PlantUML rodando. Você pode conseguir isso executando o comando descrito em [plantuml.cmd](../../.env/supporting/plantuml.cmd)
- O plugin [PlantUML](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml) para Visual Studio Code
