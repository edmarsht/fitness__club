import React, { useEffect, useState } from "react";
import "./SearchExercice.css";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorScrollBar from "./HorScrollBar";

function SearchExercice({
  setExercises,
  setBodyPart,
  bodyPart,
  currentPage,
  setCurrentPage,
  setSearch,
  search,
}) {
  // const [search, setSearch] = useState("dead");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (exercice) =>
          exercice.name.toLocaleLowerCase().includes(search) ||
          exercice.target.toLocaleLowerCase().includes(search) ||
          exercice.equipment.toLocaleLowerCase().includes(search) ||
          exercice.bodyPart.toLocaleLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
      setCurrentPage(1);
      window.scrollTo({top: 1600, behavior: 'smooth'})

    }
  };

  return (
    <div className="search">
      <div className="search__title">
        <p>Awesome Exercice you should know</p>
      </div>
      <div className="search__input">
        <input
          type="text"
          placeholder="Search Exercices"
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          type="text"
          value={search}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <HorScrollBar
        data={bodyParts}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </div>
  );
}

export default SearchExercice;
