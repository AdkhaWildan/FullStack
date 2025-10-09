<script setup>
const { quizQuestionsLength, correctAnswer } = defineProps(["quizQuestionsLength", "correctAnswer"]);
</script>

<template>
  <section class="results">
    <p>Score:</p>
    <h1>{{ correctAnswer }}/{{ quizQuestionsLength }}</h1>
    <RouterLink to="/">Go Back</RouterLink>
  </section>
</template>
