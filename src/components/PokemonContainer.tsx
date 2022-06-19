import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pokemon from "../models/pokemon";
import PkmImages from "./PkmImages";
import Pkminfo from "./Pkminfo";
import Pkmstats from "./Pkmstats";

const PokemonContainer = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  const getPokemonRandom = async () => {
    const id = Math.floor(Math.random() * 898) + 1;
    await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
        const pokemons = JSON.parse(localStorage.getItem("pokemons") || "[]");
        pokemons.push(data);
        localStorage.setItem("pokemons", JSON.stringify(pokemons));
        console.log(pokemons);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPokemonRandom();

    const interval = setInterval(() => {
      console.log("This will run every second!");
      getPokemonRandom();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {pokemon ? (
        <section className="pkmcontainer ed-grid s-grid-1 lg-grid-2">
          <PkmImages {...pokemon} />
          <Pkmstats {...pokemon} />
          <Pkminfo {...pokemon} />
          <div className=" ed-grid s-grid-2 lg-grid-1 lg-end mt-4 ms-lg-4 mt-lg-0">
            <div className="s-cross-center s-main-center lg-main-start mb-lg-4">
              <button className="btnPkm" onClick={getPokemonRandom}>
                Mostrar pokémon
              </button>
            </div>
            <div className="s-cross-center s-main-center lg-main-start">
              <Link
                className="btnPkm--ghost s-center s-cross-center s-main-center"
                to={"/historical"}
              >
                Mostrar pokémon guardados
              </Link>
            </div>
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
