const express = require('express');
const transactionRoutes = require('./routes/transactionRoutes');
const app = express();

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Rotas da API
app.use('/api/transactions', transactionRoutes);

module.exports = app;