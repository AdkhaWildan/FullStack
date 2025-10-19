import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'
import { collection, getDocs } from 'firebase/firestore'

const getPosts = () => {
  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const colRef = collection(projectFirestore, 'posts')
      const res = await getDocs(colRef)
      posts.value = res.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        }
      })
      // let data = await fetch('http://localhost:3000/posts/')
      // if (!data.ok) {
      //   throw Error('Tidak ada data')
      // }
      // posts.value = await data.json()
    } catch (err) {
      error.value = err.message
    }
  }

  return { posts, error, load }
}

export default getPosts
