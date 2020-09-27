import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAnt3kUy-QrHivNd1K1QLAveFB33-CM8a0",
  authDomain: "react-auth-3b550.firebaseapp.com",
  databaseURL: "https://react-auth-3b550.firebaseio.com",
  projectId: "react-auth-3b550",
  storageBucket: "react-auth-3b550.appspot.com",
  messagingSenderId: "189103566863",
  appId: "1:189103566863:web:a850b7f7aaeb5ce44df37a",
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;

/* 


 apiKey: "AIzaSyAnt3kUy-QrHivNd1K1QLAveFB33-CM8a0",
  authDomain: "react-auth-3b550.firebaseapp.com",
  databaseURL: "https://react-auth-3b550.firebaseio.com",
  projectId: "react-auth-3b550",
  storageBucket: "react-auth-3b550.appspot.com",
  messagingSenderId: "189103566863",
  appId: "1:189103566863:web:a850b7f7aaeb5ce44df37a",


*/
