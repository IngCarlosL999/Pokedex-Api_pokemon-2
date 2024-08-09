
import PokemonDetail from './PokemonDetail';


const Aside = ({ pokemonDetalle, isLoading }) => {

  return (
    <section className="hidden lg:block sticky top-0 h-screen overflow-hidden">
      <article className={`absolute bottom-0 bg-white w-full h-[85%] rounded-tl-3xl rounded-tr-3xl text-center transition-all duration-500 ${pokemonDetalle && !isLoading ? "left-0" : "left-[50vw]"} `}>
      <PokemonDetail pokemonDetalle={pokemonDetalle} />
      </article>
      
      
      <article className={`absolute bg-white  w-full h-[85%] bottom-0 rounded-tl-3xl rounded-tr-3xl text-center grid place-content-center transition-all duration-500 ${pokemonDetalle  ?  "left-[50vw]" : "left-0"}`}>
            <header>
                <img 
                className="absolute  left-1/2 -translate-x-1/2 -translate-y-[70%] top-0  scale-[60%] " 
                src="/no-pokemon-selected.png" alt="" />
            </header>
            <span className="text-lg text-slate-400 px-20">
                Select a Pokemon to display here.
            </span>
      </article>

      
      {/**Loader */}
      <div className="w-[40px] -z-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <img className="contrast-50 animate-spin" src="/pokeball-icon.png" alt="" />
      </div>

    </section>
  );
};

export default Aside;
