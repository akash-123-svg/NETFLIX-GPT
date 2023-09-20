// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDInNkwc1tiO1MA8ECNikydezmD4mIJ8t0",
  authDomain: "netflixgpt-ae2a0.firebaseapp.com",
  projectId: "netflixgpt-ae2a0",
  storageBucket: "netflixgpt-ae2a0.appspot.com",
  messagingSenderId: "601625881859",
  appId: "1:601625881859:web:bcf90c73d32c017525cd36",
  measurementId: "G-PDWMG3M1L7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();