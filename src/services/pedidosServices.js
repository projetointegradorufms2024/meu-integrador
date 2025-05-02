import api from './api'

export default {
  criarPedido(pedido) {
    return api.post('/pedidos', pedido)
  },
  listarPedidos() {
    return api.get('/pedidos')
  },
  atualizarPedido(id, dados) {
    return api.put(`/pedidos/${id}`, dados)
  },
  excluirPedido(id) {
    return api.delete(`/pedidos/${id}`)
  }
}
