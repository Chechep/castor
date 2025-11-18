import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const loginUser = (email, pass) =>
  signInWithEmailAndPassword(auth, email, pass);

export const signupUser = (email, pass) =>
  createUserWithEmailAndPassword(auth, email, pass);

export const googleLogin = () =>
  signInWithPopup(auth, googleProvider);

export const resetPassword = (email) =>
  sendPasswordResetEmail(auth, email);

export const logoutUser = () => signOut(auth);
