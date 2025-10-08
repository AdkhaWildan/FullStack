<script setup>
import products from "../data/products.json";
import { RouterLink } from "vue-router";
</script>

<template>
  <div>Home</div>
  <h1>Hellow</h1>

  <RouterLink v-for="product in products" class="products" :key="product.id" :to="`/products/${product.id}`">{{ product.name }}</RouterLink>
</template>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  color: white;
  font-size: 16px;
}
</style>
