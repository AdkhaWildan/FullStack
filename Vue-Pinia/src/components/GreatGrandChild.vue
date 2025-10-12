<script setup>
import { inject } from "vue";

// const numbers = inject("angka");

import { useNumbers } from "@/stores/numbers";

const { numbers, filterNumber } = useNumbers();
</script>

<template>
  <div>
    <h1>Great Grand Child</h1>
    {{ filterNumber(13) }}
  </div>
</template>
