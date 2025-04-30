<template>
  <div id="app">
    <div class="container">
      <header>
        <!-- Link para Área Restrita -->
        <div class="restricted-area">
          <a @click="goToAdminLogin">
            Área Restrita 🔒
          </a>
        </div>
        <!-- Logo e Slogan -->
        <div class="logo">SOS SOLIDARIEDADE</div>
        <p class="slogan">Conectando doadores e acamados</p>
      </header>
    </div>
    <!-- Renderiza o componente HomeView -->
    <router-view />
    <!-- Adiciona o rodapé -->
    <footer>
      <div class="centered-text">
        <p>Projeto de Extensão - Tecnologia da Informação - abril 2025.1</p>
        <p>Desenvolvido por: Kennia Fernandes Barbosa, Haroldo de Mattos Taques Junior, Marcelo Ruiz, Cauan Fortunato, Alex Sales Ferreira</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    const goToAdminLogin = () => {
      if (router.currentRoute.value.path !== '/admin-login') {
        router.push('/admin-login')
      }
    }

    return {
      goToAdminLogin,
    }
  },
}
</script>

<style scoped>
/* Estilos para o cabeçalho */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

header {
  position: relative;
  text-align: center;
  padding: 30px 0;
  background: linear-gradient(135deg, #3498db, #2c3e50);
  color: white;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Estilos para o link Área Restrita */
.restricted-area {
  position: absolute;
  top: 20px;
  right: 20px;
}

.restricted-area a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  background-color: #e74c3c;
  padding: 8px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
  display: inline-block; /* Garante que o link seja clicável */
}

.restricted-area a:hover {
  background-color: #c0392b;
}

.logo {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.slogan {
  font-size: 1.2rem;
  font-style: italic;
  opacity: 0.9;
}
</style>

