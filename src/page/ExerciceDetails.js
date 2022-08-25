import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../component/Navbar";
import "./ExerciseDetails.css";
import cardiaque from "../assets/icons/cardiaque.png";
import cours from "../assets/icons/cours.png";
import musculation from "../assets/icons/musculation.png";

import { exerciseOptions, fetchData } from "../utils/fetchData";

function ExerciceDetails() {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();
  const [exerciseVideos, setExerciseVideos] = useState([]);

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
    };

    fetchExercisesData();
  }, [id]);

  return (
    <>
      <div className="exercisedetails">
        <div className="exercicedetails__img">
          <img src={exerciseDetail.gifUrl} alt="" />
        </div>
        <div className="exercisedetails__text">
          <h1>{exerciseDetail.name}</h1>
          <p>
            {" "}
            Exercises keep you strong. <span>{exerciseDetail.name}</span> bup is
            one of the best <br /> exercises to target your{" "}
            {exerciseDetail.target}. It will help you improve your <br /> mood
            and gain energy.
          </p>
          <div className="exercise__button toleft">
            <p className="exercise__button-body">{exerciseDetail.bodyPart}</p>
            <p className="exercise__button-target">{exerciseDetail.target}</p>
          </div>
          <div className="exercicedetails__logo">
            <div className="exercisedetails__logo-container">
              <img src={cours} alt="" />
              <p>{exerciseDetail.bodyPart}</p>
            </div>
            <div className="exercisedetails__logo-container">
              <img src={musculation} alt="" />
              <p>{exerciseDetail.target}</p>
            </div>
            <div className="exercisedetails__logo-container">
              <img src={cardiaque} alt="" />
              <p>{exerciseDetail.equipment}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="exercicedetails__video">
        <div className="exercicedetails__video-text">
          <h1>
            Watch <strong>{exerciseDetail.name}</strong> exercice videos.
          </h1>
          <div className="exercicedetails__video-videos"></div>
        </div>
      </div> */}
    </>
  );
}

export default ExerciceDetails;
