import PropTypes from "prop-types";
import React from "react";
import Pokemon from "./Pokemon.jsx";
import "./pokemonList.css";

function PokemonList(props) {
  const card = props.pokemons.map((poke) => {
    return (
      <li key={poke.id} className="li-card">
        <Pokemon name={poke.name} img={poke.url} types={poke.types} />
      </li>
    );
  });

  return (
    <div>
      <ul className="cards-container">{card}</ul>
    </div>
  );
}

PokemonList.propTypes = {
  pokemons: PropTypes.array,
};
export default PokemonList;
