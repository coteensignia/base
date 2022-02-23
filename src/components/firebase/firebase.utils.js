import firebase from 'firebase/app'; //importando desde nuestra libreria
import 'firebase/firestore'; //paquete apuntar a contextos de nuestro proyecto, monitorear y capturar procesos, funciones que apuntan a procesos
import 'firebase/auth'; //autentificacion provedores de autentificacion por los sign
// si hay actuqlizacion de paquetes cambiar esto con comp

//SDK config(configurar los crenciales sdk que proveee firebase)


const config = {

    apiKey: "AIzaSyAxIA3kndabSAacxj31XacDNuWKwZJsoNM",
    authDomain: "primero-react.firebaseapp.com",
    projectId: "primero-react",
    storageBucket: "primero-react.appspot.com",
    messagingSenderId: "283640413985",
    appId: "1:283640413985:web:68fd635bf587fc58678860"
};

// Initialize Firebase
firebase.initializeApp(config);

//funciones utilitarias para poderusarla en otro lugar exportable
//nuevos perfiles de procesos de usuarios cuando veamos nuestra autentoificacion, crear un perfil de usuario con funsion flecha y esperar respuesta del servidor por una consulta y esperamos capturar la refeferencia


export const createUserProfileDocument = async() => {

    ;
}


//export para poder verificar y expoertar y trabajanar con las funcuonbes

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// proveedor de google para selecciona rmi correo en login


//parametro de ese proveedor de google