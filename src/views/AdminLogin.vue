<template>
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
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  setup() {
    const router = useRouter()

    return {
      router,
    }
  },
  methods: {
    handleLogin() {
      const username = this.username.trim().toLowerCase();
      const password = this.password.trim();

      const defaultCredentials = {
        username: 'admin',
        password: '1234',
      };

      if (username === defaultCredentials.username && password === defaultCredentials.password) {
        // Emite um evento para o componente pai indicando que o administrador está logado
        this.$emit('admin-logged-in', true);

        // Redireciona para a página de redefinição de senha
        this.$router.push('/reset-password');
      } else if (username === 'admin' && password !== defaultCredentials.password) {
        // Emite um evento para o componente pai indicando que o administrador está logado
        this.$emit('admin-logged-in', true);

        // Redireciona para o painel do administrador
        this.$router.push('/admin-dashboard');
      } else {
        alert('Credenciais inválidas.');
      }
    },
  },
}
</script>

<style scoped>
.admin-login {
  max-width: 400px;
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
</style>
