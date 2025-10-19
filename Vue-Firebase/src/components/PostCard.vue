<script setup>
const { post } = defineProps({ post: Object })
import { useRouter } from 'vue-router'

const router = useRouter()

function goToPost() {
  console.log('Klik berjalan untuk post id:', post.id)
  router.push(`/posts/${post.id}`)
}
</script>

<template>
  <div class="post-card" @click="goToPost(id)">
    <div class="post-head">
      <h2>{{ post.title }}</h2>
    </div>
    <div class="post-body">
      <p>{{ post.body.substring(0, 80) }}...</p>
      <p>Tags: {{ post.tags.join(', ') }}</p>
    </div>
  </div>
</template>

<style scoped>
.post-card {
  text-align: start;
  border: 2px solid rgb(31, 31, 31);
  background-color: beige;
  border-radius: 12px;
  padding: 4px 16px;
  margin: 16px;
}
</style>
