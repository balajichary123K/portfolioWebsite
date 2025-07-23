<script setup>
import { RouterView } from 'vue-router';
// import Home from './components/Home.vue';
import Header from './components/Header.vue';
</script>
<template>
  <Header></Header>
  <main class="pt-20">
    <router-view></router-view>
  </main>
</template>