// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARpHZExbHTFukpuiBOUldwxqyHCjJi3XU",
  authDomain: "ticket-sale-application-3ae4b.firebaseapp.com",
  projectId: "ticket-sale-application-3ae4b",
  storageBucket: "ticket-sale-application-3ae4b.appspot.com",
  messagingSenderId: "135658550770",
  appId: "1:135658550770:web:1bfd5f26c7faea3e0ce76b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
