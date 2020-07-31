<div align="center">
    <div>
        <img alt="Logo do projeto Beckerflix" width="500px" src="src/assets/img/Logo.png"/>
    </div>
    <div>
        <img alt="Logo da Imersão React da Alura" src="https://www.alura.com.br/assets/img/imersoes/react/logo-horizontal.1595623271.svg"/>
    </div>
    <p></p>
</div>

> Projeto desenvolvido durante a [Imersão React](https://www.alura.com.br/imersao-react/) da [Alura](https://www.alura.com.br/).

## Overview
O projeto Beckerflix é uma aplicação web inspirada na interface da Netflix, onde é possível colocar listas de vídeos. As listas de vídeos aqui utilizadas são de vídeos disponíveis no YouTube e em sua maioria vídeos ensaio (ou, do inglês, video essay). O projeto foi desenvolvido com React e é uma Single Page Application e tem o padrão de código garantindo com [EsLint](https://eslint.org/).

### Front-end
O front-end do projeto foi desenvolvido com React, inicializado com [Create React App](https://create-react-app.dev/), utilizando o [Styled Components](https://styled-components.com/) para a camada de estilo dos componentes da aplicação e para o projeto ser uma Single Page Application utilizamos o [React Router DOM](https://reactrouter.com/web), todas ferramentas consideradas essenciais no desenvolvimento em React. E também utilizar a biblioteca [React Slick](https://react-slick.neostack.com/) para fazer os carousels da aplicação.

### Back-end
O back-end do projeto foi construído com o [JSON Server](https://github.com/typicode/json-server) que possibilita a criação de uma REST API falsa, ou Fake API, que foi desenvolvida e normalmente utilizada por desenvolvedores front-end que precisam utilizar um back-end de forma rápida para suas criações e protótipos.

## Setup
Primeiramente, tenha o [NodeJS](https://nodejs.org/) instalado ou faça o download e a instalação. Com o NodeJS instalado, realize o download do projeto e abra o terminal no diretório do projeto. Para instalar o restante dos pacotes digite:

```sh
    npm install
```

Para rodar o projeto digite:

```sh
    npm run dev
```

E em outro terminal, para roda a Fake API, digite:

```sh
    npm run dev-server
```

Após rodar o projeto uma nova janela ou aba do seu navegador abrirá em [localhost:3000](http://localhost:3000), a página será recarregada automaticamente se for feita alterações e você também verá, caso exista, os erros na página e no console do terminal. O Fake API, por sua vez, estará disponível em [localhost:8080](http://localhost:3000) e também será atualizado automaticamente conforme sofrer alterações.


## Deployment
O deploy do front-end do projeto foi realizado na [Vercel](https://vercel.com/github) para GitHub que permite fazer essa integração e o deploy automaticamente sem configurações. O deploy do back-end do projeto foi realizado na [Heroku](https://www.heroku.com/) que também faz a integração com o Github e o deploy automaticamente.

O projeto está disponível [aqui](http://beckerflix.vercel.app/) e o Fake API do projeto está disponível [aqui](https://beckerflix.herokuapp.com/categorias).

## Next Steps
- [ ] Criar animação de "loading..." e adicionar nas páginas.
- [ ] Customizar os botões dos carousels. [How do?](carousels)
- [ ] Finalizar o cadastro de categorias.
- [ ] Listar videos e categorias cadastradas nas páginas de cadastro.
- [ ] Adicionar a opção de deletar um video cadastrado.
- [ ] Clicar no vídeo e ele abrir no player do banner.

## License
[MIT License](./LICENSE) © [Lucas Becker](http://lucasbecker.github.io/)