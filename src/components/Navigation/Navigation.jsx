import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SignOut } from "..";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../../contexts";

import "./Navigation.css";
function Navigation() {
  const authUser = useContext(AuthUserContext);
  if (authUser) {
    return (
      <div className="navigation">
        <ul className="navigation__menu">
          <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
          </li>
          <li>
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
          </li>
          <li>
            <Link to={ROUTES.ADMIN}>Admin</Link>
          </li>
          <li>
            <SignOut />
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div className="navigation">
      <ul className="navigation__menu">
        <li>
          <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
        <li>
          <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
