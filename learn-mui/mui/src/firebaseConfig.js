import { getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyA5A3A0Oi0m99jAQAjQKpqHQ7dVF3_7N-Q",
  authDomain: "learn-mui-649bf.firebaseapp.com",
  projectId: "learn-mui-649bf",
  storageBucket: "learn-mui-649bf.firebasestorage.app",
  messagingSenderId: "38634776961",
  appId: "1:38634776961:web:10613d52e3f71b32c02080",
  databaseURL:"https://learn-mui-649bf-default-rtdb.firebaseio.com",
};
const app = initializeApp(firebaseConfig);
export const dbFirebase=getDatabase(app);
export const authFirebase = getAuth(app);
