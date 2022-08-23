import React from "react";
import Exercices from "./Exercices";

function ExerciseCard({ exercise }) {
  return (
    <div className="exercisecard">
      <div className="exercisecard__name">
        <p>{exercise.name.charAt(0).toUpperCase() + exercise.name.slice(1)}</p>
      </div>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <div className="exercise__button">
        <p className="exercise__button-body">
          {exercise.bodyPart.charAt(0).toUpperCase() +
            exercise.bodyPart.slice(1)}
        </p>
        <p className="exercise__button-target">
          {exercise.target.charAt(0).toUpperCase() + exercise.target.slice(1)}
        </p>
      </div>
    </div>
  );
}

export default ExerciseCard;
