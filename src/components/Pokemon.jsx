import React from "react";

function Pokemon(props) {
  const typesPok = props.types.map((type, i) => {
    return <li key={i}>{type.types}</li>;
  });
  return (
    <div>
      <img src={`${props.img}`} alt="image of pokemon" />
      <h1>{props.name}</h1>
      <ul>{typesPok}</ul>
    </div>
  );
}

export default Pokemon;
