import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { WithFirebaseConsumer } from "../contexts";
import * as ROUTES from "../constants/routes";

const WithAuthorization = (condition) => (WrappedComponent) => {
  class withAuthorization extends Component {
    unsubscribeAll = null;
    componentDidMount() {
      this.unsubscribeAll = this.props.firebase.auth.onAuthStateChanged(
        (authUser) => {
          if (!condition(authUser)) {
            this.props.history.push(ROUTES.SIGN_IN);
          }
        }
      );
    }
    componentWillUnmount() {
      this.unsubscribeAll();
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return compose(withRouter, WithFirebaseConsumer)(withAuthorization);
};

export default WithAuthorization;
