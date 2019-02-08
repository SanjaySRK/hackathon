import firebase from 'firebse/app'
import 'firebase/firestore'
import 'firebase/auth'


// Initialize Firebase
var config = {
    apiKey: "AIzaSyBH-yTxJqUInYKrPzO6xSkdycpS7RhZqi4",
    authDomain: "firstfirebase1-7587c.firebaseapp.com",
    databaseURL: "https://firstfirebase1-7587c.firebaseio.com",
    projectId: "firstfirebase1-7587c",
    storageBucket: "firstfirebase1-7587c.appspot.com",
    messagingSenderId: "74145856354"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;