const express = require('express');
const transactionRoutes = require('./routes/transactionRoutes');
const app = express();

// Middlewere para interpretar JSON no corpo das requisições 
app.use(express.json());

// Rotas da API
app.use('/api/trasactions', transactionRoutes);

module.exports = app;