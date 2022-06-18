import { useEffect, useState } from "react";
import Pokemon from "../models/pokemon";
import Pkminfo from "./Pkminfo";
import Pkmstats from "./Pkmstats";

const PokemonContainer = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  const getPokemonRandom = async () => {
    const id = Math.floor(Math.random() * 898) + 1;
    await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      // await fetch(`http://localhost:3050/pokemon`)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPokemonRandom();
  }, []);

  return (
    <>
      {pokemon ? (
        <section className="pkmcontainer ">
          <div className="pkmcontainer__imgcontainer pt-4">
            <img
              className="pkmcontainer__img"
              src={pokemon.sprites.front_default}
              alt="front pokemon"
            />
            {pokemon.sprites.back_default && (
              <img
                className="pkmcontainer__img"
                src={pokemon.sprites.back_default}
                alt="back pokemon"
              />
            )}
          </div>
          <h1 className="pkmcontainer__name mt-4">
            {pokemon.name} {`#${pokemon.order}`}
          </h1>
          <div className="pkmcontainer__types mb-4">
            <span
              className={"pkmcontainer__type--" + pokemon.types[0].type.name}
            >
              {pokemon.types[0].type.name}
            </span>
            {pokemon?.types[1] && (
              <span
                className={"pkmcontainer__type--" + pokemon.types[1].type.name}
              >
                {pokemon?.types[1].type.name}
              </span>
            )}
          </div>
          <Pkmstats {...pokemon} />
          <Pkminfo {...pokemon} />
        </section>
      ) : (
        <div className="pkmcontainer__loading">
          <img src="./assets/loading.gif" alt="loading" />
        </div>
      )}
    </>
  );
};

export default PokemonContainer;
