import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyBJ0uXKtn3O-cV2OApJrKg0vaWhbobmpmg",
  authDomain: "tasked-a3f48.firebaseapp.com",
  projectId: "tasked-a3f48",
  storageBucket: "tasked-a3f48.firebasestorage.app",
  messagingSenderId: "265819153432",
  appId: "1:265819153432:web:82f89bf85a2ae2cd138f6d",
};

const app = initializeApp(firebaseConfig);
 const db=getFirestore(app)
export const storage=getStorage(app)


export default db;