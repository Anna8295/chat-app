import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

export const auth = firebase.initializeApp({
  apiKey: '...',
  authDomain: '...',
  projectId: '...',
  storageBucket: '...',
  messagingSenderId: '...',
  appId: '...'
}).auth();
