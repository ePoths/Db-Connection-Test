import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoEJC9OMtFAcGE_8B7z6cxWnnrmXUMiaU",
  authDomain: "decisive-engine-374010.firebaseapp.com",
  projectId: "decisive-engine-374010",
  storageBucket: "decisive-engine-374010.appspot.com",
  messagingSenderId: "983953685237",
  appId: "1:983953685237:web:3eb9cd9d727431c04fe3bc",
  measurementId: "G-KPH08E7JME",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
