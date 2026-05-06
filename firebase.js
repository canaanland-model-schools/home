// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBd8lD74UrOJq04gFhJ7qaNkotum71h3oA",
  authDomain: "cbt-portal-91603.firebaseapp.com",
  projectId: "cbt-portal-91603",
  storageBucket: "cbt-portal-91603.firebasestorage.app",
  messagingSenderId: "24544791528",
  appId: "1:24544791528:web:81fab34ba84a011516325d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);