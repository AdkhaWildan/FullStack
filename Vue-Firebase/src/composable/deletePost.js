import { ref } from 'vue'
import axios from 'axios'
import { projectFirestore } from '../firebase/config'
import { collection, deleteDoc, doc } from 'firebase/firestore'

export default function deletePost() {
  const error = ref(null)

  const erasePost = async (id) => {
    try {
      const postRef = doc(projectFirestore, 'posts', id)
      await deleteDoc(postRef)
    } catch (err) {
      error.value = err.message
    }
  }
  return { erasePost, error }
}
