import { useState } from "react";

export function CountCats() {

  //initialise the state for countCat
  const[catCount,setCatCount] =useState(0);

  const cats = ["🐈"].length;

  //function to increment catcount
  function handleClick() {
    setCatCount(catCount + 1);
  }

    return (
    <>
    <h2>useState</h2>

    <p>Number of cats : {cats}</p>
  
    <button onClick={handleClick}> Adding cats ..... There are ... {catCount} cats 🥳 </button>
    <p>{catCount}  cats 🐈 </p>
    </>
  );
}