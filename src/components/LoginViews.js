import { Route, Redirect } from "react-router-dom";
import React, { Component, useState } from "react";
import Login from './login/Login'
import Register from './register/Register'
import Welcome from './welcome/Welcome'

const LoginViews = props => {
    const setHasUser = props.setHasUser
    const hasUser = props.hasUser

    return (
      <React.Fragment>
        <Route
          exact path='/' render={props => {
            return <Welcome />
            // Remove null and return the component which will show news articles
          }}
        />
        <Route
          exact path='/login' render={props => {
            return <Login hasUser={hasUser} setHasUser={setHasUser} {...props} />
            // Remove null and return the component which will show news articles
          }}
        />
      </React.Fragment>
    );
}

export default LoginViews