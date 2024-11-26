<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Cabecalho_c from './components/cabecalho_c.vue'
import Menu_c_celular from './components/menu_c_celular.vue';
</script>

<template>
  <RouterLink />
  <RouterView />
</template>

<style scoped>
  body{
    margin: 0;
    padding: 0;
  }
</style>
