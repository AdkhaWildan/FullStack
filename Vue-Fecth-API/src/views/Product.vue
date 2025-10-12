<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import ProductForm from '@/components/ProductForm.vue'

import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const id = route.params.id
const product = ref({})
const API_Url = `http://localhost:3000/products/${id}`

onMounted(() => {
  fetchData()
})

async function fetchData() {
  try {
    const response = await axios.get(API_Url)
    product.value = response.data
  } catch (error) {
    console.error(error)
  }
}

async function updaetProduct(product) {
  try {
    await axios.put(API_Url, product)
    router.push('/')
  } catch (error) {
    console(error)
  }
}

async function deleteProduct() {
  try {
    await axios.delete(API_Url)
    router.push('/')
  } catch (error) {
    console(error)
  }
}
</script>

<template>
  <div class="product-detail">
    <h2>{{ product.title }}</h2>
    <img :src="product.image" :alt="product.title" class="product-image" />
    <p>{{ product.description }}</p>
    <p>Rp.{{ product.price }}</p>
    <ProductForm :product="product" @update-product="updaetProduct" />
    <router-link to="/" class="back-button">Back</router-link>
    <button @click="deleteProduct" class="delete-button">Delete</button>
  </div>
</template>

<style scoped>
.product-detail {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  text-align: center;
}

.product-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 12px;
}

.product-detai p {
  margin-bottom: 4px;
}

.product-detai button {
  margin-top: 12px;
  padding: 12 24px;
  background-color: royalblue;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.back-button {
  display: inline-block;
  padding: 8px 12px;
  background-color: royalblue;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: backgrond-color 0.5s;
}

.back-button:hover {
  background-color: rgb(0, 56, 224);
}

.delete-button {
  display: inline-block;
  font: 16px bold;
  padding: 8px 12px;
  background-color: red;
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  transition: backgrond-color 0.5s;
  margin-top: 12px;
  margin-left: 12px;
  color: #fff;
  cursor: pointer;
}

.delete-button:hover {
  background-color: rgb(158, 0, 0);
}
</style>
