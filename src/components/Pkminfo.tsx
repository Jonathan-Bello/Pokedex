import Pokemon from "../models/pokemon";

const Pkminfo = (pokemon: Pokemon) => {
  return (
    <article className="pkmcontainer__info container">
      <div className="row">
        <div className="col">
          <h4>PokeInfo</h4>
          <p className="">
            <span>Height: </span>
            {pokemon.height}
          </p>
          <p className="">
            <span>Weight: </span>
            {pokemon.weight}
          </p>
          <p className="">
            <span>Base experience: </span>
            {pokemon.base_experience}
          </p>
        </div>
        <div className="pkmcontainer__abilities col">
          <h4>Abilities</h4>
          <p>{pokemon?.abilities[0].ability.name}</p>
          {pokemon?.abilities[1] ? (
            <p>{pokemon?.abilities[1].ability.name}</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </article>
  );
};

export default Pkminfo;
