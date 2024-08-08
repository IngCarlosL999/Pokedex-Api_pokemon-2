import { IconCurrencyXrp } from '@tabler/icons-react';
import { colorByTypes, colorByText, borderByTypes } from '../constants/Colores';



const ModalPokemon = ({ showModalPokemon, closeModalPokemon, pokemonDetalle }) => {
  console.log(pokemonDetalle)

  // let pokeId = pokemonDetalle?.id.toString();
  // if (pokeId.length === 1) {
  //     pokeId = "00" + pokeId;
  // } else if (pokeId.length === 2) {
  //     pokeId = "0" + pokeId;
  // }

 

  return (
    <section 
      className={`fixed top-0 left-0 right-0 h-screen 
                  transition-opacity duration-500 ${pokemonDetalle?.types && pokemonDetalle?.types.length > 0 
                    ? colorByTypes[pokemonDetalle.types[0]] 
                    : ''}
                  ${showModalPokemon ? "visible opacity-100" : "invisible opacity-0"}`}>
      
      <button 
        onClick={closeModalPokemon}
        className='bg-white absolute top-4 right-4 p-1 rounded-lg hover:opacity-80 transition-opacity'>
        <IconCurrencyXrp size={32} stroke={4} />
      </button>

      <article 
    className={`bg-white h-[85%] w-full absolute rounded-tl-3xl rounded-tr-3xl 
                transition-all duration-500 overflow-y-auto grid content-start 
                ${showModalPokemon ? "bottom-0" : "-bottom-full"}`}>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-4" >
      
      {/* Card 1 */}
      <div className={`rounded-lg shadow-lg p-6 flex flex-col border-4 ${pokemonDetalle?.types && pokemonDetalle?.types.length > 0 
    ? borderByTypes[pokemonDetalle.types[0]] 
    : ''}`}>
          <div className={"flex justify-between items-center mb-4 "}>
              <h2 className={`font-roboto text-2xl font-bold capitalize ${pokemonDetalle?.types && pokemonDetalle?.types.length > 0 
                  ? colorByText[pokemonDetalle.types[0]] 
                  : 'text-gray-500'}`}>
                  {pokemonDetalle?.name}
              </h2>
              <span className="text-sm text-slate-400"># {pokemonDetalle?.id}</span>
          </div>
          <img className='pixelated w-32 h-32 object-contain mx-auto ' src={pokemonDetalle?.image} alt={pokemonDetalle?.name} />
          <div className="flex space-x-2 mt-2 justify-center capitalize">
              {pokemonDetalle?.types.map((type) => (
                  <span key={type} className={`inline-block px-2 py-1 text-white rounded ${colorByTypes[type]}`}>
                      {type}
                  </span>
              ))}
          </div>
      </div>

      {/* Card 2 */}
      <div className={`rounded-lg shadow-lg p-6 flex flex-col border-4 ${pokemonDetalle?.types && pokemonDetalle?.types.length > 0 
    ? borderByTypes[pokemonDetalle.types[0]] 
    : ''}`}>
          <h2 className="text-xl font-bold mb-2">Información del Pokémon</h2>
          <p className="text-gray-700 text-xs"> {pokemonDetalle?.description} </p>

          {/**Altura y peso */}
          <section className=' grid grid-cols-2 mt-2 gap-1 text-center'>
              <div >
                <h4 className='font-bold  capitalize'>Height</h4>
                <span className='bg-slate-200 block rounded-full'>{pokemonDetalle?.height} cm</span>
              </div>
              <div>
              <h4 className='font-bold  capitalize'>Weight</h4>
              <span className='  bg-slate-200 block rounded-full '>{pokemonDetalle?.weight} g</span>
              </div>
          </section>

          {/**Habilidades */}
          <section className='mt-2 text-center'>
                <h4 className='font-bold  capitalize'>Abilities</h4>
              <div className=' grid grid-cols-2 mt-2 gap-1 capitalize'>
                {
                  pokemonDetalle?.abilities.map( (ability)  => (
                    <div 
                    key={ability} 
                    className='bg-slate-200 block rounded-full'>
                    <span>{ability}</span>
                </div>
                  ))}
              </div>
          </section>

          {/*stats*/}
          <section className='mt-2'>
            <h1>Stats</h1>
              <ul>
                <li>
                  stat
                </li>
              </ul>
          </section>


      </div>

      {/* Card 3 */}
      <div className={`rounded-lg shadow-lg p-6 flex flex-col border-4 ${pokemonDetalle?.types && pokemonDetalle?.types.length > 0 
    ? borderByTypes[pokemonDetalle.types[0]] 
    : ''}`}>
          <h2 className="text-2xl font-bold mb-2">Evolución Pokémon</h2>
          <section>
            <h4>evoluciones</h4>
          </section>
          
      </div>
    </div>
</article>   
    </section>
  );
}

export default ModalPokemon;
