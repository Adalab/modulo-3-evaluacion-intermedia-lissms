import React from "react";
import PokemonList from "./components/PokemonList.jsx";
import data from "./data/data.js";

const App = () => {
  console.log("data", data);
  return (
    <div>
      <PokemonList pokemons={data} />
    </div>
  );
};

export default App;
