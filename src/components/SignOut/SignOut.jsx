import React from "react";
import { WithFirebaseConsumer } from "../../contexts/FirebaseContext";
import "./SignOut.css";

function SignOut({ firebase }) {
  return (
    <div className="signOut">
      <button type="button" onClick={firebase.doSignOut}>
        Sign Out
      </button>
    </div>
  );
}

export default WithFirebaseConsumer(SignOut);
