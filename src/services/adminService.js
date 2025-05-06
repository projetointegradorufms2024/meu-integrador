import api from './api';

// Busca todos os pedidos
export function fetchDonationRequests() {
  return api.get('/pedidos');
}

// Busca todas as doações
export function fetchCompletedDonations() {
  return api.get('/doacoes');
}

// Atualiza um pedido específico
export function updateDonationRequest(request) {
  return api.put(`/pedidos/${request.id}`, request);
}

// Atualiza uma doação específica
export function updateCompletedDonation(donation) {
  return api.put(`/doacoes/${donation.id}`, donation);
}
export const deleteDonationRequest = (id) => {
  return api.delete(`/pedidos/${id}`);
};

export const deleteCompletedDonation = (id) => {
  return api.delete(`/doacoes/${id}`);
};
