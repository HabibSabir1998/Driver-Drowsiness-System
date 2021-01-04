///* eslint-disable */

import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Dashboard from "./Components/Dashboard";
import Analytics from "./Components/Analytics";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import applogo from "./images/NavbarLogo.png";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/log-in"}>
              {/*<img src={applogo} width= "120px" height="50px"/>*/}
              Driver Assistance System
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link" to={"/home"}>
                  Home
                </Link>
                <Link className="nav-item nav-link" to={"/analytics"}>
                  Analytics
                </Link>
                <Link className="nav-item nav-link" to={"/dashboard"}>
                  Activity
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={Register} />
          <Route path="/log-in" component={Login} />
          <Route path="/sign-up" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/analytics" component={Analytics} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
