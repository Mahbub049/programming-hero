// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFklCddjiHqwVmuI2QRfE1XX5Xwod7rZs",
  authDomain: "module-50-bc33e.firebaseapp.com",
  projectId: "module-50-bc33e",
  storageBucket: "module-50-bc33e.appspot.com",
  messagingSenderId: "195043667039",
  appId: "1:195043667039:web:91c3a3fd49a0de68f3ffea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;