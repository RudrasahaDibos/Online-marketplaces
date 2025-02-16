// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkv1qezPzu6zdIbSVYpxBgmyuKt0DneGI",
  authDomain: "online-marketplaces-38622.firebaseapp.com",
  projectId: "online-marketplaces-38622",
  storageBucket: "online-marketplaces-38622.firebasestorage.app",
  messagingSenderId: "369604195988",
  appId: "1:369604195988:web:9861316ea3354aaf9a6681"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth