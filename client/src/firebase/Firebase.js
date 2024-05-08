// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPYLQc3t_BRyTYEeg_Qn6gTn25Jy3r4pU",
  authDomain: "interarea-b56f7.firebaseapp.com",
  projectId: "interarea-b56f7",
  storageBucket: "interarea-b56f7.appspot.com",
  messagingSenderId: "419585912038",
  appId: "1:419585912038:web:cd68ba015dd0a4941a5f27",
  measurementId: "G-7280MZ271Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider= new GoogleAuthProvider();
export {auth,provider}