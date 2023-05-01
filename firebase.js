// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqH_40Ne3FiCwMaVwMqQ1HHRSngFaCYdQ",
  authDomain: "scrimba-react-notes.firebaseapp.com",
  projectId: "scrimba-react-notes",
  storageBucket: "scrimba-react-notes.appspot.com",
  messagingSenderId: "324844520141",
  appId: "1:324844520141:web:8b89299349ac182bad5f84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")