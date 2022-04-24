// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqdKliFiYxIeWBz0dByeqkYIUjAAenIwc",
  authDomain: "khodacount.firebaseapp.com",
  projectId: "khodacount",
  storageBucket: "khodacount.appspot.com",
  messagingSenderId: "835005006505",
  appId: "1:835005006505:web:a4e491bfa6178300a19fb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;