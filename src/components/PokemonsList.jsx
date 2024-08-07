import React from 'react'
import PokemonPreview from './PokemonPreview'
import usePokemonContext from '../hooks/usePokemonContext'


// en esta parte se genera la lista de los pokemones en pokemonpreview
//el prop poke viene de Pokemons
const PokemonsList = ({poke}) => {
    

  const {showPokemonById} = usePokemonContext()
 

  return (
    //aqui en la class generamos las columnas dependiendo del espacio
    <section className='pt-14 grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-4 gap-y-14'>
    {/**aqui se empieza a renderizar los pokemones tiene el .map */}
    {poke.map((pokemon) => 
    (
    // como key se usa el poke.url la url viene de la api de pokemon de cada uno de los pokemones, se le pasa la props pokeURL a PokemonPreview aqui se usa el compomente PokemonPreview
    <PokemonPreview key={pokemon.url} pokeURL={pokemon.url} 
    onClickShowModal={showPokemonById} />
    
    ))}

    </section>
  )
}

export default PokemonsList


// import React, { useState } from 'react';
// import PokemonPreview from './PokemonPreview';

// // El prop poke viene de la API de Pokémon
// const PokemonsList = ({ poke }) => {
//   // Estado para el índice del Pokémon que está siendo hovered
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     // Clase para generar columnas dependiendo del espacio disponible
//     <section className='pt-14 grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-4 gap-y-14'>
//       {/** Renderiza los Pokémon usando .map */}
//       {poke.map((pokemon, index) => (
//         // Aplica un desenfoque a los Pokémon que no están siendo hovered
//         <div 
//           key={pokemon.url} 
//           className={`transition-all ${hoveredIndex !== null && hoveredIndex !== index ? 'filter blur-sm' : ''}`}
//           onMouseEnter={() => setHoveredIndex(index)} // Establece el índice cuando se hace hover
//           onMouseLeave={() => setHoveredIndex(null)} // Resetea el índice cuando se sale del hover
//         >
//           <PokemonPreview 
//             pokeURL={pokemon.url} 
//             isHovered={hoveredIndex === index} // Pasa si está hovered
//             onHover={(hovered) => setHoveredIndex(hovered ? index : null)} // Pasa la función para manejar el hover
//           />
//         </div>
//       ))}
//     </section>
//   );
// }

// export default PokemonsList;