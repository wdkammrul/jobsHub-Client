// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFcpFqpS2pZr8cY801l_fu-_RvxIkyx_U",
  authDomain: "jobshub-1fbad.firebaseapp.com",
  projectId: "jobshub-1fbad",
  storageBucket: "jobshub-1fbad.appspot.com",
  messagingSenderId: "223431504889",
  appId: "1:223431504889:web:e8f3295b3554944e864328",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
