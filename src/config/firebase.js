// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHJo3W-s6-T3QcA-Iqc5OGfApF6vFaH5I",
  authDomain: "restaurantudd-29560.firebaseapp.com",
  projectId: "restaurantudd-29560",
  storageBucket: "restaurantudd-29560.appspot.com",
  messagingSenderId: "109363906561",
  appId: "1:109363906561:web:f0a477446b95795b151800"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Servicios que estoy ocupando

export const db = getFirestore(app)