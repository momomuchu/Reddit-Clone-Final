import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdE8do0KIpCeGlK3jLJr6VfblNUvFeBmo",
  authDomain: "reddit-clone-94704.firebaseapp.com",
  projectId: "reddit-clone-94704",
  storageBucket: "reddit-clone-94704.appspot.com",
  messagingSenderId: "945291152265",
  appId: "1:945291152265:web:d3349c5dad018b4ab7af58"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };