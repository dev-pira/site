# Site da comunidade DEVPIRA

Esse é o código fonte do site da comunidade DEVPIRA. <br />
Assim como a comunidade, nosso site também é aberto ao compartilhamento e a construção colaborativa. <br />
Consulte a sessão de como Contribuir para envolver-se com o desenvolvimento. <br />

## O Projeto

## Contribuir

Nós escolhemos desenvolver o site em [NextJs](https://nextjs.org), um framework sobre [ReactJs](https://reactjs.org). Essa escolha vem do conhecimento do time inicial do projeto.<br />
Escolhemos o [Contentful](https://www.contentful.com) - um CMS - de _backend_ como forma de acelerar o desenvolvimento.

### Como baixar e executar

Para executar o projeto:

```sh
yarn
yarn dev
```

A aplicação estará acessível em [http://localhost:3000](http://localhost:3000).

### Antes de começar a codar

Usamos o [`ESLint`](https://eslint.org) para a manutenção dos padrões de código do ReactJS e NextJS.  
Para certificar-se de que seu código segue o mesmo estilo do restante do projeto, siga os passos abaixo (Para desenvolvimento via VS Code):

- Instale as extensões [`Prettier`](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) e [`ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- Habilite a execução do [`husky`](https://typicode.github.io/husky/):

```sh
npx husky add .husky/pre-commit "yarn lint"
```

### Estratégia de _branching_

Escolhemos [`git-flow`](https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html) para nosso fluxo de desenvolvimento. <br />
Para novas funcionalidades, inicie uma `feature`; <br />
Para correções, inicie um `bugfix`;<br />
Ao finalizar o desenvolvimento, abra um _Pull Request_ para a _branch_ `develop`.<br />

### Submeter um _Pull Request_

Ao término do trabalho, abra um _Pull Request_ para `develop`. <br />
As implantações acontecerão quando o código for integrado à `main`, depois do fluxo de validação.

## Resolver _Issues_

...

# Feedback

...

# Código de conduta

...

# Licença

O Site da comunidade DEVPIRA está licenciado pela [MIT License](https://github.com/dev-pira/site/blob/develop/LICENSE).
