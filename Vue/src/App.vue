<!-- <script>
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
</script> -->

<script setup>
import { ref } from "vue";
const showForm = ref(false);
const newMemo = ref("");
const memos = ref([]);
const errorMessages = ref("");

function addMemo() {
  if (!newMemo.value) {
    errorMessages.value = "Please enter memo before save";
    return;
  }
  memos.value.push({
    id: Date.now(),
    memo: newMemo.value,
    date: new Date().toLocaleDateString("en-GB"),
    backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  });
  newMemo.value = "";
  showForm.value = false;
}

function deleteMemo(id) {
  memos.value = memos.value.filter((memo) => memo.id !== id);
}
</script>
<template>
  <!-- <main>
    <div>
      <h1>Counter</h1>
      <span id="value">{{ count }}</span>
      <div>
        <button @click="decrease()" id="decrease">-</button>
        <button @click="increase()" id="increase">+</button>
        <button @click="decrease()" id="decrease">-</button>
        <button @click="increase()" id="increase">+</button>
      </div>
    </div>
  </main> -->

  <main>
    <div class="container">
      <header>
        <h1 class="header-title">Memo</h1>
        <button @click="showForm = true" class="header-button">+</button>
      </header>
      <div class="card-container">
        <div
          class="card"
          v-for="memo in memos"
          :key="memo.id"
          :style="{
            backgroundColor: memo.backgroundColor,
          }"
        >
          <p class="card-content">{{ memo.memo }}</p>
          <div class="card-footer">
            <p class="card-date">{{ memo.date }}</p>
            <button class="card-delete-btn" @click="deleteMemo(memo.id)">&times;</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showForm" class="form-overlay">
      <div class="form-modal">
        <button @click="showForm = false" class="form-close-btn">&times;</button>
        <p v-if="errorMessages" class="form-error">{{ errorMessages }}</p>
        <textarea v-model="newMemo" name="memo" id="memo" cols="30" rows="10"></textarea>
        <button @click="addMemo()" class="form-save-btn">Save</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
}

.container {
  padding: 10px;
  max-width: 1000px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-title {
  font-size: 48px;
  margin-bottom: 24px;
  color: #99b5d2;
  align-items: center;
}

.header-button {
  border: none;
  padding: 10px;
  width: 48px;
  height: 48px;
  cursor: pointer;
  border-radius: 100%;
  background-color: aquamarine;
  color: white;
  font-size: 24px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  width: 225px;
  height: 225px;
  padding: 10px;
  background-color: bisque;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
}
.card-delete-btn {
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  background-color: red;
  color: white;
  cursor: pointer;
}

.form-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-modal {
  width: 420px;
  background-color: white;
  border-radius: 16px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.form-close-btn {
  position: absolute;
  top: 5px;
  right: 10px;
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.form-save-btn {
  padding: 10px 20px;
  font-size: 24px;
  width: 100%;
  background-color: gray;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 16px;
  color: white;
}

.form-error {
  color: red;
}
</style>
