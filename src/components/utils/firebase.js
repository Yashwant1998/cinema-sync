import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADdpxUSSkyq_9KqBipZerY8iwRjhUiVCM",
  authDomain: "moviemate-d2644.firebaseapp.com",
  projectId: "moviemate-d2644",
  storageBucket: "moviemate-d2644.appspot.com",
  messagingSenderId: "801771513270",
  appId: "1:801771513270:web:f268cb2b790d117ca9cd17",
  measurementId: "G-BWPSYZHZBL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
