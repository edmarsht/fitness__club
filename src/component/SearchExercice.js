import React from 'react'
import "./SearchExercice.css"


function SearchExercice() {
  return (
    <div className="search">
<div className="search__title">
    <p>Awesome Exercice you should know</p>
</div>
<div className="search__input">
    <input type="text" placeholder="Search Exercices" />
    <button>Search</button>
</div>
    </div>
  )
}

export default SearchExercice