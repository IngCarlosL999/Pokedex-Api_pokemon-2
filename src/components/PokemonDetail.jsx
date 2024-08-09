import {
  colorByTypes,
  colorByText,
  borderByTypes,
  colorByStat,
} from "../constants/Colores";

import Evolutions from "./Evolutions";

const PokemonDetail = ({ pokemonDetalle }) => {
  return (
    <>
      <header className="absolute  left-1/2 -translate-x-1/2 -translate-y-[90%] z-20 scale-[180%]">
        <img className="pixelated" src={pokemonDetalle?.image} alt={pokemonDetalle?.name} />
      </header>
      <div className="pt-12 overflow-y-auto px-4 grid gap-2 content-start h-full hidden-scroll">
        <span className="text-slate-400 text-sm font-semibold ">
          N° {pokemonDetalle?.id}
        </span>
        <h4
          className={`font-bold text-2xl capitalize ${
            colorByText[pokemonDetalle?.types[0]]
          } `}
        >
          {pokemonDetalle?.name}
        </h4>

        <ul className="flex gap-2 justify-center">
          {pokemonDetalle?.types.map((type) => (
            <li
              className={`p-1 rounded-md px-2 text-white text-sm ${colorByTypes[type]}`}
              key={type}
            >
              {type}
            </li>
          ))}
        </ul>

        <div>
          <h4 className="font-bold text-sm capitalize mt-2 ">
            Información del Pokémon
          </h4>
          <p className="text-slate-400">{pokemonDetalle?.description}</p>
        </div>

        <section className="grid grid-cols-2 gap-4">
          <div className=" grid gap-2">
            <h4 className="font-bold  capitalize ">height</h4>
            <span className="bg-slate-100 block rounded-full p-1">
              {pokemonDetalle?.height}
            </span>
          </div>
          <div className=" grid gap-2">
            <h4 className="font-bold  capitalize ">weight</h4>
            <span className="bg-slate-100 block rounded-full p-1">
              {pokemonDetalle?.weight}
            </span>
          </div>
        </section>

        <section className="grid gap-2">
          <h4 className="font-bold capitalize">Abilities</h4>
          <ul className="grid grid-cols-2 gap-4">
            {pokemonDetalle?.abilities.map((ability) => (
              <li
                key={ability}
                className="bg-slate-100 block rounded-full p-1 capitalize"
              >
                <span>{ability}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-2">
          <h4 className="font-bold capitalize">stats</h4>
          <ul className="flex justify-center gap-2 flex-wrap ">
            {pokemonDetalle?.stats.map((stat) => (
              <li
                className={`p-1 rounded-full ${colorByStat[stat.name]}`}
                key={stat.name}
              >
                <div className=" rounded-full w-[26px] aspect-square grid place-content-center ">
                  <span className="text-[10px] text-white font-semibold">
                    {stat.name}
                  </span>
                </div>

                <span className="font-bold text-xs">{stat.base_stat}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className=" mt-2">
          <h4 className="font-bold capitalize">Evolutions</h4>
          <Evolutions evolutionsSend={pokemonDetalle?.evolutions ?? []} />
        </section>
      </div>
    </>
  );
};

export default PokemonDetail;
