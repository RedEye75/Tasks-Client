import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCOiQWpf2TWHvbvAJwevT3rsHuFa2QELnI",
  authDomain: "acetodo-d1de1.firebaseapp.com",
  projectId: "acetodo-d1de1",
  storageBucket: "acetodo-d1de1.appspot.com",
  messagingSenderId: "266152859879",
  appId: "1:266152859879:web:d6da767b9e06cfd3b56a42",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
