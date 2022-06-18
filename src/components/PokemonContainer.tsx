import { useEffect, useState } from "react";
import Pokemon from "../models/pokemon";
import PkmImages from "./PkmImages";
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
        <section className="pkmcontainer ed-grid s-grid-1 lg-grid-2">
          <PkmImages {...pokemon} />
          <Pkmstats {...pokemon} />
          <Pkminfo {...pokemon} />
          <div className="s-center lg-left mt-4 ms-lg-4 mt-lg-0">
            <button className="btnPkm" onClick={getPokemonRandom}>
              Otro pokémon
            </button>
          </div>
        </section>
      ) : (
        <div className="pkmcontainer s-cross-center s-main-center">
          <div className="lds-dual-ring"></div>
        </div>
      )}
    </>
  );
};

export default PokemonContainer;
