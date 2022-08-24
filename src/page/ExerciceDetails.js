import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../component/Navbar";
import "./ExerciseDetails.css"

import { exerciseOptions, fetchData } from "../utils/fetchData";

function ExerciceDetails() {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );

      setExerciseDetail(exerciseDetailData);
      console.log(exerciseDetailData)
    };

    fetchExercisesData();
  }, [id]);

  
  return (
    <div className="exercisedetails">
      <h1>{exerciseDetail.name}</h1>
    </div>
  );
}

export default ExerciceDetails;
