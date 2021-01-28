///* eslint-disable */

import React, { useEffect, useState, useContext } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Activity from "./Components/Activity";
import Analytics from "./Components/Analytics";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Navbar from "./Components/Nabar";
import applogo from "./images/NavbarLogo.png";
import Axios from "axios";

import UserContext from "./Context/UserContext";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post("/tokenIsValid", null, {
        headers: { "x-auth-token": token },
      });
      if (tokenRes.data) {
        const userRes = await Axios.get("/users", {
          headers: { "x-auth-token": token },
        });

        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={{ userData, setUserData }}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Register} />
            <Route path="/log-in" component={Login} />
            <Route path="/sign-up" component={Register} />
            <Route path="/activity" component={Activity} />
            <Route path="/analytics" component={Analytics} />
            <Route path="/home" component={Home} />
          </Switch>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
