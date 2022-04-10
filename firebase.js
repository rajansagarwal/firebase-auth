// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfdmozXvYePINRU5w7Mq-e1e1lm2kIAZs",
  authDomain: "fir-rn-4af31.firebaseapp.com",
  projectId: "fir-rn-4af31",
  storageBucket: "fir-rn-4af31.appspot.com",
  messagingSenderId: "457742255849",
  appId: "1:457742255849:web:2f192e718f5fdabf1f9278"
};

// Initialize Firebase
let app;

if (firebase.getApps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };