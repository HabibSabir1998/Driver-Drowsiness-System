import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../Context/UserContext";
function Nabar() {
  const { userData, setUserData } = useContext(UserContext);

  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
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
            {userData.user ? (
              <>
                <Link className="nav-link" to={"/home"}>
                  Home
                </Link>
                <Link className="nav-item nav-link" to={"/analytics"}>
                  Analytics
                </Link>
                <Link className="nav-item nav-link" to={"/dashboard"}>
                  Activity
                </Link>
                <Link className="nav-item nav-link" onClick={logout}>
                  Logout
                </Link>
              </>
            ) : (
              <Link className="nav-link" to={"/home"}>
                Home
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nabar;
