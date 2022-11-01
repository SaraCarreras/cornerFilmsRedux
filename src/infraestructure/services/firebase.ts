// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

export const initializeFirebaseApp = () => {
    const firebaseConfig = {
        apiKey: process.env.REACT_APP_APIKEY,
        authDomain: process.env.REACT_APP_AUTHDOMAIN,
        projectId: process.env.REACT_APP_PID,
        storageBucket: process.env.REACT_APP_SB,
        messagingSenderId: process.env.REACT_APP_MESSANGINGDENDERID,
        appId: process.env.REACT_APP_ID,
    };

    // Initialize Firebase
    const firebaseApp = initializeApp(firebaseConfig);
    return { firebaseApp };
};
