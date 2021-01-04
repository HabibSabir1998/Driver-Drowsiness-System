import React, { useState } from "react";
import "./Login.css";
import register from "../img/carman.svg";

function Logintwo(props) {
  const [id, setId] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (confirmPassword) {
      props.history.push("/dashboard");
    }

    // this.props.history.push("/dashboard")
    // alert("Done")
    // window.location="/dashboard"
  };

  return (
    <div className="login-two">
      <div className="sidenav">
        <div className="login-main-text">
          <h2>
            Driver Assistence System
            <br /> Login Here!
          </h2>
          <p className="subtext">Fill the login form and enjoy our service</p>
          {/* <img src={register} style={{ width: "50%" }} /> */}
        </div>
      </div>
      <div className="main">
        <div className="col-md-6 col-sm-12 mt-sm-4">
          <div className="login-form">
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <i className="fas fa-portrait"></i>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Device Id"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
              <div className="form-group">
                <i className="fa fa-lock"></i>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-blue">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logintwo;
