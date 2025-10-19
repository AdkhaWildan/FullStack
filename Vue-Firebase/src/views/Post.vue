<script setup>
import getPost from '@/composable/getPost'
import deletePost from '@/composable/deletePost'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const { post, error: loadError, load } = getPost(route.params.id)
const { erasePost, error: deleteError } = deletePost()

onMounted(() => {
  load()
})

const handleDelete = async (id) => {
  await erasePost(id)
  if (!deleteError.value) {
    alert('Post berhasil dihapus!')
    router.push('/')
  } else {
    alert(`Gagal menghapus: ${deleteError.value}`)
  }
}
</script>

<template>
  <div v-if="loadError">{{ loadError }}</div>
  <div v-else-if="post && post.title">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
    <button @click="handleDelete(post.id)">Delete</button>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
