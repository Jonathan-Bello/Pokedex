import Pokemon from "../models/pokemon";

const PkmImages = (pokemon: Pokemon) => {
  return (
    <article className="container s-mb-0 lg-mb-2">
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
      <h1 className="pkmcontainer__name mt-4 s-center">
        {pokemon.name} {`#${pokemon.order}`}
      </h1>
      <div className="s-main-center">
        <div className="pkmcontainer__types mb-4">
          <span className={"pkmcontainer__type--" + pokemon.types[0].type.name}>
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
      </div>
    </article>
  );
};

export default PkmImages;
