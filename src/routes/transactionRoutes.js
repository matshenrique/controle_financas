const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Mapeamento dos http para as funções do contreoller
router.get('/', transactionController.getAll);
router.post('/', transactionController.create);
router.put('/', transactionController.update);
router.delete('/', transactionController.delete);

module.exports = router;