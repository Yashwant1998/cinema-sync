// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3yKRpC87XQXTxixChspR5uUCewtvUQNM",
  authDomain: "netflixgpt-bce0e.firebaseapp.com",
  projectId: "netflixgpt-bce0e",
  storageBucket: "netflixgpt-bce0e.appspot.com",
  messagingSenderId: "54518826474",
  appId: "1:54518826474:web:28ba21d607df55b45f5e93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
