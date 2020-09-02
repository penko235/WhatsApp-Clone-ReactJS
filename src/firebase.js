import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCCD9G7u88kFis12ZuquBIsD9-Ey6GCwfo",
  authDomain: "whatsapp-clone-27daa.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-27daa.firebaseio.com",
  projectId: "whatsapp-clone-27daa",
  storageBucket: "whatsapp-clone-27daa.appspot.com",
  messagingSenderId: "999323101569",
  appId: "1:999323101569:web:f221846a97360fcee1a080",
  measurementId: "G-HDR7F3WJHR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;