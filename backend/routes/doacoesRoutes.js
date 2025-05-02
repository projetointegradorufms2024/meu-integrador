const express = require('express');
const router = express.Router();
const controller = require('../controllers/doacoesController');

router.post('/', controller.receberDoacao);
router.get('/', controller.listarDoacoes);
router.delete('/:id', controller.deletarDoacao);
router.put('/:id', controller.atualizarDoacao);

module.exports = router;
