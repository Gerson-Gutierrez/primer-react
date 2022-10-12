import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyADmkToRTAtg7wsEoSUhlMsG83RdPXMrvI",
  authDomain: "react-ecommerce-4d732.firebaseapp.com",
  projectId: "react-ecommerce-4d732",
  storageBucket: "react-ecommerce-4d732.appspot.com",
  messagingSenderId: "858460073566",
  appId: "1:858460073566:web:cb3e3e8197891c93468ecf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)