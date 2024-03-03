import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCLWk-y9ThYyXokOFFfnIvG88wrjJ4jLBc",
    authDomain: "fasco-login-validation.firebaseapp.com",
    projectId: "fasco-login-validation",
    storageBucket: "fasco-login-validation.appspot.com",
    messagingSenderId: "677681592404",
    appId: "1:677681592404:web:8f438a59ac893c7f06d5c1"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  export {app,auth};