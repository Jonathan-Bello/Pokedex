import { useState } from "react";
import { Link } from "react-router-dom";
import Pokemon from "../models/pokemon";

const Pkmhistorial = () => {
  const [pkms] = useState<Pokemon[]>(
    localStorage.getItem("pokemons")
      ? JSON.parse(localStorage.getItem("pokemons") || "[]")
      : []
  );

  return (
    <section className="ed-grid">
      {pkms.length > 0 ? (
        <ul className="pkmhistorial ed-grid s-grid-1 lg-grid-2">
          {pkms.map((pkm, index) => (
            <li key={index} className="s-main-start s-cross-center">
              <img src={pkm.sprites.front_default} alt={pkm.name} />
              <p>{pkm.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="pkmcontainer s-cross-center s-main-center">
          <div className="lds-dual-ring"></div>
        </div>
      )}

      <Link className="btnPkm" onClick={() => localStorage.clear()} to={"/"}>
        clear
      </Link>
    </section>
  );
};

export default Pkmhistorial;
