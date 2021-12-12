// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_lny-ayh0fnFCff-fG2TQ74C-d2kHq-I",
    authDomain: "disney-plus-clone-8361e.firebaseapp.com",
    projectId: "disney-plus-clone-8361e",
    storageBucket: "disney-plus-clone-8361e.appspot.com",
    messagingSenderId: "532433329260",
    appId: "1:532433329260:web:1a2ed899743cb292ba0c49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth }