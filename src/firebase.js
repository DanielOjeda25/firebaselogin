import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAyEDnqnrLO3g7aVjO7zjsK1F0BOxZmvmQ",
  authDomain: "bamana-7a80e.firebaseapp.com",
  projectId: "bamana-7a80e",
  storageBucket: "bamana-7a80e.appspot.com",
  messagingSenderId: "443638762415",
  appId: "1:443638762415:web:6fe908ac69988412887d5a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)