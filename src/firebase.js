// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUeDFk0c7RrnCd2dPDXUU5Z-nJNFffWcI",
  authDomain: "color-palette-1a349.firebaseapp.com",
  databaseURL: "https://color-palette-1a349-default-rtdb.firebaseio.com",
  projectId: "color-palette-1a349",
  storageBucket: "color-palette-1a349.appspot.com",
  messagingSenderId: "293539648903",
  appId: "1:293539648903:web:30bba5ba4edf6bae832f22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore()