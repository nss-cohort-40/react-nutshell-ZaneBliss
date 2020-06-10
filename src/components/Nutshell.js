import React, { Component, useState, useEffect } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import LoginViews from './LoginViews'
import "./Nutshell.css";

const Nutshell = () => {
  const [hasUser, setHasUser] = useState(sessionStorage.getItem('user'))

if (!hasUser) {
    return (
      <React.Fragment>
        <LoginViews hasUser={hasUser} setHasUser={setHasUser} />
      </React.Fragment>
    )
  } else if (hasUser) {
    return (
      <React.Fragment>
        <NavBar />
        <ApplicationViews />
      </React.Fragment>
    );
  }
}

export default Nutshell;
