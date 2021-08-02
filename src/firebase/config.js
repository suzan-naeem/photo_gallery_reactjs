import * as firebase from 'firebase/app';      //npm install firebase
import 'firebase/storage';                     //for images
import 'firebase/firestore';                    //for db

var firebaseConfig = {
  apiKey: "AIzaSyDIwCAcS2QSXBkaIjFPLuj1GMNaP-83_qU",
  authDomain: "photo-gallery-c003a.firebaseapp.com",
  projectId: "photo-gallery-c003a",
  storageBucket: "photo-gallery-c003a.appspot.com",
  messagingSenderId: "105037670198",
  appId: "1:105037670198:web:7d3cc62c6d9b13e16a3597"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };