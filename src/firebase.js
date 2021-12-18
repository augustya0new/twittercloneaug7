import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDmAlz15TL-oBm7Fz59yxoKTf7MXCL3N6g",
    authDomain: "twitter-clone-f6a3d.firebaseapp.com",
    databaseURL: "https://twitter-clone-f6a3d.firebaseio.com",
    projectId: "twitter-clone-f6a3d",
    storageBucket: "twitter-clone-f6a3d.appspot.com",
    messagingSenderId: "712851304906",
    appId: "1:712851304906:web:7105ea4de62e18fbeddf33",
    measurementId: "G-K1R6GN2DDM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
  
export default db;
  