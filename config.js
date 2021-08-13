import firebase from "firebase";
require("@firebase/firestore");

 var firebaseConfig = {
    apiKey: "AIzaSyBGhDzvGtytybQ9A2blsTcX3Gd7qKNka0Y",
    authDomain: "helpline-app-fe957.firebaseapp.com",
    projectId: "helpline-app-fe957",
    storageBucket: "helpline-app-fe957.appspot.com",
    messagingSenderId: "492217969374",
    appId: "1:492217969374:web:efd77f394b8aec6844b04f"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();