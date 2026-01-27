import { initializeApp } from "firebase/app";
import {
  getAuth,
  updateProfile,
  updateEmail,
  updatePassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCenEUCyTGFGT-ztDIs26Xb5lgfvFQG4Vg",
  authDomain: "castor-bc6d8.firebaseapp.com",
  projectId: "castor-bc6d8",
  storageBucket: "castor-bc6d8.firebasestorage.app",
  messagingSenderId: "521672647670",
  appId: "1:521672647670:web:2868c998793f821bccddd7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// ✅ Profile helpers
export const updateUserProfile = (name, photoURL) =>
  updateProfile(auth.currentUser, { displayName: name, photoURL });

export const updateUserEmail = (email) => updateEmail(auth.currentUser, email);
export const updateUserPassword = (password) =>
  updatePassword(auth.currentUser, password);
