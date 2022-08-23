import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import "./Exercises.css";
import ExerciseCard from "./ExerciseCard";

function Exercices({ exercises, setExercises, bodyPart }) {
  return (
    <div className="exercises">
      {exercises.length > 0 ? <h1>Exercises</h1> : ""}
      <div className="exercises__container">
        {exercises.slice(2).map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
      <div className="exercises__pagination">
        {exercises.length > 9 && <Pagination />}
      </div>
    </div>
  );
}

export default Exercices;
