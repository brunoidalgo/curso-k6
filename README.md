# Introdução aos testes de performance com k6

<h1 align="left">
    <img src=".github/logo-stiker.svg" width="250px">
</h1>

# User API

## 🔖 Requisitos funcionais

### Cadastro

- [X] Deve retornar os id ao cadastrar um novo usuário
- [X] Deve retornar 201 ao cadastrar um novo usuário
- [X] Deve retornar 400 ao tentar cadastrar sem email e senha
- [X] Deve retornar 400 se o email for duplicado

| campos   | descrição                             | tipo     | obrigatório |
| :-----   | :------------------------------------ | :------- | :---------- |
| email    | usuário identificador único           | email    | sim         |
| password | senha do usuário                      | texto    | sim         |

## 🔖 Requisitos não funcionais

### Cadastro

- [X] O cadastro com sucesso deve ocorrer em até 2 segundos
- [X] Cadastros sem sucesso devem ocorrer em até 2 segundos
- [X] Deve poder cadastrar até 100 usuários simultâneos
- [X] A margem de erro no cadastro deve ser de pelo menos 1%

## 🚀 Tecnologias

- [Node.js] - plataforma de desenvolvimento
- [Express] - framework onde a API foi construída
- [MongoDB] - Banco de dados (Não relacional)
- [k6] - ferramenta para teste de carga, performance, stress etc...

## 👨🏻‍💻 Como executar o projeto

[Node.js](https://nodejs.org/) v16 ou superior para executar.

Execute os comandos abaixo para instalar das dependências do projeto:

```sh
cd curso-k6-basico/api
yarn install
yarn dev
```

Execute o comando abaixo para rodar o teste de perfomance com k6:

```sh
k6 run hello.js
```

Execute o comando abaixo para rodar o teste de perfomance com k6 simulando 10 usuários simultâneos por 30s:

```sh
k6 run --vus 10 --duration 30s hello.js
```

Siga o passo a passo do [Link](https://github.com/benc-uk/k6-reporter) para poder importar a biblioteca de reporter que lhe permitirá gerar relatórios visuais em html para demonstrações.

Execute o comando abaixo para rodar o teste de performance com report/relatório em Html

```sh
k6 run --vus 10 --duration 30s hello.js
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feito por &nbsp;por Bruno Empke 👋 &nbsp;[Meu linkedin](https://www.linkedin.com/in/bruno-empke/)
