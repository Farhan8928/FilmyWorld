// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGXAvHsouDJocxLLUhL7_LvX_uOw-CrGc",
  authDomain: "filmyverse-81731.firebaseapp.com",
  projectId: "filmyverse-81731",
  storageBucket: "filmyverse-81731.appspot.com",
  messagingSenderId: "723302545400",
  appId: "1:723302545400:web:9abca3e0b1107e20b0480d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;