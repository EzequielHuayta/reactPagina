
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA5rFSCDCbOBjgqNKFMkKgGbtqLc60pRIQ",
  authDomain: "react-ezequiel-huayta.firebaseapp.com",
  projectId: "react-ezequiel-huayta",
  storageBucket: "react-ezequiel-huayta.appspot.com",
  messagingSenderId: "390486482755",
  appId: "1:390486482755:web:3dc4c0afb341ace0ad99f6",
  measurementId: "G-72NBERTCKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);