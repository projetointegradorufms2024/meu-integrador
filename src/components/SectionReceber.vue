<!-- filepath: c:\Users\kenni\MeuProjetos\integrador\integrador\src\components\SectionReceber.vue -->
<template>
  <section id="receber">
    <h2>Preciso Receber Fraldas</h2>
    <div class="form-container">
      <form @submit.prevent="enviarFormulario('receber')">
        <div class="form-group">
          <label for="nome-receptor">Nome do Acamado/Cuidador:</label>
          <input type="text" id="nome-receptor" v-model="formReceptor.nome" required />
        </div>

        <div class="form-group">
          <label for="email-receptor">Email:</label>
          <input type="email" id="email-receptor" v-model="formReceptor.email" />
        </div>

        <div class="form-group">
          <label for="telefone-receptor">Telefone:</label>
          <input type="tel" id="telefone-receptor" v-model="formReceptor.telefone" required />
        </div>

        <div class="form-group">
          <label for="endereco-receptor">Localização (bairro/cidade):</label>
          <input type="text" id="endereco-receptor" v-model="formReceptor.localizacao" required />
        </div>

        <div class="form-group">
          <label for="necessidade">Tipo e Tamanho Necessário:</label>
          <select id="necessidade" v-model="formReceptor.necessidade" required>
            <option value="">Selecione...</option>
            <option value="geriatrica-p">Geriátrica - P</option>
            <option value="geriatrica-m">Geriátrica - M</option>
            <option value="geriatrica-g">Geriátrica - G</option>
            <option value="adulto-p">Adulto - P</option>
            <option value="adulto-m">Adulto - M</option>
            <option value="adulto-g">Adulto - G</option>
            <option value="infantil-rn">Infantil - RN</option>
            <option value="infantil-p">Infantil - P</option>
            <option value="infantil-m">Infantil - M</option>
          </select>
        </div>

        <div class="form-group">
          <label for="info-adicional">Informações Adicionais:</label>
          <textarea id="info-adicional" v-model="formReceptor.infoAdicional" rows="3"></textarea>
        </div>

        <button type="submit">Solicitar Fraldas</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Dados reativos para o formulário de solicitação
const formReceptor = ref({
  nome: '',
  email: '',
  telefone: '',
  localizacao: '',
  necessidade: '',
  infoAdicional: ''
});

// Método para enviar o formulário
const enviarFormulario = (tipo) => {
  if (tipo === 'receber') {
    alert(`Solicitação de ${formReceptor.value.nome} recebida! Entraremos em contato em breve.`);
    limparFormulario();
  }
};

// Método para limpar o formulário após o envio
const limparFormulario = () => {
  formReceptor.value = {
    nome: '',
    email: '',
    telefone: '',
    localizacao: '',
    necessidade: '',
    infoAdicional: ''
  };
};
</script>

<style scoped>
/* Adicione estilos específicos para o formulário, se necessário */
</style>
