import api from './api'

export default {
  criarDoacao(doacao) {
    return api.post('/doacoes', doacao)
  },
  listarDoacoes() {
    return api.get('/doacoes')
  },
  atualizarDoacao(id, dados) {
    return api.put(`/doacoes/${id}`, dados)
  },
  excluirDoacao(id) {
    return api.delete(`/doacoes/${id}`)
  }
}
