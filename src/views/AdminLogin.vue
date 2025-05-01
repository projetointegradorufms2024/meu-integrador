<template>
  <div class="admin-login-page">
    <div class="admin-login">
      <h1>Login do Administrador</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">Usuário:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Senha:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
    <div class="back-container">
      <span @click="goBack" class="back-link">
        ⬅ Voltar
      </span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    // Variáveis reativas para o formulário
    const username = ref('')
    const password = ref('')

    const handleLogin = () => {
      // Lógica de autenticação
      const validUsername = 'admin'
      const validPassword = '1234'

      if (username.value.trim() === validUsername && password.value.trim() === validPassword) {
        router.push('/reset-password') // Redireciona para a página de redefinição de senha
      } else {
        alert('Credenciais inválidas.') // Exibe mensagem de erro
      }
    }

    const goBack = () => {
      router.push('/') // Redireciona para a página inicial
    }

    return {
      username,
      password,
      handleLogin,
      goBack,
    }
  },
}
</script>

<style scoped>
.admin-login-page {
  position: relative;
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
}

.admin-login {
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
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

.back-container {
  margin-top: 10px; /* Adiciona espaçamento acima do botão */
  text-align: right; /* Alinha o botão à direita */
}

.back-link {
  color: #3498db;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  padding: 10px;
}

.back-link:hover {
  text-decoration: underline;
}
</style>
