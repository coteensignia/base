//estas tres importaciones siempre se usany estan enla decumentacion
//import firebase from 'firebase/compat/app'; v9
import firebase from "firebase/app";
//import 'firebase/compat/firestore'; v9
import "firebase/firestore";
// import 'firebase/compat/auth'; v9
import "firebase/auth";



// SDK config (SACAR DE MI PROYECTYO) configuraciones globales de is credenciales

const config = {
    apiKey: "AIzaSyAxIA3kndabSAacxj31XacDNuWKwZJsoNM",
    authDomain: "primero-react.firebaseapp.com",
    projectId: "primero-react",
    storageBucket: "primero-react.appspot.com",
    messagingSenderId: "283640413985",
    appId: "1:283640413985:web:68fd635bf587fc58678860"
};

firebase.initializeApp(config);

// create profile document
export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`); // reference doc to specified path

    const snapShot = await userRef.get(); // object

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }

    return userRef;
};

// exports para derivar cosas a otros lados basicamente autentificacion de usuario con google
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider(); //siguiero con otro g¡proveedor como facebook debo agregalo asi
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;