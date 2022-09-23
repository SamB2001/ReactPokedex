import React, { useState } from "react";
import PokedexCard from "./PokedexCard";

const PokedexSection = ({ allPokemon, setTeam }) => {
  const [search, setSearch] = useState("");

  let display = allPokemon
    .map((pokemon, index) => {
        let newObj = {
            ...pokemon,
            id: index + 1
        }
        return newObj
    })
    .filter((pokemon) => {
      return pokemon.name.includes(search);
    })
    .map((pokemon, index) => {
      return <PokedexCard pokemon={pokemon} index={index} key={index} setTeam={setTeam} />;
    });
  return (
    <section>
      <h1>Choose Your Team</h1>
      <input
        placeholder="Search a Pokemon"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <div className="pokedex-container">{display}</div>
    </section>
  );
};

export default PokedexSection;
