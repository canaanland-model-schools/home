// auth.js
import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

import {
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

// REGISTER
export async function registerUser(username, email, password) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);

  await updateProfile(userCredential.user, {
    displayName: username
  });

  await setDoc(doc(db, "users", userCredential.user.uid), {
    username: username,
    email: email,
    paid: true,
    image: "default.jpg"
  });
}

// LOGIN
export async function loginUser(email, password) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);

  const user = userCredential.user;

  const docRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) throw new Error("User data missing");

  const data = docSnap.data();

  if (!data.paid) {
    window.location.href = "pages/Debtors.html";
    return;
  }

  // Save session
  sessionStorage.setItem("username", data.username);
  sessionStorage.setItem("image", "img/" + data.image);

  window.location.href = "pages/final_instructions.html";
}