# 🐾 Cadê meu pet?

Encontre e reporte animais perdidos facilmente. Nossa aplicação conecta as cidades de Rio Grande, Pelotas e São José do Norte para ajudar a reunir animais perdidos com suas famílias. Cadastre-se agora e ajude a fazer a diferença!

## 🌟 Funcionalidades

- **Cadastro de animais perdidos**: Permite que os usuários registrem animais perdidos, incluindo fotos e detalhes importantes.
- **Busca de animais perdidos**: Facilita a busca por animais perdidos usando filtros como localização, espécie e data de desaparecimento.

## 🛠️ Tecnologias Utilizadas

### Front-end
- **React.js**: Biblioteca JavaScript para a construção de interfaces de usuário.
- **Axios**: Cliente HTTP para realizar requisições ao backend.
- **Tailwind CSS**: Framework de CSS utilitário para estilização rápida e responsiva.
- **Vite**: Ferramenta de build rápida e configurável para desenvolvimento de front-end.

### Back-end
- **Node.js**: Ambiente de execução JavaScript no servidor.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática ao código.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional avançado e open-source.
- **Prisma**: ORM (Object-Relational Mapping) para interagir com o banco de dados de forma eficiente e intuitiva.
- **Fastify**: Framework web focado em performance e simplicidade.

## 🚀 Instalação e Configuração

### Pré-requisitos

- Node.js (versão mínima: 14.x)
- npm ou yarn

### Passo a Passo

1. Clone o repositório:
    ```sh
    git clone https://github.com/saesel/cademeupet
    ```
2. Acesse o diretório do projeto:
    ```sh
    cd cademeupet
    ```
3. Instale as dependências do front-end:
    ```sh
    cd client
    npm install
    ```
4. Instale as dependências do back-end:
    ```sh
    cd ../server
    npm install
    ```

### 🛠️ Configuração do Ambiente

1. Crie um arquivo `.env` no diretório `server` e configure as variáveis de ambiente necessárias (exemplo abaixo):
    ```env
    DATABASE_URL="sua_url_do_banco_de_dados"
    ```
2. Execute as migrações do banco de dados:
    ```sh
    npx prisma migrate dev
    ```

## ▶️ Execução

### Desenvolvimento

1. Inicie o servidor de desenvolvimento do back-end:
    ```sh
    cd server
    npm run dev
    ```
2. Inicie o servidor de desenvolvimento do front-end:
    ```sh
    cd ../client
    npm run dev
    ```

### Produção

1. Construa o projeto front-end:
    ```sh
    cd client
    npm run build
    ```
2. Inicie o servidor do back-end:
    ```sh
    cd ../server
    npm start
    ```

## 📜 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
