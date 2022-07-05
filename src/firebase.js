import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCH1sBEApvmHHIERIZeGW2__s1is70X84s",
  authDomain: "fir-notification-7e029.firebaseapp.com",
  projectId: "fir-notification-7e029",
  storageBucket: "fir-notification-7e029.appspot.com",
  messagingSenderId: "867686327632",
  appId: "1:867686327632:web:dbc2e7bff9b8282ae1f855"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;