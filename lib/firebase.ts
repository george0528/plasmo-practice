// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTtHhEK6lE6fGMjdmn5j5MiKpUKn3Vhmk",
  authDomain: "powerful-genre-360112.firebaseapp.com",
  projectId: "powerful-genre-360112",
  storageBucket: "powerful-genre-360112.appspot.com",
  messagingSenderId: "1055994533898",
  appId: "1:1055994533898:web:1b1fc01c7d913ab1ffa7f3",
  measurementId: "G-1C4F0L7JBN"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const storage = getStorage();

export default app
