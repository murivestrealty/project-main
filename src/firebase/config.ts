import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB-ds9gIa7l5Jr70ts7UGiflEL9juogbkE",
  authDomain: "murivest-realty.firebaseapp.com",
  projectId: "murivest-realty",
  storageBucket: "murivest-realty.firebasestorage.app",
  messagingSenderId: "406809689762",
  appId: "1:406809689762:web:6b5167770a447fbc62a1fb",
  measurementId: "G-C0XKNPEXFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;