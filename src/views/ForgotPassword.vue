<template>
  <div class="forgot-password">
    <h1>Recuperação de Senha</h1>
    <form @submit.prevent="handlePasswordReset">
      <div class="form-group">
        <label for="email">Digite seu e-mail:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <button type="submit">Enviar</button>
    </form>
    <p v-if="message" class="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: '',
    };
  },
  methods: {
    handlePasswordReset() {
      // Simula o envio de um e-mail de recuperação
      if (this.email) {
        this.message = `Um link de recuperação foi enviado para ${this.email}.`;
      } else {
        this.message = 'Por favor, insira um e-mail válido.';
      }
    },
  },
};
</script>

<style scoped>
.forgot-password {
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
