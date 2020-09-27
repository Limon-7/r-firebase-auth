import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import {
  FirebaseContextConsumer,
  WithFirebaseConsumer,
} from "../../contexts/FirebaseContext";
import { compose } from "recompose";

import "./SignUp.css";
import { SignInLink } from "../SignIn/SignIn";
function SignUp() {
  return (
    <div className="signUp">
      <div className="signUp__info">
        <h3>SignUp page</h3>
        {/* <FirebaseContextConsumer>
          {(firebase) => <SignUpForm firebase={firebase} />}
        </FirebaseContextConsumer> */}
        <SignUpForm />
        <SignInLink />
      </div>
    </div>
  );
}
const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
};
class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  // getting context
  // static contextType = FirebaseContext;
  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, passwordOne } = this.state;
    console.log(`username:${username} password:${passwordOne} email: ${email}`);
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
        console.log("error", error.message);
      });
  };
  render() {
    // const fObject = this.context;
    // console.log("fObject", fObject);
    // console.log("props", this.props);
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";
    return (
      <form onSubmit={this.handleSubmit} className="signUpForm">
        <input
          type="text"
          name="username"
          value={username}
          onChange={this.handleOnChange}
          placeholder="Enter name"
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={this.handleOnChange}
          placeholder="Enter Email"
        />
        <input
          type="text"
          name="passwordOne"
          value={passwordOne}
          onChange={this.handleOnChange}
          placeholder="Enter password"
        />
        <input
          type="text"
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.handleOnChange}
          placeholder="Confirm password"
        />
        {error && <p>{error.message}</p>}
        <button type="submit" disabled={isInvalid}>
          Sign Up
        </button>
      </form>
    );
  }
}
const SignUpForm = compose(withRouter, WithFirebaseConsumer)(SignUpFormBase);
const SignUpLink = () => {
  return (
    <p>
      Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
  );
};

export default SignUp;
export { SignUpLink, SignUpForm };
