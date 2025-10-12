<script setup>
import { Suspense } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Home from './views/Home.vue'
</script>

<template>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <RouterView />
  <!-- <Suspense>
    <template #default>
      <Home />
    </template>
    <template #fallback> <p>Loading ...</p></template>
  </Suspense> -->
</template>

<style scoped></style>
