<script setup>
const { product } = defineProps(["product"]);
</script>
<template>
  <div class="item">
    <h4>{{ product.name }}</h4>
    <p>{{ product.year }}</p>
    <p>{{ product.price }}</p>
  </div>
</template>
