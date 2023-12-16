// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA9rnCDn3EyUgZ0J5RnxaX-Y-MxYceIL8",
  authDomain: "netflixgpt-33df5.firebaseapp.com",
  projectId: "netflixgpt-33df5",
  storageBucket: "netflixgpt-33df5.appspot.com",
  messagingSenderId: "987855124019",
  appId: "1:987855124019:web:b26edf2543a4c8666c9546",
  measurementId: "G-15PXGZRTPK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
