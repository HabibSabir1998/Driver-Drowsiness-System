import React from "react";

import carlove from "../../images/carlove.svg";

const AppWorking = () => {
  return (
    <div id="HowAppWorks" className="container text-center gutter">
      <br /> <br /> <br />
      <h1 className="section-heading">How the App Works?</h1>
      <p className="section-p">
        The Most of accident occur because the driver feel drowsy that's why
        this system is design to overcome this problem.This system try to driver
        can focus on the road.
      </p>
      <div className="container">
        <div className="row">
          <div className="col demo-car-div">
            <img id="demo-car" src={carlove} alt="appdemo-1" />
          </div>

          <div id="demo-steps-parent-div" className="col">
            <div className="demo-steps-div">
              <h4 className="demo-heading">1. Drowsy</h4>
              <p className="demo-p">
                This system monitors the driver's fatigue level and drowsiness
                based on his/her driving inputs. It issues a visual and audible
                alarm to alert the driver if he or she is too drowsy to continue
                driving after few seconds it plays the voice bot to change the
                mood of driver.
              </p>
            </div>

            <div className="demo-steps-div">
              <h4 className="demo-heading">2. Distraction</h4>
              <p className="demo-p">
                This system monitors the driver's face when he/she not focused
                on road. It issues a alarm to alert the driver after few seconds
                it plays the voice bot.
              </p>
            </div>

            <div className="demo-steps-div">
              <h4 className="demo-heading">3. Using Mobile Phone</h4>
              <p className="demo-p">
                This system monitors the driver's face when he/she using mobile
                while driving. It issues a alarm to alert the driver after few
                seconds it plays the voice bot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWorking;
