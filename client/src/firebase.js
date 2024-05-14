// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogapp-18786.firebaseapp.com",
  projectId: "blogapp-18786",
  storageBucket: "blogapp-18786.appspot.com",
  messagingSenderId: "1013569299230",
  appId: "1:1013569299230:web:87106049c65c6b52279f0f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);