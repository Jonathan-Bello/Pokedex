import Pokemon from "../models/pokemon";
import Stat from "./Stat";

const Pkmstats = (pokemon: Pokemon) => {
  return (
    <>
      <h2 className="mb-3">Stats</h2>
      <article className="pkmcontainer__stats container">
        <Stat name="HP" value={pokemon?.stats[5].base_stat} />
        <Stat name="Atack" value={pokemon?.stats[4].base_stat} />
        <Stat name="Defense" value={pokemon?.stats[3].base_stat} />
        <Stat name="Sp. Atack" value={pokemon?.stats[2].base_stat} />
        <Stat name="Sp. Def" value={pokemon?.stats[1].base_stat} />
        <Stat name="Speed" value={pokemon?.stats[0].base_stat} />
      </article>
    </>
  );
};

export default Pkmstats;
