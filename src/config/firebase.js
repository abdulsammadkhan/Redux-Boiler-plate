import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyAYsPsUiIpArBLJyGYAJBxeb3uI-1r7G_k",
    authDomain: "react-chatapp-d7e59.firebaseapp.com",
    databaseURL: "https://react-chatapp-d7e59.firebaseio.com",
    projectId: "react-chatapp-d7e59",
    storageBucket: "react-chatapp-d7e59.appspot.com",
    messagingSenderId: "462265055873",
    appId: "1:462265055873:web:6b956e25cd4f65f74feb80",
    measurementId: "G-TK320L0C0G"
  };
  
  firebase.initializeApp(firebaseConfig);
  
 export default firebase;
  