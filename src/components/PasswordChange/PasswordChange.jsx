import React, { Component } from "react";
import { WithFirebaseConsumer } from "../../contexts";
import { PasswordForget } from "../PasswordForget";

import "./PasswordChange.css";
export function PasswordChange() {
  return (
    <div className="passwordChange">
      <div className="passwordChange__info">
        <h3>PasswordChange page</h3>
      </div>
    </div>
  );
}
const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null,
};
class PasswordChangeFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

    return (
      <form onSubmit={this.onSubmit} className="passwordChangeForm">
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
        {error && <p className="signInForm__error">{error.message}</p>}
        <button disabled={isInvalid} type="submit">
          Update Password
        </button>
      </form>
    );
  }
}
export const PasswordChangeForm = WithFirebaseConsumer(PasswordChangeFormBase);
// export default PasswordForget;
