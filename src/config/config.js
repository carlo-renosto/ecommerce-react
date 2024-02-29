import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDQsqD_rENrQxANGMBJDskJo821LV1wWsE",
  authDomain: "ecommerce-react-e84f1.firebaseapp.com",
  projectId: "ecommerce-react-e84f1",
  storageBucket: "ecommerce-react-e84f1.appspot.com",
  messagingSenderId: "123246970956",
  appId: "1:123246970956:web:d5e6f192e65488e8584ce9"
}

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);