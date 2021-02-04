import React from "react";
import logo from "../../images/logo.png";

export const Footer = () => {
  return (
    <div>
      <div style={{ marginBottom: "-20.25%" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L60,192C120,160,240,96,360,112C480,128,600,224,720,224C840,224,960,128,1080,85.3C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>{" "}
      </div>
      <footer className="container-fluid customFooter">
        <div className="container">
          <div className="row">
            <div className="col">
              <img
                width="200px"
                src={logo}
                className="d-inline-block align-top footer-logo"
                alt="hurryapp"
              />
            </div>
          </div>

          <div className="row justify-content-md-center">
            <div className="col-sm-4">
              <p className="footer-content">
                {new Date().getFullYear()} DAS. All Rights Reserverd.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
