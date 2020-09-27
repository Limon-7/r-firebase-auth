import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import * as ROUTES from "../../constants/routes";
import { WithFirebaseConsumer } from "../../contexts/FirebaseContext";
import { PasswordForgetLink } from "../PasswordForget/PasswordForget";
import { SignUpLink } from "../SignUp/SignUp";

import "./SignIn.css";
function SignIn() {
  return (
    <div className="signIn">
      <div className="signIn__info">
        <h3>sign in page</h3>
        <SignInForm />
        <PasswordForgetLink />
        <SignUpLink />
      </div>
    </div>
  );
}
/* state */
const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};
class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <form onSubmit={this.onSubmit} className="signInForm">
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="email"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />

        {error && <p className="signInForm__error">{error.message}</p>}
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>
      </form>
    );
  }
}

const SignInForm = compose(withRouter, WithFirebaseConsumer)(SignInFormBase);

const SignInLink = () => {
  return (
    <p>
      Don't have an account? <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </p>
  );
};

export default SignIn;
export { SignInForm, SignInLink };
