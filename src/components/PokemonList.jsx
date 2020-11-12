import React from "react";
import Pokemon from "./Pokemon.jsx";
import pokemonList from "./pokemonList.css";

function PokemonList(props) {
  const cart = props.pokemons.map((poke) => {
    return (
      <li key={poke.id} className="li-card">
        <Pokemon name={poke.name} img={poke.url} types={poke.types} />
      </li>
    );
  });

  return (
    <div>
      <ul className="cards-container">{cart}</ul>
    </div>
  );
}

export default PokemonList;
