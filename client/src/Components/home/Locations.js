import React from "react";
import vibration from "../../images/vibrationhome.png";
import alert from "../../images/alerthome.png";
import voicebot from "../../images/voicebothome.png";

const Locations = () => {
  return (
    <div id="Locations" className="container text-center">
      <br />
      <br />
      <br />
      <h1 className="section-heading mb-10">Features</h1>
      <div></div>
      {/*<p className="section-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>*/}

      <div className="row">
        <div className="col-sm-4">
          <img className="location-img" alt="locksmith" src={alert} />
          <h4 className="feature-heading">Generate Alert</h4>
          <p className="feature-p">
            Generate the alert when driver doing any unusual activity.
          </p>
        </div>
        <div className="col-sm-4">
          <img className="location-img" alt="plumber" src={voicebot} />
          <h4 className="feature-heading">Play Voice bot</h4>
          <p className="feature-p">
            Play the voice bot when driver not focus on driving after alert.
          </p>
          <p className="feature-p"></p>
        </div>

        <div className="col-sm-4">
          <img className="location-img" alt="puncture" src={vibration} />
          <h4 className="feature-heading">Seat Vibrator</h4>
          <p className="feature-p">
            Start the vibration on seat while driver continuously doing unusual
            activity.
          </p>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Locations;
