// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APP,
  authDomain: "career-firebase-app-dda29.firebaseapp.com",
  projectId: "career-firebase-app-dda29",
  storageBucket: "career-firebase-app-dda29.appspot.com",
  messagingSenderId: "965922184387",
  appId: "1:965922184387:web:ba9c81aff11369ecd7d676",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
