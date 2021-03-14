import firebase from "firebase/app";
export const config = {
  // DO NOT USE THESE CREDENTIALS ! THEY ARE HERE TO HELP IN THE LEARNING PROCESS.
  // ANY AND ALL DATA ON THAT DOMAIN IS SUBJECT TO CHANGE AND REMOVAL AT ANY TIME
  // THIS ACCOUNT IS ALSO ON THE FREE PLAN AND IS SUBJECT TO RESTRICTIONS !
  apiKey: "AIzaSyAxmi8Yma535ZPPnB3KTGsQaLwHvrw7QKw",
  authDomain: "my-app-a0261.firebaseapp.com",
  projectId: "my-app-a0261",
  storageBucket: "my-app-a0261.appspot.com",
  messagingSenderId: "395899036357",
  appId: "1:395899036357:web:81adaaa3fdd7945fbec6ac",
  measurementId: "G-TWWZH91Z0F"
};

firebase.initializeApp(config);

export const database = firebase.database();
