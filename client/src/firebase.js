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
  apiKey: "AIzaSyCenEUCyTGFGT-ztDIs26Xb5lgfvFQG4Vg",
  authDomain: "castor-bc6d8.firebaseapp.com",
  projectId: "castor-bc6d8",
  storageBucket: "castor-bc6d8.firebasestorage.app",
  messagingSenderId: "521672647670",
  appId: "1:521672647670:web:2868c998793f821bccddd7",
  measurementId: "G-0VZQJM49Z0"
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
