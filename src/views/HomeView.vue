<script setup>
import { ref } from 'vue'; // Importando o 'ref' do Vue para reatividade
import TheWelcome from '../components/TheWelcome.vue'; // Importando o componente TheWelcome
import SectionComoFunciona from '../components/SectionComoFunciona.vue'; // Importando o componente SectionComoFunciona

// Definindo os dados reativos usando 'ref' para formulário de doação e receptor
const formDoacao = ref({
  nome: '',
  email: '',
  telefone: '',
  localizacao: '',
  tipoFralda: '',
  quantidade: ''
});

const formReceptor = ref({
  nome: '',
  email: '',
  telefone: '',
  localizacao: '',
  necessidade: '',
  infoAdicional: ''
});

// Menu com itens de navegação
const menu = ref([
  { id: 1, texto: "Sobre", link: "#sobre" },
  { id: 2, texto: "Como Funciona", link: "#como-funciona" },
  { id: 3, texto: "Quero Doar", link: "#doar" },
  { id: 4, texto: "Preciso Receber", link: "#receber" },
  { id: 5, texto: "Contato", link: "#contato" }
]);

// Método para rolar para o elemento desejado
const rolarPara = (anchor) => {
  const target = document.querySelector(anchor);
  if (target) {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  } else {
    console.error(`Elemento com o seletor "${anchor}" não encontrado.`);
  }
};
</script>

<template>
  <main>
    <TheWelcome /> <!-- Componente TheWelcome -->

    <!-- Menu de Navegação -->
   








  </main>
</template>
