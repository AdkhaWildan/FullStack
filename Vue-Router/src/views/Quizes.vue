<script setup>
import { ref, watch } from "vue";
import dataQuiz from "../data/data-quizes.json";
import quizCard from "../components/QuizCard.vue";

const quizes = ref(dataQuiz);
const search = ref("");

watch(search, () => {
  quizes.value = dataQuiz.filter((quiz) => {
    return quiz.title.toLowerCase().includes(search.value.toLowerCase());
  });
});
</script>

<template>
  <header>
    <h1 id="title">Quizi</h1>
    <input v-model="search" type="text" id="search-input" />
  </header>
  <section id="quiz-container">
    <quiz-card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" v-bind:quizes="quizes" />
  </section>
</template>

<style scoped>
header {
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  width: 100%;
}

#title {
  font-weight: bold;
  margin-right: 30px;
}

#search-input {
  border: none;
  background-color: beige;
  padding: 12px;
  border-radius: 8px;
}

#quiz-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
}
</style>

<style scoped></style>
