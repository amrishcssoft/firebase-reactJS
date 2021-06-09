import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDme2hBtlrdHMINa82Q6vkUtwJl7Me2OVM",
    authDomain: "myapp-29c84.firebaseapp.com",
    projectId: "myapp-29c84",
    storageBucket: "myapp-29c84.appspot.com",
    messagingSenderId: "204034025431",
    appId: "1:204034025431:web:f54597c6b0b68d4a08cd92",
    measurementId: "G-6WEJN8J5G3"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.auth();
  export {firebaseConfig}
