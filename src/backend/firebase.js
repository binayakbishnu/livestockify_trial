// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAx-tjEdRNWh4t0FWk-ui-dXQ1zdwepjZY",
    authDomain: "kuppismart.firebaseapp.com",
    projectId: "kuppismart",
    storageBucket: "kuppismart.appspot.com",
    messagingSenderId: "684830455815",
    appId: "1:684830455815:web:1ad73f8f5361f8398192a2",
    measurementId: "G-7KC8B94PR4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export default app;
