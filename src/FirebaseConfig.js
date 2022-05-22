// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArPw4vSTC3gtCOvHxKI19v6zWWKDN01vc",
  authDomain: "social-app-77bed.firebaseapp.com",
  projectId: "social-app-77bed",
  storageBucket: "social-app-77bed.appspot.com",
  messagingSenderId: "82074481259",
  appId: "1:82074481259:web:d6d07bd9c3cdc7f887772e",
  measurementId: "G-C4G0FNDE7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);

export {app, fireDb}