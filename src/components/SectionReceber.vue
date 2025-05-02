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
          <label for="quantidade">Quantidade Necessária:</label>
          <input type="number" id="quantidade" v-model.number="formReceptor.quantidade" min="1" required />
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
import { ref } from 'vue'
import axios from 'axios'

const formReceptor = ref({
  nome: '',
  email: '',
  telefone: '',
  localizacao: '',
  necessidade: '',
  quantidade: null,
  infoAdicional: ''
})

const enviarFormulario = async (tipo) => {
  if (tipo === 'receber') {
    if (
      !formReceptor.value.nome ||
      !formReceptor.value.telefone ||
      !formReceptor.value.localizacao ||
      !formReceptor.value.necessidade ||
      !formReceptor.value.quantidade
    ) {
      alert('Todos os campos obrigatórios devem ser preenchidos!')
      return
    }

    try {
      const dadosEnviados = {
        nome: formReceptor.value.nome,
        email: formReceptor.value.email,
        telefone: formReceptor.value.telefone,
        localizacao: formReceptor.value.localizacao,
        tipo_tamanho: formReceptor.value.necessidade,
        quantidade: formReceptor.value.quantidade,
        informacoes_adicionais: formReceptor.value.infoAdicional
      }

      console.log('Dados enviados para o backend:', dadosEnviados)

      const response = await axios.post('http://localhost:3000/api/pedidos', dadosEnviados)

      alert(`Solicitação de ${formReceptor.value.nome} recebida! Entraremos em contato em breve.`)
      limparFormulario()
    } catch (error) {
      console.error('Erro ao enviar a solicitação:', error.response ? error.response.data : error.message)
      alert(`Erro ao enviar a solicitação: ${error.response ? error.response.data.erro : error.message}`)
    }
  }
}

const limparFormulario = () => {
  formReceptor.value = {
    nome: '',
    email: '',
    telefone: '',
    localizacao: '',
    necessidade: '',
    quantidade: null,
    infoAdicional: ''
  }
}
</script>

<style scoped>
#receber {
  text-align: justify;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

#receber h2 {
  text-align: center;
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
select,
textarea {
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
