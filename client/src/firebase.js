// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-8b8b3.firebaseapp.com",
  projectId: "mern-estate-8b8b3",
  storageBucket: "mern-estate-8b8b3.appspot.com",
  messagingSenderId: "243418225965",
  appId: "1:243418225965:web:bb63202a8d0358eb3a87a4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);