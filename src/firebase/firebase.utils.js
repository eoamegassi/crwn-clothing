import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCNOvPIE86YF14N1GiPZtMyQSE_LZMUHOk",
    authDomain: "crwn-clothing-14321.firebaseapp.com",
    databaseURL: "https://crwn-clothing-14321.firebaseio.com",
    projectId: "crwn-clothing-14321",
    storageBucket: "crwn-clothing-14321.appspot.com",
    messagingSenderId: "551033413313",
    appId: "1:551033413313:web:0fb91f3d76ec1f9da1fe40",
    measurementId: "G-156QYH18W8"
};


export const createUserProfileDocument = async (userAuth, additionnalData) => {
    if (!userAuth) return ;

    console.log()
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
