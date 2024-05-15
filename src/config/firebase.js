import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJnOtR9bix29w8uzsi6RzDA-qg0lC0oi8",
  authDomain: "applogin-b4110.firebaseapp.com",
  projectId: "applogin-b4110",
  storageBucket: "applogin-b4110.appspot.com",
  messagingSenderId: "298175948737",
  appId: "1:298175948737:web:c94fe8d5272d6ab3cfb140",
  measurementId: "G-EHPCK762XP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

