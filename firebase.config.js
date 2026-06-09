// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMvZPZhd9iiMRWQAK10pR2lNqwMcm0_Vo",
  authDomain: "sitioventasyopal.firebaseapp.com",
  projectId: "sitioventasyopal",
  storageBucket: "sitioventasyopal.firebasestorage.app",
  messagingSenderId: "656670689924",
  appId: "1:656670689924:web:b8675e450b4046d9c310d1",
  measurementId: "G-MBH4LLX13H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;