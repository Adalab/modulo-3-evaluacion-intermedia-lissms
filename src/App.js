import React from "react";
import PokemonList from "./components/PokemonList.jsx";
import data from "./data/data.js";
import "./app.css";

const App = () => {
  console.log("data", data);
  return (
    <div>
      <h1 className="title">Mi lista de pokemons</h1>
      <PokemonList pokemons={data} />
    </div>
  );
};

export default App;
