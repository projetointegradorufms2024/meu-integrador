<template>
  <div id="app">
    <div class="container">
      <header>
        <div class="restricted-area">
          <template v-if="isAdminPage">
            <span>Olá Administrador</span>
            <a @click="logout" class="logout-link">Sair</a>
          </template>
          <template v-else>
            <a @click="goToAdminLogin">
              Área Restrita <span>🔒</span>
            </a>
          </template>
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
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    // Verifica se a rota atual é a página do administrador
    const isAdminPage = computed(() => route.path === '/admin-dashboard')

    const goToAdminLogin = () => {
      if (route.path !== '/admin-login') {
        router.push('/admin-login')
      }
    }

    const logout = () => {
      // Redireciona para a página de login do administrador
      router.push('/admin-login')
    }

    return {
      isAdminPage,
      goToAdminLogin,
      logout,
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

/* Estilos para o link Área Restrita e Olá Administrador */
.restricted-area {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.restricted-area a,
.restricted-area span {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

/* Adiciona o cursor de mão ao passar o mouse no link Área Restrita */
.restricted-area a {
  cursor: pointer; /* Define o cursor como uma mão */
}

.logout-link {
  color: #e74c3c;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  padding: 8px 15px;
  border: 1px solid #e74c3c;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.logout-link:hover {
  background-color: #e74c3c;
  color: white;
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

