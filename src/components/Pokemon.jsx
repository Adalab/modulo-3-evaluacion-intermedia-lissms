import React from "react";
import pokemon from "./pokemon.css";

function Pokemon(props) {
  const typesPok = props.types.map((type, i) => {
    return (
      <li key={i} className="type-class">
        {type}
      </li>
    );
  });
  return (
    <div className="pokemon-card">
      <img src={`${props.img}`} alt="image of pokemon" />
      <h1>{props.name}</h1>
      <ul className="ul-types">{typesPok}</ul>
    </div>
  );
}

export default Pokemon;
