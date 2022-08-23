import React, { useEffect, useState } from "react";
import "./SearchExercice.css";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorScrollBar from "./HorScrollBar";

function SearchExercice( {setExercices, setBodyPart, bodyPart}) {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);
  

  const handleSearch = async () => {
    if (search) {
      const exercicesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercices = exercicesData.filter(
        (exercice) =>
          exercice.name.toLocaleLowerCase().includes(search) ||
          exercice.target.toLocaleLowerCase().includes(search) ||
          exercice.equipment.toLocaleLowerCase().includes(search) ||
          exercice.bodyPart.toLocaleLowerCase().includes(search)
      );

      setSearch('');
      setExercices(searchedExercices);
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
      <HorScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
    </div>
  );
}

export default SearchExercice;
