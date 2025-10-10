<script setup>
import { ref } from "vue";

const tasks = ref([" Learn HTML", " Learn CSS", " Learn JavaScript"]);
const newTask = ref("");

function addTask() {
  if (newTask.value) {
    tasks.value.unshift(newTask.value);
    newTask.value = "";
  }
}

function removeTask(index) {
  // tasks.value = tasks.value.filter((value) => value !== task);
  tasks.value.splice(index, 1);
}

function beforeEnter(move) {
  move.style.opacity = 0;
  move.style.transform = "scale(0)";
}

function enter(move) {
  move.style.transition = "all 0.3s ease";
  move.style.opacity = 1;
  move.style.transform = "translateX(0)";
}

// const showText = ref(false);
</script>

<template>
  <!-- <main>
    <div class="container">
      <Transition name="fade">
        <h1 v-if="showText">Hello World</h1>
        <h1 v-else>Good Bye</h1>
      </Transition>
    </div>
    <button @click="showText = !showText">Animate</button>
  </main> -->
  <main>
    <div class="container">
      <input type="text" autofocus v-model="newTask" @keyup.enter="addTask()" />
      <TransitionGroup name="list" appear @before-enter="beforeEnter" @enter="enter">
        <div v-for="task in tasks" class="card-list" :key="task" @click="removeTask(tasks.indexOf(task))">{{ task }}</div>
      </TransitionGroup>
    </div>
  </main>
</template>

<style scoped>
.container {
  max-width: 300px;
  margin: 0 auto;
}

.container input {
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
}

.card-list {
  width: 300px;
  border-radius: 5px;
  padding: 5px 10px;
  margin-top: 10px;
  box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.2);
  text-align: center;
  cursor: pointer;
  background-color: azure;
  color: black;
}

/* .list-enter-from {
  opacity: 0;
  transform: scale(0.6);
} */
/* .list-enter-to {
  opacity: 1;
  transform: scale(1);
} */

/* .list-enter-active {
  transition: all 1s ease;
} */

.list-move {
  transition: all 1s ease;
}

.list-leave-from {
  opacity: 1;
  transform: scale(1);
}
.list-leave-to {
  opacity: 0;
  transform: scale(0);
}

.list-leave-active {
  transition: all 1s ease;
  position: absolute;
}
</style>

<!-- <style scoped>
.container {
  position: relative;
}

h1 {
  position: absolute;
}

button {
  margin-top: 60px;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter-active {
  transition: all 3s ease;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: all 1s ease;
}
</style> -->
