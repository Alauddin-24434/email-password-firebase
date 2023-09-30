// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3D6TkBRGUspG_tAjymoUyjl6q_R-98mM",
    authDomain: "email-password-firebase-b1d1e.firebaseapp.com",
    projectId: "email-password-firebase-b1d1e",
    storageBucket: "email-password-firebase-b1d1e.appspot.com",
    messagingSenderId: "130063078703",
    appId: "1:130063078703:web:90991d9209c5d06d2a3dda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
