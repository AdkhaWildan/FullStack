import { ref } from 'vue'
import axios from 'axios'
import { projectFirestore } from '../firebase/config'
import { collection, addDoc } from 'firebase/firestore'

export default function addPost() {
  const error = ref(null)

  const createPost = async (post) => {
    try {
      await addDoc(collection(projectFirestore, 'posts'), post)
      //   await axios.post('http://localhost:3000/posts', post)
    } catch (err) {
      error.value = err.message
    }
  }
  return { createPost, error }
}
