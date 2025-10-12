<script setup>
import GrandChild from "./GrandChild.vue";

import { useNumbers } from "@/stores/numbers";

const { numbers, addNumber } = useNumbers();

// const numbers = inject("angka");
</script>

<template>
  <div>
    <h1>Child</h1>
    {{ numbers }}
    <button @click="addNumber()">Add</button>
    <div class="line"></div>
    <GrandChild />
  </div>
</template>
