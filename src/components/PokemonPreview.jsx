import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { colorByTypes, colorByText, borderByTypes } from '../constants/Colores';


const PokemonPreview = ({pokeURL}) => {

  //Se guarda la informacion de los pokemones en el state
  const [pokemon, setPokemon] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(()=>{
    //el props pokeURL viene de PokemonsList, ya la data viene desgrosada se almacena en setPokemon
    axios
    .get(pokeURL)
    .then(({data})=>setPokemon(data))
    .catch((err)=> console.log(err))
  },[])

//se empieza a crear la estructura donde se pintara la informacion del pokemon
  return (
    <article  className={`text-center bg-white transition-all  rounded-3xl relative font-semibold capitalize pb-4 shadow-lg shadow-slate-400/10 border-2 ${isHovered && pokemon?.types.length > 0 ? borderByTypes[pokemon.types[0].type.name] : 'border-transparent'} cursor-pointer group grid gap-2`}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
        <header className='h-9'>
          <img
          className='absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 group-hover:scale-125 transition-transform pixelated'
           src={pokemon?.sprites.versions["generation-v"]["black-white"].front_default} alt="" />
        </header>
        <span className='text-sm text-slate-400'># {pokemon?.id}</span>
        <h4 className={`text-lg font-bold transition-colors ${isHovered && pokemon?.types.length > 0 ? colorByText[pokemon.types[0].type.name] : ''}`}>  {pokemon?.name}</h4>
        <ul className='flex gap-2 justify-center'>
          {pokemon?.types.map(type => 

          <li 
          className={`p-1 rounded-md px- text-black text-sm ${colorByTypes[type.type.name]}`}
          key={type.type.name}>
          {type.type.name}

           </li> )}
        </ul>
    </article>
  )
}

export default PokemonPreview