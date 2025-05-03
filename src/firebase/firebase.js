import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDB8xH8eWA1_q_iFWQ5MvN079390j4B6OA",
  authDomain: "pucprlogin.firebaseapp.com",
  projectId: "pucprlogin",
  storageBucket: "pucprlogin.firebasestorage.app",
  messagingSenderId: "260422209886",
  appId: "1:260422209886:web:50de7bc7a53022e153ffcf",
  measurementId: "G-3X4F3QHXTG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export authentication and Firestore services
export const auth = getAuth(app);
export const db = getFirestore(app);
