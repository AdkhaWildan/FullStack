<script setup>
import { useRoute, useRouter, RouterView } from "vue-router";
import products from "../data/products.json";

const route = useRoute();
const router = useRouter();

const productId = parseInt(route.params.id);
const product = products.find((product) => product.id === productId);

function showOwner() {
  router.push({ name: "owner", params: { id: productId } });
}
</script>

<template>
  <div v-if="product">
    <h1>Product</h1>
    <div>
      <p>Name :{{ product.name }}</p>
      <p>Price :{{ product.price }}</p>
      <p>Year : {{ product.year }}</p>
    </div>
    <br />
    <button @click="showOwner">Show Owner</button>
    <RouterView />
  </div>
  <div v-else>
    <h2>Product Not Found</h2>
  </div>
</template>
