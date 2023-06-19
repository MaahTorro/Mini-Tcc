import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDcxnwkXkX9Suzkbb4Z4sBWkuDzpB8sos4",
  authDomain: "sua-gestao.firebaseapp.com",
  projectId: "sua-gestao",
  storageBucket: "sua-gestao.appspot.com",
  messagingSenderId: "786860237799",
  appId: "1:786860237799:web:c704d2aa054597027f9342",
  measurementId: "G-L62JVPSSXP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
