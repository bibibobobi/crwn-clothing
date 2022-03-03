import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyDVCn6ovx-Ps0K1sdxDug6Ukzb3ZvZTEYc',
  authDomain: 'crwn-db-e71f4.firebaseapp.com',
  projectId: 'crwn-db-e71f4',
  storageBucket: 'crwn-db-e71f4.appspot.com',
  messagingSenderId: '863461675559',
  appId: '1:863461675559:web:2f3ab2a5a80056accf3402',
  measurementId: 'G-HVD15M4GT4',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
