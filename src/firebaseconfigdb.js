import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBXUedTr8TDAORq0pCfnUaeN9MGxrQqkH8",
  authDomain: "studet-crud.firebaseapp.com",
  projectId: "studet-crud",
  storageBucket: "studet-crud.appspot.com",
  messagingSenderId: "995924312273",
  appId: "1:995924312273:web:d4eab959995defe314c5f0",
  measurementId: "G-TGKE46KSTB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);