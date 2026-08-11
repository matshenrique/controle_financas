# Controle de Finanças

Aplicação backend em Node.js para controle de transações financeiras.

## Visão geral

Este projeto oferece uma API simples para gerenciar transações, com configuração via `dotenv` e conexão a um banco de dados MySQL.

## Estrutura do projeto

- `server.js` - ponto de entrada da aplicação.
- `src/app.js` - configuração principal do Express.
- `src/config/db.js` - configuração de conexão com MySQL.
- `src/controllers/transactionController.js` - lógica de controle de transações.
- `src/routes/transactionRoutes.js` - definição de rotas da API.

## Como usar

1. Instale as dependências:

```bash
npm install
```

2. Crie um arquivo `.env` na raiz com as variáveis de ambiente do banco:

```env
DB_HOST=seu_host
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=seu_banco
PORT=3000
```

3. Inicie o servidor em modo de desenvolvimento:

```bash
npm run dev
```

## Dependências

- `express`
- `dotenv`
- `mysql2`
- `nodemon` (dev)

## Observações

Não inclua informações sensíveis no repositório. O arquivo `.gitignore` já protege `node_modules/` e arquivos de ambiente como `.env`.
