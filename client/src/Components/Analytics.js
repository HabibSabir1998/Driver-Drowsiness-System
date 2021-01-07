import React, { useContext, useEffect, useState } from "react";
import style from "./style.module.css";
import { Line, Bar } from "react-chartjs-2";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Axios from "axios";
import moment from "moment";

import { useHistory } from "react-router-dom";
import UserContext from "../Context/UserContext";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: "0 auto",
    marginTop: 70,
  },
  paperT: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#86b1eefa",
  },
  paperM: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#6f5de5bd",
  },
  paperS: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#7ac57ae8",
  },

  title: {
    color: "white",
    textTransform: "uppercase",
  },
  graph: {
    maxWidth: 1000,
    margin: "0 auto",
    justifyContent: "center",
    alignItems: "center",
    "@media(minWidth: 320px)": {
      width: "100%",
      height: "100%",
    },
  },
  heading: {
    display: "flex",
    justifyContent: "center",
    padding: 10,
    marginBottom: 15,
    backgroundColor: "Grey",
    color: "white",
  },
}));

const months = localStorage.getItem("months");
const TotalDis = localStorage.getItem("filterDis");
const TotalDrowsy = localStorage.getItem("filterDrowsy");
const TotalMob = localStorage.getItem("filterMob");
const graphDataTotal = localStorage.getItem("graphData");

const graphData = JSON.parse(graphDataTotal);

const data = {
  labels: JSON.parse(months),
  datasets: [
    {
      label: "Drowsy",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "#86b1eefa",
      borderColor: "#86b1eefa",
      pointBorderColor: "#86b1eefa",
      pointBackgroundColor: "#fff",
      data: graphData && graphData.map((val) => val.Drowsy),
    },
    {
      label: "Distraction",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "#6f5de5bd",
      borderColor: "#6f5de5bd",
      pointBorderColor: "#6f5de6cd",
      pointBackgroundColor: "#fff",
      data: graphData && graphData.map((val) => val.Distraction),
    },
    {
      label: "Mobile Phone",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "#7ac57ae8",
      borderColor: "#7ac57ae8",
      pointBorderColor: "#7ac57ae8",
      pointBackgroundColor: "#fff",
      data: graphData && graphData.map((val) => val.MobileUsage),
    },
  ],
};

function Analytics() {
  const classes = useStyles();
  const { userData } = useContext(UserContext);
  const [activity, setActivity] = useState([]);
  const [graphData, setgraphData] = useState([]);
  const history = useHistory();

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

            date: moment(val.date_time).format("MMM"),
          };
        });
        setActivity(activity);
        console.log("fetchedData", activity);
      })
      .catch(() => {
        const localActivity = JSON.parse(localStorage.getItem("activity"));
        setActivity(localActivity);
      });
  };
  useEffect(() => {
    getActivity();
  }, []);

  useEffect(() => {
    setgraphData(AllData);
  }, [activity]);

  graphData.length &&
    localStorage.setItem("graphData", JSON.stringify(graphData));
  let filterDrowsy = activity.filter((val) => val.un_act == "Drowsy");
  let filterDis = activity.filter((val) => val.un_act == "Distraction");
  let filterMob = activity.filter((val) => val.un_act == "Mobile Usage");

  const months = [...new Set(activity.map((q) => q.date))];
  localStorage.setItem("months", JSON.stringify(months));
  localStorage.setItem("filterDrowsy", JSON.stringify(filterDrowsy.length));
  localStorage.setItem("filterDis", JSON.stringify(filterDis.length));
  localStorage.setItem("filterMob", JSON.stringify(filterMob.length));

  const filter = (date, arr) => arr.filter((img) => img.date === date);

  const AllData = months.map((v, i) => {
    return {
      Drowsy: filter(v, filterDrowsy).length,
      Distraction: filter(v, filterDis).length,
      MobileUsage: filter(v, filterMob).length,
    };
  });

  useEffect(() => {
    if (!userData.user) history.push("/log-in");
  }, [userData]);
  return (
    <div className={style.main}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paperT} elevation={3}>
              <h3 className={classes.title}>Drowsy </h3>
              <h3>{TotalDrowsy}</h3>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper className={classes.paperM} elevation={3}>
              <h3 className={classes.title}>Distraction</h3>
              <h3>{TotalDis} </h3>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper className={classes.paperS} elevation={3}>
              <h3 className={classes.title}>Mobile Phone</h3>
              <h3>{TotalMob} </h3>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <hr />
      <div className={classes.graph}>
        {/*<h2 className={classes.heading}>Graph</h2>*/}
        <Bar data={data} />
      </div>
    </div>
  );
}

export default Analytics;
