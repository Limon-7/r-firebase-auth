import React, { createContext } from "react";
import { Firebase } from "../components";

export const FirebaseContext = createContext(null);
export const FirebaseContextProvider = (props) => {
  // const firebaseObject = new Firebase();
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
// setting consumer
export const FirebaseContextConsumer = FirebaseContext.Consumer;

/*
setting higher order component
*/
export const WithFirebaseConsumer = (Component) => (props) => {
  return (
    <FirebaseContextConsumer>
      {(value) => <Component {...props} firebase={value} />}
    </FirebaseContextConsumer>
  );
};
