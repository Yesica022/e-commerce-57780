import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYSsp4XFM0gQhPpldtE5U4aoZ6ClJG8mw",
  authDomain: "serendipia-ae078.firebaseapp.com",
  projectId: "serendipia-ae078",
  storageBucket: "serendipia-ae078.appspot.com",
  messagingSenderId: "483522937961",
  appId: "1:483522937961:web:b8c463901caf506b7fcef8"
};

// Initialize Firebase
initializeApp(firebaseConfig); 

const db = getFirestore();

export default db;