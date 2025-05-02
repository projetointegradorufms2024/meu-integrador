const express = require('express');
const router = express.Router();
const controller = require('../controllers/pedidosController');

router.post('/', controller.receberPedido);
router.get('/', controller.listarPedidos);
router.delete('/:id', controller.deletarPedido);
router.put('/:id', controller.atualizarPedido);

module.exports = router;
