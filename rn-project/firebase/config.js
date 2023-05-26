import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBF8x8PhW3ggtmpo31WU8O07GvWMq4Pl2E",
  authDomain: "rn-project-29a6e.firebaseapp.com",
  projectId: "rn-project-29a6e",
  storageBucket: "rn-project-29a6e.appspot.com",
  messagingSenderId: "100688531676",
  appId: "1:100688531676:web:ac95a40036ded91dcfa419",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
export const storage = getStorage();
export const db = getFirestore(app);
