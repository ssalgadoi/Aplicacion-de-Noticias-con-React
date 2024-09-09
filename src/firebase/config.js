// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"

 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsus_I5f8-d4SNL77qd3Uys90g-RbIiuQ",
  authDomain: "react-cursos-84878.firebaseapp.com",
  projectId: "react-cursos-84878",
  storageBucket: "react-cursos-84878.appspot.com",
  messagingSenderId: "1070236652445",
  appId: "1:1070236652445:web:1c3aedde4d86b0c6a49574"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );

export const FirebaseAuth = getAuth( FirebaseApp );

export const FirebaseDB = getFirestore( FirebaseApp );