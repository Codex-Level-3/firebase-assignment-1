// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

const provider = new GoogleAuthProvider();
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLFDu5NSW5zD7isT4vc_pnawj_mv-VK6Q",
  authDomain: "fir-auth-4c29c.firebaseapp.com",
  projectId: "fir-auth-4c29c",
  storageBucket: "fir-auth-4c29c.appspot.com",
  messagingSenderId: "345829262476",
  appId: "1:345829262476:web:f18797c583928e66fc67a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { provider, auth };
