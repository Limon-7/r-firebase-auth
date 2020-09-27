import React, { useContext } from "react";
import { AuthUserContext } from "../../contexts";
import { PasswordChangeForm } from "../PasswordChange/PasswordChange";
import { PasswordForgetForm } from "../PasswordForget";

import "./Account.css";
function Account() {
  const authUser = useContext(AuthUserContext);

  return (
    <div className="account">
      <div className="account__info">
        <h3>Account: {authUser.email}</h3>
        {authUser ? <PasswordChangeForm /> : <PasswordForgetForm />}
      </div>
    </div>
  );
}

export default Account;
