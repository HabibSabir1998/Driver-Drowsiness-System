import React, { useEffect, useState } from "react";
import "./card.css";
import drowsy from "../images/drowsy.png";
import distructed from "../images/distructed.png";
import mobilePhone from "../images/mobile-phone.png";

import Axios from "axios";
import moment from "moment";
import CircularProgress from "@material-ui/core/CircularProgress";

function Card() {
  const [activity, setActivity] = useState([]);

  const getActivity = () => {
    Axios.get("/api")
      .then((res) => {
        const fetchedData = res.data;
        let activity = fetchedData.map((val, ind) => {
          return {
            age: val.age,
            dateDB: val.date,
            date_time: val.date_time,
            gender: val.gender,
            location: val.location,
            mood: val.mood,
            un_act: val.un_act,
            alert:
              val.un_act === "Drowsy"
                ? drowsy
                : val.un_act === "Distraction"
                ? distructed
                : mobilePhone,
            desc:
              val.un_act === "Drowsy"
                ? "This activity is occurred because the driver was closed the eyes."
                : val.un_act === "Distraction"
                ? "This activity is occurred because the driver was not focused on the road."
                : "This activity is occurred because the driver was used the mobile phone.",
            date: moment(val.date_time).format("MMM"),
          };
        });
        setActivity(activity);
        localStorage.setItem("activity", JSON.stringify(activity));
      })
      .catch(() => {
        const localActivity = JSON.parse(localStorage.getItem("activity"));
        setActivity(localActivity);
      });
  };
  useEffect(() => {
    getActivity();
  }, []);

  return (
    <div className="card_outer">
      {!!activity.length ? (
        activity.reverse().map((val, ind) => {
          return (
            <div key={ind} className="cardmain">
              <div className="front">
                <img className="img" src={val.alert} alt="alert image" />
                <div className="text">
                  <h1 className="front_text">{val.un_act}</h1>
                  <p className="subtext">{val.desc}</p>
                </div>
              </div>
              <div className="back">
                <div className="back-content middle">
                  <div className="sm">
                    <span>
                      <strong>Mood:</strong>
                      <br />
                      {val.mood}
                    </span>
                    <span>
                      <strong>Age:</strong> <br />
                      {val.age}
                    </span>
                    <span>
                      <strong>Date And Time:</strong>
                      <br /> {val.date_time}
                    </span>
                    {!!val.location && (
                      <span>
                        <strong>Location:</strong>
                        <br /> {val.location[0]}, {val.location[1]}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <CircularProgress
          style={{
            marginTop: "20%",
            display: "inline-block",
            position: "relative",
          }}
        />
      )}
    </div>
  );
}

export default Card;
