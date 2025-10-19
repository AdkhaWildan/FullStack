<script setup>
import PostCard from '@/components/PostCard.vue'
import getPosts from '@/composable/getPosts'
import { onMounted } from 'vue'

const { posts, error, load } = getPosts()

onMounted(() => {
  load()
})
</script>

<template>
  <main>
    <h1>Selamat Datang di Portal berita hari ini</h1>
    <input type="text" />
    <h3>Berita terbaru :</h3>
    <div v-if="error">{{ error }}</div>
    <div class="posts" v-else>
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </main>
</template>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
