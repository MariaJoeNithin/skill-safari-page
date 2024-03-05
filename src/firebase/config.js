import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB8rb97UD6S3tlmLlvRjukgZb2c7A32YF4",
  authDomain: "skillsafari-5d005.firebaseapp.com",
  projectId: "skillsafari-5d005",
  storageBucket: "skillsafari-5d005.appspot.com",
  messagingSenderId: "1041630322868",
  appId: "1:1041630322868:web:f358ebc76d1600d78df7e1",
};

export const app = initializeApp(firebaseConfig);
export const STORAGE = getFirestore(app);
export const DOCUMENTS = getStorage(app); 
