import React, { useState } from "react";
import "./Home.css";
import banner from "../assets/images/banner.png";
import { NavLink } from "react-router-dom";
import SearchExercice from "../component/SearchExercice";
import Exercices from "../component/Exercices";

function Home() {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <>
      <div className="home">
        <div className="home__text">
          <h5>Fitness Club</h5>
          <h3>Sweat, Smile and Repeat</h3>
          <p>Check out the most effective exercises </p>
          <NavLink to="/exercice">
            <button>Explore Exercises</button>
          </NavLink>
        </div>
        <div className="home__banner">
          <img src={banner} alt="" />
        </div>
      </div>
      <div className="home__exercice">
        <p>EXERCISE</p>
      </div>
      <SearchExercice
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercices
        setExercises={setExercises}
        exercises={exercises}
        setBodyPart={setBodyPart}
      />
    </>
  );
}

export default Home;
