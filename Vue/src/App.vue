<script>
import { ref } from "vue";

export default {
  // Options API
  // data() {
  //   return {
  //     count: 0,
  //   };
  // },

  // methods: {
  //   decrease() {
  //     this.count--;
  //   },
  //   increase() {
  //     this.count++;
  //   },
  // },

  // Composition API
  setup() {
    const count = ref(0);

    function decrease() {
      count.value--;
    }

    function increase() {
      count.value++;
    }

    return {
      count,
      decrease,
      increase,
    };
  },
};
</script>

<template>
  <main>
    <div>
      <h1>Counter</h1>
      <span id="value">{{ count }}</span>
      <div>
        <!-- <button @click="decrease()" id="decrease">-</button>
        <button @click="increase()" id="increase">+</button> -->
        <button @click="decrease()" id="decrease">-</button>
        <button @click="increase()" id="increase">+</button>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
