<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Cabecalho_c from './components/cabecalho_c.vue';
import Menu_c from './components/menu_c.vue';
</script>

<template>
  <Menu_c />
  <RouterLink />
  <RouterView />
</template>

<style scoped>
  body{
    margin: 0;
    padding: 0;
  }
</style>
