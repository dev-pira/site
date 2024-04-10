import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATGvx8UZfpFwMGY8jrUHf4zrcKjfIOTsc",
  authDomain: "mbc-hello-next.firebaseapp.com",
  projectId: "mbc-hello-next",
  storageBucket: "mbc-hello-next.appspot.com",
  messagingSenderId: "1074102537483",
  appId: "1:1074102537483:web:ee6ba2f36ddc31ec1ae60e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
