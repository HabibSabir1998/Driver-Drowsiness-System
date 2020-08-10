import React from "react";
import style from "./style.module.css";
import Data from "./activity.json";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";


const useStyles =  makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    display:"inline-block",
    marginLeft: 12,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 10,
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: 5,
    },
    [theme.breakpoints.down('lg')]: {
      marginLeft: 30,
    },

    '@media(maxWidth: 320px)' : {
      width: '100%',
      margin: "0 auto",
      marginLeft: 20,

      
    },
    '@media(maxWidth: 425px)' : {
      width: '100%',
      margin: "0 auto",
      marginLeft: 50,

      
    },
    
  },
  cards:{
    marginLeft: 12,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 10,
    },
    [theme.breakpoints.up('xs')]: {
      marginLeft: 0,
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: 40,
    },

  },
  media: {
    height: 250,
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

const Dashboard = () => {
  const classes = useStyles();
  // var dataA = Object.keys(Data).map((keyname) => {
  //   const datab = Data[keyname];
  //   console.log(datab);
  // });

  
  return (
    <>
      <div className={style.main}>
    <div className={classes.heading}><h1>User Activity</h1></div>
        <div className={classes.cards}>
        {Object.keys(Data).map((keyName) => {
          const data = Data[keyName];
          return (

            <Card key={keyName} className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={require("../img/alert.png")}
                  title="Mobile phone"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {data.activity}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {data.disc}
                  </Typography>
                  <hr />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {data.date}
                  </Typography>
                </CardContent>
              </CardActionArea>
              
            </Card>
          );
        })}
        </div>
      </div>
      <div className={style.footer}>
        <p>
          Made by Group 27 <span>🔥✨ </span>
        </p>
      </div>
    </>
  );
};

export default Dashboard;
