const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Mapeamento dos http para as funções do controller
router.get('/', transactionController.getAll);
router.post('/', transactionController.create);
router.put('/:id', transactionController.update);
router.delete('/:id', transactionController.delete);

module.exports = router;