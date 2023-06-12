import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBP-dOHuZQx6D5_fqFv9vZgs9Z6Dg6FY1I",
  authDomain: "react-blog-5ff48.firebaseapp.com",
  projectId: "react-blog-5ff48",
  storageBucket: "react-blog-5ff48.appspot.com",
  messagingSenderId: "239058538435",
  appId: "1:239058538435:web:202c28c40112a3b0ba7776"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
