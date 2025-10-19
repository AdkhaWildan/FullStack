<script setup>
import { ref } from 'vue'
import addPost from '@/composable/addPost'

const title = ref('')
const body = ref('')
const tags = ref('')

const { createPost, error } = addPost()

const onSubmit = async () => {
  const newPost = {
    title: title.value,
    body: body.value,
    tags: tags.value.split(',').map((tag) => tag.trim()),
  }
  await createPost(newPost)
  alert('Postingan berhasil dibuat')
  title.value = ''
  body.value = ''
  tags.value = ''
}
</script>

<template>
  <div class="form-container">
    <form @submit.prevent="onSubmit" action="">
      <label for="title">Title:</label>
      <input type="text" id="title" v-model="title" required />
      <label for="body">Content:</label>
      <input type="text" id="body" v-model="body" required />
      <label for="tags">Tags:</label>
      <input type="text" id="tags" v-model="tags" required />
      <button type="submit">Add Post</button>
    </form>
  </div>
</template>

<style scoped></style>
