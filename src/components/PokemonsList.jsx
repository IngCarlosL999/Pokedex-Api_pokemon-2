import React from 'react'
import PokemonPreview from './PokemonPreview'


// en esta parte se genera la lista de los pokemones en pokemonpreview
//el prop poke viene de Pokemons
const PokemonsList = ({poke}) => {
  return (
    //aqui en la class generamos als columnas dependiendo del espacio
    <section className='pt-14 grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-4 gap-y-14'>
    {/**aqui se empieza a renderizar los pokemones tiene el .map */}
    {poke.map(pokemon => 
    (
    // como key se usa el poke.url la url viene de la api de pokemon de cada uno de los pokemones, se le pasa la props pokeURL a PokemonPreview aqui se usa el compomente PokemonPreview
    <PokemonPreview key={pokemon.url} pokeURL={pokemon.url}/>
    
    ))}

    </section>
  )
}

export default PokemonsList