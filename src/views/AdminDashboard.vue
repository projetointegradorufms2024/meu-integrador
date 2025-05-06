<template>
  <div class="admin-dashboard">
    <h1>Painel do Administrador</h1>

    <!-- Solicitações -->
    <section>
      <h2>Solicitações de Fraldas</h2>
      <ul>
        <li v-for="(request, index) in donationRequests" :key="request.id">
          <div v-if="editRequestId === request.id" class="edit-form">
            <input v-model="request.nome" placeholder="Nome" />
            <input v-model="request.email" placeholder="Email" />
            <input v-model="request.telefone" placeholder="Telefone" />
            <input v-model="request.tipo_tamanho" placeholder="Tipo/Tamanho" />
            <input v-model.number="request.quantidade" placeholder="Quantidade" />
            <input v-model="request.localizacao" placeholder="Localização" />
            <div class="buttons">
              <button @click="saveRequest(request)">Salvar</button>
              <button @click="cancelEdit()">Cancelar</button>
            </div>
          </div>
          <div v-else>
            <strong>{{ request.nome }}</strong><br />
            Quantidade: {{ request.quantidade }} fralda(s) do tipo {{ request.tipo_tamanho }}<br />
            Email: {{ request.email }}<br />
            Telefone: {{ request.telefone }}<br />
            Localização: {{ request.localizacao }}
            <div class="buttons">
              <button @click="editRequestId = request.id">Editar</button>
              <button @click="deleteRequest(request.id)">Excluir</button>
            </div>
          </div>
        </li>
      </ul>
    </section>

    <!-- Doações -->
    <section>
      <h2>Doações Realizadas</h2>
      <ul>
        <li v-for="(donation, index) in completedDonations" :key="donation.id">
          <div v-if="editDonationId === donation.id" class="edit-form">
            <input v-model="donation.nome" placeholder="Nome" />
            <input v-model="donation.email" placeholder="Email" />
            <input v-model="donation.telefone" placeholder="Telefone" />
            <input v-model="donation.tipo_fralda" placeholder="Tipo Fralda" />
            <input v-model.number="donation.quantidade" placeholder="Quantidade" />
            <input v-model="donation.localizacao" placeholder="Localização" />
            <div class="buttons">
              <button @click="saveDonation(donation)">Salvar</button>
              <button @click="cancelEdit()">Cancelar</button>
            </div>
          </div>
          <div v-else>
            <strong>{{ donation.nome }}</strong><br />
            Quantidade: {{ donation.quantidade }} fralda(s) do tipo {{ donation.tipo_fralda }}<br />
            Email: {{ donation.email }}<br />
            Telefone: {{ donation.telefone }}<br />
            Localização: {{ donation.localizacao }}
            <div class="buttons">
              <button @click="editDonationId = donation.id">Editar</button>
              <button @click="deleteDonation(donation.id)">Excluir</button>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import {
  fetchDonationRequests,
  fetchCompletedDonations,
  updateDonationRequest,
  updateCompletedDonation,
  deleteDonationRequest,
  deleteCompletedDonation
} from '@/services/adminService';

export default {
  name: 'AdminDashboard',
  data() {
    return {
      donationRequests: [],
      completedDonations: [],
      editRequestId: null,
      editDonationId: null,
    };
  },
  async mounted() {
    await this.loadData();
  },
  methods: {
    async loadData() {
      try {
        const [requestsRes, donationsRes] = await Promise.all([
          fetchDonationRequests(),
          fetchCompletedDonations(),
        ]);
        this.donationRequests = requestsRes.data;
        this.completedDonations = donationsRes.data;
      } catch (error) {
        console.error('Erro ao carregar dados do painel:', error);
      }
    },
    async saveRequest(request) {
      try {
        await updateDonationRequest(request);
        this.editRequestId = null;
        this.loadData();
      } catch (err) {
        console.error('Erro ao atualizar pedido:', err);
      }
    },
    async saveDonation(donation) {
      try {
        await updateCompletedDonation(donation);
        this.editDonationId = null;
        this.loadData();
      } catch (err) {
        console.error('Erro ao atualizar doação:', err);
      }
    },
    async deleteRequest(id) {
      try {
        await deleteDonationRequest(id);
        this.loadData();
      } catch (err) {
        console.error('Erro ao excluir pedido:', err);
      }
    },
    async deleteDonation(id) {
      try {
        await deleteCompletedDonation(id);
        this.loadData();
      } catch (err) {
        console.error('Erro ao excluir doação:', err);
      }
    },
    cancelEdit() {
      this.editRequestId = null;
      this.editDonationId = null;
      this.loadData();
    },
  },
};
</script>

<style scoped>
.admin-dashboard {
  max-width: 900px;
  margin: 20px auto;
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 1.8rem;
}

section {
  margin-bottom: 40px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background-color: #fff;
  margin-bottom: 12px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

input {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

button {
  padding: 8px 14px;
  border: none;
  border-radius: 4px;
  background-color: #2c3e50;
  color: white;
  cursor: pointer;
  flex-grow: 1;
  min-width: 120px;
}

button:hover {
  background-color: #1a252f;
}

/* Responsividade */
@media (max-width: 600px) {
  .admin-dashboard {
    padding: 12px;
  }

  h1 {
    font-size: 1.4rem;
  }

  input {
    font-size: 0.95rem;
  }

  .buttons {
    flex-direction: column;
  }

  button {
    width: 100%;
  }
}
</style>
