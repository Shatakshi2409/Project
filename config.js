import firebase from './screens/node_modules/firebase';
require('@firebase/firestore')

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDUWd8fvNk1txte5EQueXcRz0TimhXGeTY",
    authDomain: "social-work-82915.firebaseapp.com",
    projectId: "social-work-82915",
    storageBucket: "social-work-82915.appspot.com",
    messagingSenderId: "35396236987",
    appId: "1:35396236987:web:9360d2f46eb76d889b9b9e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
