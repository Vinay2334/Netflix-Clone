// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDnaiR0xt7NE2mgkLvkCdtjdXjZGARvO5M",
    authDomain: "video-platform-ed1fa.firebaseapp.com",
    projectId: "video-platform-ed1fa",
    storageBucket: "video-platform-ed1fa.appspot.com",
    messagingSenderId: "684760963285",
    appId: "1:684760963285:web:f1646baf9bca7d9c19ea5c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore();
  const auth = firebase.auth();

  export {auth}
  export default db