
import React, { useEffect, useState, memo } from 'react';
import axios from 'axios';
import { colorByTypes, colorByText, borderByTypes } from '../constants/Colores';


const PokemonPreview = memo(({ pokeURL, onClickShowModal }) => {
  const [pokemon, setPokemon] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tooltip, setTooltip] = useState({ visible: false, name: '' });
  


  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const { data } = await axios.get(pokeURL);
        setPokemon(data);
        

        // Simular un retraso de 2 segundos antes de cambiar el estado de carga
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (err) {
        console.log(err);
        setError("Error al cargar los datos del Pokémon.");
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [pokeURL]);

  const getImageUrl = () => {
    return pokemon?.sprites?.versions?.["generation-v"]?.["black-white"]?.front_default || "url-de-imagen-por-defecto";
  };

  // Determinar el color del texto de carga
  const loadingTextColor = loading && pokemon?.types && pokemon.types.length > 0 
    ? colorByText[pokemon.types[0].type.name] 
    : 'text-gray-500'; // Color por defecto si no hay tipos

  return (
    <article 
      //onClick={onClickShowModal}
   onClick={()=>onClickShowModal(pokemon)}//aqui se pasa la informacion a pokemoncontext a traves del props y se la pasa a pokemonInfo
      className={`text-center bg-white transition-all rounded-3xl relative font-semibold capitalize pb-4 shadow-lg shadow-slate-400/10 border-4 ${isHovered && pokemon?.types?.length > 0 ? borderByTypes[pokemon.types[0].type.name] : 'border-transparent'} cursor-pointer group grid gap-2`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {loading ? (
        <div className="flex flex-col justify-center items-center h-full">
          <img 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" 
            alt="Cargando..." 
            className="w-8 h-8 animate-spin" 
          />
          <p className={`mt-2`}>Cargando Pokémon... <span className={`mt-2 ${loadingTextColor}`}>{pokemon?.name}</span></p>
        </div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <>
          <header className='h-9'>
            <img
              className='absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 group-hover:scale-125 transition-transform pixelated'
              src={getImageUrl()} 
              alt={`${pokemon?.name}`} 
            />
          </header>
          <span className='text-sm text-slate-400'># {pokemon?.id}</span>
          <h4 className={`text-lg font-bold transition-colors ${isHovered && pokemon?.types?.length > 0 ? colorByText[pokemon.types[0].type.name] : ''}`}>  {pokemon?.name}</h4>
          <ul className='flex gap-2 justify-center mt-2'>
            {pokemon?.types?.map(type => (
              <li 
                className={`p-2 rounded-md text-black text-sm flex items-center ${colorByTypes[type.type.name]}`}
                key={type.type.name}
                onMouseEnter={() => setTooltip({ visible: true, name: type.type.name })}
                onMouseLeave={() => setTooltip({ visible: false, name: '' })}
              >
                <img 
                  src={`./${type.type.name}.png`} 
                  alt={type.type.name}
                  className={`w-4 h-4 mr-1`}
                />
                
                {tooltip.visible && tooltip.name === type.type.name && (
                  <div className="absolute bg-gray-700 text-white text-xs rounded px-2 py-1 -mt-8 transition-opacity duration-200">
                    {tooltip.name}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </article>
  );
});

export default PokemonPreview;