import React, { useState } from "react";
import UserLogint from "./Login";
import "./Login.css";

function Register(props) {
  const [deviceid, setDeviveId] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [register, setRegister] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Both Password are not same");
    } else {
      setRegister(true);
      setDeviveId(deviceid);
      props.history.push("/log-in");
    }
  };

  const renderForm = () => {
    return (
      <div className="login-two">
        <div className="sidenav">
          <div className="login-main-text">
            <h2>
              Driver Assistence System
              <br /> Register Here!
            </h2>
            <p className="subtext">Fill the Register form and enjoy our service</p>
          </div>
        </div>
        <div className="main">
          <div className="col-md-6 col-sm-12 mt-sm-4">
            <div className="register-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <i className="fas fa-portrait"></i>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Device Id"
                    value={"vv-0213"}
                    disabled
                  />
                </div>
                <div className="form-group">
                  <i className="fa fa-envelope"></i>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <i className="fa fa-phone"></i>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone No"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <i className="fa fa-lock"></i>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {!register && renderForm()}
      {register && <UserLogint id={deviceid} password={password} />}
    </div>
  );
}

export default Register;
