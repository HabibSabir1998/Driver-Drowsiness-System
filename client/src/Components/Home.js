import React from "react";
import "./home/Home.css";
import Jumbotron from "./home/Jumbotron";
import Features from "./home/Features";
import AppWorking from "./home/AppWorking";
import { Footer } from "./home/Footer";

function Home() {
  return (
    <div>
      <div className="gradient-bg">
        <Jumbotron />
      </div>
      <Features />
      <AppWorking />
      <Footer />
    </div>
  );
}

export default Home;
