
import usePokemonContext from "./hooks/usePokemonContext";

import Aside from "./components/Aside";
import ModalPokemon from "./components/ModalPokemon";
import Pokemons from "./components/Pokemons";



function App() {

  const {showDetailPokemon, closePokemonDetail} = usePokemonContext();
 

  return (
    <section className="bg-[#F6F8FC] h-screen font-outfit overflow-y-auto">
      <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px] ">
        <Pokemons />
        <Aside />
        <ModalPokemon 
        showModalPokemon={showDetailPokemon} 
        closeModalPokemon={closePokemonDetail}/> 
        {/**? Aqui se le pasa los props para la apertura y cierre del modal */}
      </main>
    </section>
  );
}

export default App;
