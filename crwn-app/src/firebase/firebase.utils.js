import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBxDoTHoU_UoxKsRdSCdaZqwtslOYrEvyo",
  authDomain: "e-commerce-website-db-69a8e.firebaseapp.com",
  databaseURL: "https://e-commerce-website-db-69a8e.firebaseio.com",
  projectId: "e-commerce-website-db-69a8e",
  storageBucket: "e-commerce-website-db-69a8e.appspot.com",
  messagingSenderId: "593988841191",
  appId: "1:593988841191:web:268d55fd5195e0c855bc42",
  measurementId: "G-H0DT2M8RR1",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
