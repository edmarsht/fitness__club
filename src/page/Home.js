import React from "react";
import "./Home.css";
import banner from "../assets/images/banner.png";
import { NavLink } from "react-router-dom";
import SearchExercice from "../component/SearchExercice";


function Home() {
  return (
    <>
    <div className="home">
      <div className="home__text">
        <h5>Fitness Club</h5>
        <h3>Sweat, Smile and Repeat</h3>
        <p>Check out the most effective exercices </p>
        <NavLink to="/exercice">
          <button>Explore Exercices</button>
        </NavLink>
      </div>
      <div className="home__banner">
        <img src={banner} alt="" />
      </div>
  
    </div>
    <div className="home__exercice">
      <p>EXERCICE</p>
    </div>
    < SearchExercice />

    </>
  );
}

export default Home;
