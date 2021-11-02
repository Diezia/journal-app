// import {firebase} from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzLpIq-sqqVbiSqjDH9BNRTNPMEi0TIPc",
  authDomain: "journal-app-6eff7.firebaseapp.com",
  projectId: "journal-app-6eff7",
  storageBucket: "journal-app-6eff7.appspot.com",
  messagingSenderId: "482383190518",
  appId: "1:482383190518:web:a6126c7f2cd11256414fd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const db = firebase.firestore();
const googleAuthProvider = new GoogleAuthProvider();

export {
    // db,
    googleAuthProvider,
    // firebase
}