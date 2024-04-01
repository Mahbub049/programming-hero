// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwzCcOtFErQJn1AiqiWVBbJTTCPAEKqZA",
  authDomain: "user-email-pass-b1c32.firebaseapp.com",
  projectId: "user-email-pass-b1c32",
  storageBucket: "user-email-pass-b1c32.appspot.com",
  messagingSenderId: "433399958425",
  appId: "1:433399958425:web:b00085eb5187e1e1c0e108"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;