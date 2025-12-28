import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8wb_fzwl7w9RKOMBSdn3FhgtwoiQGipU",
  authDomain: "e-commerce-coderhouse-123.firebaseapp.com",
  projectId: "e-commerce-coderhouse-123",
  storageBucket: "e-commerce-coderhouse-123.firebasestorage.app",
  messagingSenderId: "44251898808",
  appId: "1:44251898808:web:a70d160761d2b7a904e54d",
  measurementId: "G-5VXX7KJC01",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
