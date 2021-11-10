import 'firebase/firestore';
import 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDeE_905HbLiEPhyQb0i7wbLWWf6_gam2c",
  authDomain: "react-apps-curso-1f2cd.firebaseapp.com",
  projectId: "react-apps-curso-1f2cd",
  storageBucket: "react-apps-curso-1f2cd.appspot.com",
  messagingSenderId: "316857468224",
  appId: "1:316857468224:web:482bff4441eb6fbe9666a5"
};

initializeApp( firebaseConfig );

const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
}
