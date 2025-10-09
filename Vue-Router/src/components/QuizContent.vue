<script setup>
import { ref, defineProps } from "vue";

const { question } = defineProps(["question"]);
const emit = defineEmits(["selectOption"]);

function emitSelectedOption(option) {
  emit("selectOption", option);
}
</script>

<template>
  <section id="question-container">
    <h1 class="question-title">{{ question.text }}</h1>
  </section>
  <section id="options-container">
    <div class="option" v-for="answer in question.answers" :key="answer.id" @click="emitSelectedOption(answer)">
      <p class="option-label">{{ answer.label }}</p>
      <p class="option-value">{{ answer.text }}</p>
    </div>
  </section>
</template>

<style scoped>
#question-container {
  margin-top: 32px;
}

.question-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 32px;
}

.option {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  cursor: pointer;
}

.option-label {
  font-size: 20px;
  font-weight: bold;
  width: 40px;
  height: 40px;
  background-color: #a0ced9;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-right: 8px;
  color: black;
}

.option-value {
  font-size: 20px;
  font-weight: bold;
  padding: 0 20px;
  background-color: rgb(196, 202, 206);
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  color: black;
}
</style>
