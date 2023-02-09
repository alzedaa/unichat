import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCAOOdZs7SZQ6vIJparaG_5JDNS9hUYhbY",
    authDomain: "unichat-68bd7.firebaseapp.com",
    projectId: "unichat-68bd7",
    storageBucket: "unichat-68bd7.appspot.com",
    messagingSenderId: "1066137005045",
    appId: "1:1066137005045:web:396f1c78fc04a661bb4ebc",
  })
  .auth();
