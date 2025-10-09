<!-- <script setup>
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
</script>

<template>
  <Nav />
  <RouterView />
</template> -->

<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <main class="container">
    <RouterView />
  </main>
</template>

<style scoped>
main {
  max-width: 1500px;
  margin: 0 auto;
}
</style>
