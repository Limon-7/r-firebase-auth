import React, { Component } from "react";
import { Link } from "react-router-dom";
import { WithFirebaseConsumer } from "../../contexts";
import * as ROUTES from "../../constants/routes";

import "./PasswordForget.css";
export function PasswordForget() {
  return (
    <div className="passwordForget">
      <div className="passwordForget__info">
        <h3>PasswordForget page</h3>
        <PasswordForgetForm />
      </div>
    </div>
  );
}
/* state */
const INITIAL_STATE = {
  email: "",
  error: null,
};
class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { email, error } = this.state;

    const isInvalid = email === "";

    return (
      <form onSubmit={this.onSubmit} className="passwordForgetForm">
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="email"
          placeholder="Email Address"
        />
        {error && <p className="signInForm__error">{error.message}</p>}
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>
      </form>
    );
  }
}
const PasswordForgetForm = WithFirebaseConsumer(PasswordForgetFormBase);
const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export { PasswordForgetForm, PasswordForgetLink };
