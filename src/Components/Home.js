import React from "react";
import style from "./style.module.css";
import {Line} from 'react-chartjs-2';

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
    backgroundColor: "rgba(255,0,0,0.5)",
    
    
  },
  paperM: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "rgba(0,128,128,0.5)",
    
    
  },
  paperS: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "rgba(255,255,0,0.5)",
    
    
  },
  
  title: {
    color: "#3f51b5",
    textTransform: "uppercase",
  },
  graph:{
    maxWidth: 1000,
      margin: "0 auto",
      justifyContent:"center",
      alignItems:"center",
      '@media(minWidth: 320px)' : {
        width: '100%',
        height: '100%'
      },
      

  },
  heading:{
    display:"flex",
    justifyContent:"center",
    padding:10,
    marginBottom:15,
    backgroundColor:"Grey",
    color: 'white',

  }
}));


const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August'],
    datasets: [
      {
        label: 'Mobile Phone',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        data: [0, 0, 0, 2, 4, 3, 0]
      },
      {
        label: 'Total Unusual Activity',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(255,0,0,0.4)',
        borderColor: 'rgba(255,0,0,1)',
        pointBorderColor: 'rgba(255,0,0,1)',
        pointBackgroundColor: '#fff',
        data: [0, 0, 1, 2, 1, 4, 0]
      },
      {
        label: 'Feel Sleep',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(255,255,0,0.4)',
        borderColor: 'rgba(255,255,0,1)',
        pointBorderColor: 'rgba(255,255,0,1)',
        pointBackgroundColor: '#fff',
        data: [0, 0, 2, 2, 3, 1, 0]
      },
      
    ]
  };
  

function Home() {
  const classes = useStyles();

  return (
    <div className={style.main}>
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} >
          <Paper className={classes.paperT} elevation={3}>
            <h3 className={classes.title}>Total Activity</h3>
            <h3> 8 </h3>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4} >
          <Paper className={classes.paperM} elevation={3}>
            <h3 className={classes.title}>Mobile Phone</h3>
            <h3> 4 </h3>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper className={classes.paperS} elevation={3}>
            <h3 className={classes.title}>Feel Sleep</h3>
            <h3> 2 </h3>
          </Paper>
        </Grid>
        

      </Grid>

      </div>
      <hr />
      <div className={classes.graph}>
        <h2 className={classes.heading}>Graph</h2>
        <Line data={data} />
      </div>
    </div>
  );
}

export default Home;
