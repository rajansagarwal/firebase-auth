// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: PROCESS.ENV.API_KEY,
  authDomain: PROCESS.ENV.authDomain,
  projectId: PROCESS.ENV.projectId,
  storageBucket: PROCESS.ENV.storageBucket,
  messagingSenderId: PROCESS.ENV.messagingSenderId,
  appId: PROCESS.ENV.appId,
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