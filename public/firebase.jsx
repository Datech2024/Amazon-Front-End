// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// auth
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDwbcLIafTjoz8E6cnt7_glr-yBS6sDjkY",
	authDomain: "clone-a98dd.firebaseapp.com",
	projectId: "clone-a98dd",
	storageBucket: "clone-a98dd.firebasestorage.app",
	messagingSenderId: "124038098746",
	appId: "1:124038098746:web:fe5c0a160fabeda6f42a03",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()
