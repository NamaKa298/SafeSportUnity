// This file is used to initialize the Firebase SDK and connect to the Firebase project.
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE8rHxz6aACrNBgtcbGk39tRm_YagBdIk",
  authDomain: "safesportunity-5bfeb.firebaseapp.com",
  projectId: "safesportunity-5bfeb",
  storageBucket: "safesportunity-5bfeb.appspot.com",
  messagingSenderId: "135958327711",
  appId: "1:135958327711:web:6d48c37f06e2a87a970daa"
};

// Initialize Firebase
/* eslint-disable @typescript-eslint/no-unused-vars */
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const firestore = Firestore;
