import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBmEN1I1CzTVZr6uUJ3MrxNc4BbFjkFIYo",
  authDomain: "file-upload-58d86.firebaseapp.com",
  projectId: "file-upload-58d86",
  storageBucket: "file-upload-58d86.appspot.com",
  messagingSenderId: "873161347304",
  appId: "1:873161347304:web:a2d075246d2c96e408b95d",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
