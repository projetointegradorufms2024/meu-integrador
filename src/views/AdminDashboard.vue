<template>
  <div class="admin-dashboard">
    <h1>Painel do Administrador</h1>

    <!-- Seção de Solicitações de Doações -->
    <section>
      <h2>Solicitações de Doações</h2>
      <ul>
        <li v-for="(request, index) in donationRequests" :key="index">
          {{ request.type }} - Tamanho: {{ request.size }} - Quantidade: {{ request.quantity }}
        </li>
      </ul>
    </section>

    <!-- Seção de Doações Realizadas -->
    <section>
      <h2>Doações Realizadas</h2>
      <ul>
        <li v-for="(donation, index) in completedDonations" :key="index">
          {{ donation.donor }} doou {{ donation.quantity }} {{ donation.type }} (Tamanho: {{ donation.size }}) para {{ donation.recipient }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AdminDashboard',
  data() {
    return {
      donationRequests: [], // Lista de solicitações de doações
      completedDonations: [], // Lista de doações realizadas
    };
  },
  mounted() {
    // Simula a busca de dados (substitua por uma chamada à API)
    this.donationRequests = [
      { type: 'Fralda Geriátrica', size: 'M', quantity: 20 },
      { type: 'Fralda Infantil', size: 'RN', quantity: 50 },
      { type: 'Fralda Adulto', size: 'G', quantity: 30 },
    ];

    this.completedDonations = [
      { donor: 'Carlos', type: 'Fralda Geriátrica', size: 'P', quantity: 10, recipient: 'João' },
      { donor: 'Ana', type: 'Fralda Infantil', size: 'M', quantity: 25, recipient: 'Maria' },
    ];
  },
};
</script>

<style scoped>
.admin-dashboard {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
}

section {
  margin-bottom: 30px;
}

h2 {
  color: #3498db;
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
