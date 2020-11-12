import React from "react";
import PokemonList from "./components/PokemonList.jsx";
import data from "./data/data.js";
import app from "./app.css";

const App = () => {
  console.log("data", data);
  return (
    <div className="container-pkList">
      <PokemonList pokemons={data} />
    </div>
  );
};

export default App;
