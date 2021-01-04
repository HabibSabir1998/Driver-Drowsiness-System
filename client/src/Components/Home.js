import React from "react";
import "./home/Home.css";
import Jumbotron from "./home/Jumbotron";
import Locations from "./home/Locations";
import AppWorking from "./home/AppWorking";
import { Footer } from "./home/Footer";

function Home() {
  return (
    <div>
      <div className="gradient-bg">
        <Jumbotron />
      </div>
      <Locations />
      <AppWorking />
      <Footer />
    </div>
  );
}

export default Home;
