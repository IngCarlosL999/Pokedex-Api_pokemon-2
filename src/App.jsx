
import usePokemonContext from "./hooks/usePokemonContext";

import Aside from "./components/Aside";
import ModalPokemon from "./components/ModalPokemon";
import Pokemons from "./components/Pokemons";



function App() {

  const {showDetailPokemon, closePokemonDetail, pokemonDetail} = usePokemonContext();
 

  return (
    <section className="bg-[#F6F8FC] h-screen font-roboto overflow-y-auto">
      <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px] ">
        <Pokemons />
        <Aside />
        <ModalPokemon 
        showModalPokemon={showDetailPokemon} 
        closeModalPokemon={closePokemonDetail}
        pokemonDetalle = {pokemonDetail}
        /> 
        

      </main>
    </section>
  );
}

export default App;
