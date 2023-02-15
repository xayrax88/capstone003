import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDM4w_TDAOd9X4m-HsvdPyigLYOlIZ_870",
  authDomain: "memoria-8bc4b.firebaseapp.com",
  projectId: "memoria-8bc4b",
  storageBucket: "memoria-8bc4b.appspot.com",
  messagingSenderId: "712038023193",
  appId: "1:712038023193:web:447aa045e42843ad11aa88"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();


const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
};