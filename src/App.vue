<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <header>
    <nav>
      <Navbar />
    </nav>
  </header>
  <RouterView />
</template>

<style scoped></style>
