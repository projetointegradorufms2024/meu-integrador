<template>
  <section id="doar">
    <h2>Quero Doar Fraldas</h2>
    <div class="form-container">
      <form @submit.prevent="enviarFormulario('doacao')">
        <div class="form-group">
          <label for="nome-doador">Nome:</label>
          <input type="text" id="nome-doador" v-model="formDoacao.nome" required />
        </div>

        <div class="form-group">
          <label for="email-doador">Email:</label>
          <input type="email" id="email-doador" v-model="formDoacao.email" required />
        </div>

        <div class="form-group">
          <label for="telefone-doador">Telefone:</label>
          <input type="tel" id="telefone-doador" v-model="formDoacao.telefone" required />
        </div>

        <div class="form-group">
          <label for="endereco-doador">Localização (bairro/cidade):</label>
          <input type="text" id="endereco-doador" v-model="formDoacao.localizacao" required />
        </div>

        <div class="form-group">
          <label for="tipo-fralda">Tipo de Fralda:</label>
          <select id="tipo-fralda" v-model="formDoacao.tipoFralda" required>
            <option value="">Selecione...</option>
            <option value="geriatrica">Geriátrica</option>
            <option value="adulto">Adulto</option>
            <option value="infantil">Infantil</option>
          </select>
        </div>

        <div class="form-group">
          <label for="quantidade">Quantidade:</label>
          <input type="number" id="quantidade" v-model="formDoacao.quantidade" min="1" required />
        </div>

        <button type="submit">Enviar Doação</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Dados reativos para o formulário de doação
const formDoacao = ref({
  nome: '',
  email: '',
  telefone: '',
  localizacao: '',
  tipoFralda: '',
  quantidade: ''
});

// Método para enviar o formulário
const enviarFormulario = (tipo) => {
  if (tipo === 'doacao') {
    alert(`Obrigado, ${formDoacao.value.nome}, por sua doação de ${formDoacao.value.quantidade} fraldas ${formDoacao.value.tipoFralda}!`);
    limparFormulario();
  }
};

// Método para limpar o formulário após o envio
const limparFormulario = () => {
  formDoacao.value = {
    nome: '',
    email: '',
    telefone: '',
    localizacao: '',
    tipoFralda: '',
    quantidade: ''
  };
};
</script>

<style scoped>
#doar {
  text-align: justify; /* Justifica o texto */
  max-width: 800px; /* Define uma largura máxima para a seção */
  margin: 0 auto; /* Centraliza a seção horizontalmente */
  padding: 20px; /* Adiciona espaçamento interno */
}

#doar h2 {
  text-align: center; /* Centraliza o título */
  margin-bottom: 20px;
  font-size: 2rem;
  color: #2c3e50;
}

.form-container {
  margin-top: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  display: block;
  margin: 0 auto;
}

button:hover {
  background-color: #2980b9;
}
</style>
