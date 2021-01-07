import React, { useEffect, useState } from "react";
import "./card.css";
import drowsy from "../img/drowsy.png";
import distructed from "../img/distructed.jpg";
import mobilePhone from "../img/mobile-phone.png";

import Axios from "axios";
import moment from "moment";

function Card() {
  const [activity, setActivity] = useState([]);
  const [graphData, setgraphData] = useState([]);

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
              val.un_act == "Drowsy"
                ? drowsy
                : val.un_act == "Distraction"
                ? distructed
                : mobilePhone,
            desc:
              val.un_act == "Drowsy"
                ? "This activity is occurred because the driver was closed the eyes."
                : val.un_act == "Distraction"
                ? "This activity is occurred because the driver was not focused on the road."
                : "This activity is occurred because the driver was used the mobile phone.",
            date: moment(val.date_time).format("MMM"),
          };
        });
        setActivity(activity);
        //console.log("fetchedData", activity);
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
      {!!activity.length &&
        activity.map((val, ind) => {
          return (
            <div key={ind} className="cardmain">
              <div className="front">
                <img className="img" src={val.alert} alt="#" />
                <div className="text">
                  <h1 className="front_text">{val.un_act}</h1>
                  <p className="subtext">{val.desc}</p>
                </div>
              </div>
              <div className="back">
                <div className="back-content middle">
                  <div className="sm">
                    <span>Mood: {val.mood}</span>
                    <span>Age: {val.age}</span>
                    <span>Date And Time: {val.date_time}</span>
                    {!!val.location && (
                      <span>
                        Location:{val.location[0]}, {val.location[1]}
                        <small> | </small>
                        <a
                          target="_blank"
                          href={`http://www.google.com/maps/place/${val.location[2]},${val.location[3]}`}
                        >
                          map
                        </a>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Card;
