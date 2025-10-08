<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <a href="/">Home</a>
    <a href="/about">About</a>
    |
    <RouterLink active-class="active" to="/">Home</RouterLink>
    <RouterLink active-class="active" to="/about">About</RouterLink>
  </div>
</template>

<style scoped>
.active {
  padding: 4px 8px;
  border: none;
  background-color: rgba(240, 255, 255, 0.2);
  border-radius: 12px;
  margin: 2px;
}
</style>
