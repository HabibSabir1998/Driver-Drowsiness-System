import Axios from "axios";
import React, { useState, useContext } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../Context/UserContext";
import ErrorNotice from "./ErrorNotice";

function Register(props) {
  const [deviceId, setDeviceId] = useState("vv-0213");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        email,
        password,
        passwordCheck,
        deviceId,
      };
      await Axios.post("/register", newUser);
      const loginRes = await Axios.post("/login", {
        email,
        password,
      });

      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/home");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  const renderForm = () => {
    return (
      <div className="login-two">
        <div className="sidenav">
          <div className="login-main-text">
            <h2>
              Driver Assistance System
              <br /> Register Here!
            </h2>
            <p className="subtext">
              Fill the Register form and enjoy our service.
            </p>
          </div>
        </div>
        <div className="main">
          <div className="col-md-6 col-sm-12 mt-sm-4">
            <div className="register-form">
              {error && (
                <ErrorNotice
                  message={error}
                  clearError={() => setError(undefined)}
                />
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <i className="fas fa-portrait"></i>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Device Id"
                    value={deviceId}
                    onChange={(e) => setDeviceId(e.target.value)}
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
                    placeholder="Confirm Password"
                    value={passwordCheck}
                    onChange={(e) => setPasswordCheck(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-blue">
                  Register
                </button>
                <p>
                  Are you already register?
                  <Link to={"/log-in"}> Login Here </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <div>{renderForm()}</div>;
}

export default Register;
