// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCKNEGvXyc64KL1it3RsvEtbFA1osMyVZ8",
  authDomain: "clone-4235b.firebaseapp.com",
  databaseURL: "https://clone-4235b.firebaseio.com",
  projectId: "clone-4235b",
  storageBucket: "clone-4235b.appspot.com",
  messagingSenderId: "878629220784",
  appId: "1:878629220784:web:8695eed2d1da42b9e1a675",
  measurementId: "G-JPTZV0NEXD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
