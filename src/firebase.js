// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl8ss0DhiYbNtEs0PSITrL9Wk5ENhNaM0",
  authDomain: "regions-website.firebaseapp.com",
  projectId: "regions-website",
  storageBucket: "regions-website.appspot.com",
  messagingSenderId: "664135241836",
  appId: "1:664135241836:web:447959dd848ab6ede20849",
  measurementId: "G-XZPRTKFVNX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);