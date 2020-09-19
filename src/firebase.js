import firebase, { functions } from "firebase";

//from app/settings/general/bottom
const firebaseConfig = {
    apiKey: "AIzaSyDKZRsVkLq64FqMRshtBWEC3mb3u79NHLA",
    authDomain: "facebook-clone-3efae.firebaseapp.com",
    databaseURL: "https://facebook-clone-3efae.firebaseio.com",
    projectId: "facebook-clone-3efae",
    storageBucket: "facebook-clone-3efae.appspot.com",
    messagingSenderId: "291170122197",
    appId: "1:291170122197:web:7ed374247671784e23255c"
  };

//initialize firebase  
const firebaseApp = firebase.initializeApp(firebaseConfig);
//conect to database
const db = firebaseApp.firestore();
//set authentication
const auth = firebase.auth();
//Google auth
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
