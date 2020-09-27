import React, { Component, createContext } from "react";
import { WithFirebaseConsumer } from "./FirebaseContext";

export const AuthUserContext = createContext(null);

export function WithAuthUserContextProvider(WrappedComponent) {
  class AuthContextProvider extends Component {
    constructor(props) {
      super(props);
      this.state = {
        authUser: null,
      };
    }
    unsubscribeFromAuth = null;

    componentDidMount() {
      this.unsubscribeFromAuth = this.props.firebase.auth.onAuthStateChanged(
        (authUser) => {
          authUser
            ? this.setState({ authUser })
            : this.setState({ authUser: null });
        }
      );
    }
    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }
    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          {<WrappedComponent {...this.props} />}
        </AuthUserContext.Provider>
      );
    }
  }
  return WithFirebaseConsumer(AuthContextProvider);
}
