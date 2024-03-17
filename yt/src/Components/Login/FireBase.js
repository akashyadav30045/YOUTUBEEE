// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMx4zJ1mF0wUPDYoy0LA8glju9vh7_wDE",
  authDomain: "fir-bcaf2.firebaseapp.com",
  projectId: "fir-bcaf2",
  storageBucket: "fir-bcaf2.appspot.com",
  messagingSenderId: "646024075470",
  appId: "1:646024075470:web:3ad55f4537ab475ecf589f",
  measurementId: "G-1N5J12W7DX"
};

// Initialize 
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();