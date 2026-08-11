const db = require('../config/db');

const transactionController = {
    // GET -- Listar todas as transações (com junção de categoria)
    getAll: async (req, res) => {
        try {
            const query = `
                SELECT t.id, t.description, t.amount, t.type, c.name as category, t.created_at
                FROM transactions t
                LEFT JOIN categories c ON t.category_id = c.id
                ORDER BY t.created_at DESC
            `;
            const [rows] = await db.query(query);
            res.status(200).json(rows); // 200 OK
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar transações.', details: error.message });
            // 500 Internal Server Error
        }
    },

    // POST -- Criar uma nova transação
    create: async (req, res) => {
        const { description, amount, type, category_id } = req.body;
        if (!description || !amount || !type) {
            return res.status(400).json({ error: 'Descrição, valor e tipo são campos obrigatorios' });
            // 400 Bad Request
        }
        try {
            const query = `
                INSERT INTO transactions (description, amount, type, category_id) VALUES (?, ?, ?, ?)
            `;
            const [result] = await db.query(query, [description, amount, type, category_id || null]);

            res.status(201).json({
                message: 'Transação criada com sucesso!',
                transactionId: result.insertId
            });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar transação.', details: error.message });
        }
    },

    // PUT -- Atualizar uma transação existente
    update: async (req, res) => {
        const { id } = req.params;
        const { description, amount, type, category_id } = req.body;

        try {
            const query = `
                UPDATE transactions SET description = ?, amount = ?, type = ?, category_id = ? WHERE id = ?
            `;
            const [result] = await db.query(query, [description, amount, type, category_id || null, id]);

            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'Transação não encontrada.' });
            }

            res.status(200).json({ message: 'Transação atualizada com sucesso.' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar transação.', details: error.message });
        }
    },

    delete: async (req, res) => {
        const { id } = req.params;

        try {
            const query = 'DELETE FROM transactions WHERE id = ?';
            const [result] = await db.query(query, [id]);

            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'Transação não encontrada.' });
            }

            res.status(204).send(); // 204 No Content (Deletado com sucesso, sem corpo na resposta)
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar transação.', details: error.message });
        }
    }
};

module.exports = transactionController;