import api from './api'

export default {
  criarDoacao(doacao) {
    return api.post('/doacoes/', doacao) // Removido /api do início
  },
  listarDoacoes() {
    return api.get('/doacoes') // Removido /api do início
  },
  atualizarDoacao(id, dados) {
    return api.put(`/doacoes/${id}`, dados) // Removido /api do início
  },
  excluirDoacao(id) {
    return api.delete(`/doacoes/${id}`) // Removido /api do início
  }
}
