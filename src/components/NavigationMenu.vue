<!-- filepath: c:\Users\kenni\MeuProjetos\integrador\integrador\src\components\NavigationMenu.vue -->
<script setup>
import { ref } from 'vue';

const menu = ref([
  { id: 1, texto: "Sobre", link: "#sobre" },
  { id: 2, texto: "Como Funciona", link: "#como-funciona" },
  { id: 3, texto: "Quero Doar", link: "#doar" },
  { id: 4, texto: "Preciso Receber", link: "#receber" },
  { id: 5, texto: "Contato", link: "#contato" },
]);

const rolarPara = (anchor) => {
  const target = document.querySelector(anchor);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    console.error(`Elemento com o seletor "${anchor}" não encontrado.`);
  }
};
</script>

<template>
  <nav>
    <ul>
      <li v-for="item in menu" :key="item.id">
        <a :href="item.link" @click.prevent="rolarPara(item.link)">
          {{ item.texto }}
        </a>
      </li>
    </ul>
  </nav>
</template>
