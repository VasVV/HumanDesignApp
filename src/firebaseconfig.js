import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyA0r8waGiqyRC0kuFLJTcy3M0F01gXY6pU",
    authDomain: "humandesign-b34fc.firebaseapp.com",
    projectId: "humandesign-b34fc",
    storageBucket: "humandesign-b34fc.appspot.com",
    messagingSenderId: "94819917374",
    appId: "1:94819917374:web:696ef5dd8526ca4a3ffb6f",
    measurementId: "G-8F5PBE6TBL",
    databaseURL: "https://humandesign-b34fc-default-rtdb.firebaseio.com/",
  });

export default firebaseConfig;
