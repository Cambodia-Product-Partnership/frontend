import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAeJ9Ak12XeH_qJEvavV2b-vSzDyp6k7k4",
    authDomain: "cambodia-product-partnership.firebaseapp.com",
    projectId: "cambodia-product-partnership",
    storageBucket: "cambodia-product-partnership.appspot.com",
    messagingSenderId: "727226682293",
    appId: "1:727226682293:web:ddc19c54b5ffd0483327fc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);