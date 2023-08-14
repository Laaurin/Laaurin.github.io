// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyBluwo4o8Ib_NR90uQULu-J1Yq3LuAN8",
  authDomain: "vismoottrainingquestions.firebaseapp.com",
  projectId: "vismoottrainingquestions",
  storageBucket: "vismoottrainingquestions.appspot.com",
  messagingSenderId: "433861093276",
  appId: "1:433861093276:web:ed946a20b96e7f00788a59",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export default db;

export const auth = getAuth();
