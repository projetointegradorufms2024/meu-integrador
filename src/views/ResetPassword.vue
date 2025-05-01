<template>
  <div class="reset-password">
    <h1>Redefinir Senha</h1>
    <form @submit.prevent="handlePasswordReset">
      <div class="form-group">
        <label for="new-password">Nova Senha:</label>
        <input type="password" id="new-password" v-model="newPassword" required />
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirme a Nova Senha:</label>
        <input type="password" id="confirm-password" v-model="confirmPassword" required />
      </div>
      <button type="submit">Redefinir Senha</button>
    </form>
    <p v-if="message" class="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newPassword: '',
      confirmPassword: '',
      message: '',
    };
  },
  methods: {
    handlePasswordReset() {
      if (this.newPassword === this.confirmPassword) {
        // Simula a redefinição de senha (substitua por uma chamada à API)
        this.message = 'Senha redefinida com sucesso!';
        setTimeout(() => {
          this.$router.push('/admin-dashboard'); // Redireciona para o painel do administrador
        }, 2000);
      } else {
        this.message = 'As senhas não coincidem. Tente novamente.';
      }
    },
  },
};
</script>

<style scoped>
.reset-password {
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

.message {
  text-align: center;
  margin-top: 15px;
  color: green;
}
</style>
