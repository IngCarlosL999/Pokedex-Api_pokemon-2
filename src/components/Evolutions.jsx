
import usePokemonContext from '../hooks/usePokemonContext'


const Evolutions = ({ evolutionsSend }) => {

  const {showPokemon} = usePokemonContext() //uso el pokemoncontext para buscar la informacion

  return (
    <div>
      {evolutionsSend.map((evolution, index) => (
        <article className="items-center grid justify-center" key={evolution.name}>
          {index !== 0 && (
            <div className="bg-slate-200 p-2 rounded-full text-sm font-bold">
              <span>Lv. {evolution.min_level}</span>
            </div>
          )}
          <button onClick={()=>showPokemon(evolution.pokemonInfo)} className="hover:bg-slate-100 m-2 transition-colors rounded-3xl">
            <img src={evolution.image} alt="" />
          </button>
        </article>
      ))}
    </div>
  );
};

export default Evolutions;
