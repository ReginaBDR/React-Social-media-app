import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
      auth.signInWithPopup(provider)
      .then(result => {
          dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
          })
      })
      .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__logo">
              <img src="https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png" alt="logo"></img>
              <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="Storybook"></img>
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
