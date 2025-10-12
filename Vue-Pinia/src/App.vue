<script setup>
import { provide, reactive, ref } from "vue";
import Parent from "./components/Parent.vue";

const numbers = ref([1, 2, 3, 4, 5, 6]);

provide("angka", numbers);

// const red = ref(0);
// const green = ref(0);
// const blue = ref(0);

// const color = ref({
//   red: 0,
//   green: 0,
//   blue: 0,
// });

const color = reactive({
  red: 0,
  green: 0,
  blue: 0,
});

// function generateColor() {
//   red.value = Math.floor(Math.random() * 255);
//   green.value = Math.floor(Math.random() * 255);
//   blue.value = Math.floor(Math.random() * 255);
// }

function generateColor() {
  color.red = Math.floor(Math.random() * 255);
  color.green = Math.floor(Math.random() * 255);
  color.blue = Math.floor(Math.random() * 255);
}
</script>

<template>
  <!-- <main :style="{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }"> -->
  <!-- <main :style="{ backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})` }">
    <div>
       <input type="number" placeholder="Red" id="" v-model="red" />
      <input type="number" placeholder="Gereen" id="" v-model="green" />
      <input type="number" placeholder="Blue" id="" v-model="blue" /> 

      <input type="number" placeholder="Red" id="" v-model="color.red" />
      <input type="number" placeholder="Gereen" id="" v-model="color.green" />
      <input type="number" placeholder="Blue" id="" v-model="color.blue" />

      <button @click="generateColor()">Generate Color</button>
    </div>
  </main> -->

  <main>
    <Parent />
  </main>
</template>

<style scoped></style>

<!-- <style scoped>
main {
  background-color: rgb(122, 50, 255);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

div {
  display: flex;
  flex-direction: column;
}
</style> -->
