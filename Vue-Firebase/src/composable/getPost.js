import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'
import { doc, getDoc } from 'firebase/firestore'

const getPost = (id) => {
  const post = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      const docRef = doc(projectFirestore, 'posts', id)
      const res = await getDoc(docRef)
      if (!res.exists()) {
        throw new Error('Post tidak ditemukan')
      }

      post.value = { ...res.data(), id: res.id }

      //   let data = await fetch('http://localhost:3000/posts/' + id)
      //   if (!data.ok) {
      //     throw Error('Tidak ada data')
      //   }
      //   post.value = await data.json()
    } catch (err) {
      error.value = err.message
    }
  }

  return { post, error, load }
}

export default getPost
