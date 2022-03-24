import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBZ7LgWyiDH2Vr9QIPXBWgtXVp5soP7scA",
  authDomain: "portfolio-6e46d.firebaseapp.com",
  projectId: "portfolio-6e46d",
  storageBucket: "portfolio-6e46d.appspot.com",
  messagingSenderId: "406288325998",
  appId: "1:406288325998:web:1c63e5cbe7a9ffc83e757f",
  measurementId: "G-M13FMSNY9H",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export default db;
