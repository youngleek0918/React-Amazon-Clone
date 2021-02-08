import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBAWc7xSXRNKs2iNOjrOIEacQsBJOI7Kok",
    authDomain: "clone-react-18427.firebaseapp.com",
    projectId: "clone-react-18427",
    storageBucket: "clone-react-18427.appspot.com",
    messagingSenderId: "199768854517",
    appId: "1:199768854517:web:bdf0f76195d4b49e701abc",
    measurementId: "G-G0J7RZTWEL"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };