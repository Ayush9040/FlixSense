// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwqg6Uj457X88QCAFRkB0nCXMDPDCl5EA",
  authDomain: "flixsense-2546d.firebaseapp.com",
  projectId: "flixsense-2546d",
  storageBucket: "flixsense-2546d.appspot.com",
  messagingSenderId: "625751908729",
  appId: "1:625751908729:web:52473d6f86879390a78fa8",
  measurementId: "G-0HTHYKR62B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();