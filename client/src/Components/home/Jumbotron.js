import React, { useRef } from "react";
import arrow from "../../images/header-arrow.svg";
import carman from "../../images/carman.svg";
import useWebAnimations, { zoomIn } from "@wellyshen/use-web-animations";

const Jumbotron = () => {
  const jumboTextRef = useRef(null);

  useWebAnimations({
    ref: jumboTextRef,
    ...zoomIn,
  });

  return (
    <div>
      {/* <!--Jumbotron--> */}
      <div className="jumbotron jumbotron-fluid gradient-bg">
        <div className="container">
          <div className="row">
            <div ref={jumboTextRef} className="col my-auto">
              <br></br>
              <br></br>
              <h1 className="display-4" style={{ color: "white" }}>
                Driver Assistance System
              </h1>
              <h1 className="jumbotron-heading">Care the Driver's Life</h1>
              <a href="#HowAppWorks">
                <div className="jumbotron-subheading">
                  <span className="jumbotron-p">Learn more</span>
                  <img
                    style={{
                      display: "inline-block",
                      marginBottom: "5px",
                      marginLeft: "5px",
                    }}
                    height="20"
                    width="20"
                    src={arrow}
                    alt="arrow"
                  />
                </div>
              </a>
            </div>

            <div className="col mobile-div">
              <img
                className="jumbotron-mobile vert-move"
                src={carman}
                alt="phone"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="wave-svg-div">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,288L48,266.7C96,245,192,203,288,160C384,117,480,75,576,80C672,85,768,139,864,165.3C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Jumbotron;
