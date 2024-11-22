// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJiyvjBJMpNvwikZXMigXur7IVJlArylM",
  authDomain: "trasify-26830.firebaseapp.com",
  projectId: "trasify-26830",
  storageBucket: "trasify-26830.firebasestorage.app",
  messagingSenderId: "901103791718",
  appId: "1:901103791718:web:e155ea8e9f70db79ca47a7",
  measurementId: "G-THRV68P6TE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = getAuth(app);