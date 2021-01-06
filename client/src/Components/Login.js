import React, { useState, useContext } from "react";
import "./Login.css";
import register from "../img/carman.svg";
import { useHistory } from "react-router-dom";
import ErrorNotice from "./ErrorNotice";
import Axios from "axios";
import UserContext from "../Context/UserContext";

function Login(props) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = {
        email,
        password,
      };
      const loginRes = await Axios.post("/login", loginUser);

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
                  placeholder="Device Id or email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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

export default Login;
