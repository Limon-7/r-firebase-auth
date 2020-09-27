import React from "react";
import { Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import {
  Navigation,
  Home,
  Landing,
  SignUp,
  SignIn,
  PasswordForget,
  Admin,
  Account,
  Footer,
} from "./components";

import { WithAuthUserContextProvider } from "./contexts";

import "./App.css";
const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Switch>
        <Route exact path={ROUTES.LANDING} component={Landing} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
        <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
        <Route exact path={ROUTES.ACCOUNT} component={Account} />
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
        <Route exact path={ROUTES.ADMIN} component={Admin} />
        <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
};

export default WithAuthUserContextProvider(App);
