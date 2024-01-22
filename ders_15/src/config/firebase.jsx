import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics"
import {getAuth,createUserWithEmailAndPassword,updateCurrentUser,signInWithEmailAndPassword} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyDHHdVRCGOJGBE1CVaN7GMDw-x3pVGXU4s",
    authDomain: "react-firebase-to-do-list.firebaseapp.com",
    projectId: "react-firebase-to-do-list",
    storageBucket: "react-firebase-to-do-list.appspot.com",
    messagingSenderId: "819568987015",
    appId: "1:819568987015:web:824cb32bf628e9609e6122",
    measurementId: "G-2DX3ZVXZCT"
  };

 const initApp= initializeApp(firebaseConfig);
  getAnalytics(initApp);
 export const auth = getAuth(initApp); 

  export const signIn = async function(email,passw){
    await signInWithEmailAndPassword(auth,email,passw);
  };

  export const signUp = async function(name,email,passw){
    await createUserWithEmailAndPassword(auth,email,passw);
    await updateCurrentUser(auth,{displayName:name});
    //PROMISE DONDURECEGI ICIN MI 'AWAIT' EKLEDIK ? 
  }