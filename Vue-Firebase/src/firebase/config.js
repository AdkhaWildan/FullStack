import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBuq1Qj35GQSxr8HmS1B4g1JPqTFU58GVU',
  authDomain: 'vue-firebase-oct25.firebaseapp.com',
  projectId: 'vue-firebase-oct25',
  storageBucket: 'vue-firebase-oct25.firebasestorage.app',
  messagingSenderId: '1048343530333',
  appId: '1:1048343530333:web:192dc91db5d197fb9a76b4',
}

const app = initializeApp(firebaseConfig)

const projectFirestore = getFirestore(app)

export { projectFirestore }
