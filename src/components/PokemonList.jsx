import React from "react";
import Pokemon from "./Pokemon.jsx";

function PokemonList(props) {
  const cart = props.pokemons.map((poke) => {
    return (
      <li key={poke.id}>
        <Pokemon name={poke.name} img={poke.url} types={poke.types} />
      </li>
    );
  });

  return (
    <div>
      <ul>{cart}</ul>
    </div>
  );
}

export default PokemonList;
