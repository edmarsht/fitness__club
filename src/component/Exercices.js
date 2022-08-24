import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import "./Exercises.css";
import ExerciseCard from "./ExerciseCard";

function Exercices({ exercises, setExercises, bodyPart, currentPage, setCurrentPage, search, setSearch }) {
    // const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 9;
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    const paginate = (e, value) => {
        setCurrentPage(value)
        window.scrollTo({top: 1600, behavior: 'smooth'})
    }

    useEffect(() => {
      const fetchExercisesData = async () => {
        let exercisesData = [];

        if(bodyPart === 'all') {
            exercisesData = await fetchData(
                "https://exercisedb.p.rapidapi.com/exercises",
                exerciseOptions
              );
        } else {
            exercisesData = await fetchData(
                `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
                exerciseOptions
              );
        }
        setExercises(exercisesData)
        setCurrentPage(1);

      }
      fetchExercisesData()
    }, [bodyPart])
    
    console.log(bodyPart)

  return (
    <div className="exercises">
      {exercises.length > 0 ? <h1>Exercises</h1> : ""}
      <div className="exercises__container">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
      <div className="exercises__pagination">
        {exercises.length > 9 && (
          <Pagination
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            color="primary"
            page={currentPage}
            onChange={paginate}
          />
        )}
      </div>
    </div>
  );
}

export default Exercices;
