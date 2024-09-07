// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPorqBt-SZvpPQzUp7Nlny5ZzYjAErYjY",
  authDomain: "fuzzycloud-website.firebaseapp.com",
  projectId: "fuzzycloud-website",
  storageBucket: "fuzzycloud-website.appspot.com",
  messagingSenderId: "988563936902",
  appId: "1:988563936902:web:99b901c09118f7af0ca307",
  measurementId: "G-6RDSFVBGYB"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth }

