// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { colorByTypes, colorByText, borderByTypes } from '../constants/Colores';


// const PokemonPreview = ({pokeURL}) => {

//   //Se guarda la informacion de los pokemones en el state
//   const [pokemon, setPokemon] = useState(null);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(()=>{
//     //el props pokeURL viene de PokemonsList, ya la data viene desgrosada se almacena en setPokemon
//     axios
//     .get(pokeURL)
//     .then(({data})=>setPokemon(data))
//     .catch((err)=> console.log(err))
//   },[])

// //se empieza a crear la estructura donde se pintara la informacion del pokemon
//   return (
//     <article  className={`text-center bg-white transition-all  rounded-3xl relative font-semibold capitalize pb-4 shadow-lg shadow-slate-400/10 border-2 ${isHovered && pokemon?.types.length > 0 ? borderByTypes[pokemon.types[0].type.name] : 'border-transparent'} cursor-pointer group grid gap-2`}
//     onMouseEnter={() => setIsHovered(true)}
//     onMouseLeave={() => setIsHovered(false)}
//   >
//         <header className='h-9'>
//           <img
//           className='absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 group-hover:scale-125 transition-transform pixelated'
//            src={pokemon?.sprites.versions["generation-v"]["black-white"].front_default} alt="" />
//         </header>
//         <span className='text-sm text-slate-400'># {pokemon?.id}</span>
//         <h4 className={`text-lg font-bold transition-colors ${isHovered && pokemon?.types.length > 0 ? colorByText[pokemon.types[0].type.name] : ''}`}>  {pokemon?.name}</h4>
//         <ul className='flex gap-2 justify-center'>
//           {pokemon?.types.map(type => 

//           <li 
//           className={`p-1 rounded-md px- text-black text-sm ${colorByTypes[type.type.name]}`}
//           key={type.type.name}>
//           {type.type.name}

//            </li> )}
//         </ul>
//     </article>
//   )
// }

// export default PokemonPreview

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { colorByTypes, colorByText, borderByTypes } from '../constants/Colores';

// const PokemonPreview = ({ pokeURL }) => {
//   const [pokemon, setPokemon] = useState(null);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     axios
//       .get(pokeURL)
//       .then(({ data }) => setPokemon(data))
//       .catch((err) => console.log(err));
//   }, [pokeURL]);

//   const getSafeImageUrl = () => {
//     if (pokemon?.sprites?.versions?.["generation-v"]?.["black-white"]?.front_default) {
//       return pokemon.sprites.versions["generation-v"]["black-white"].front_default;
//     }
//     return ""; // Retorna una cadena vacía si la imagen no está disponible
//   };

//   return (
//     <article className={`text-center bg-white transition-all rounded-3xl relative font-semibold capitalize pb-4 shadow-lg shadow-slate-400/10 border-2 ${isHovered && pokemon?.types?.length > 0 ? borderByTypes[pokemon.types[0].type.name] : 'border-transparent'} cursor-pointer group grid gap-2`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <header className='h-9'>
//         <img
//           className='absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 group-hover:scale-125 transition-transform pixelated'
//           src={getSafeImageUrl()} alt="" />
//       </header>
//       <span className='text-sm text-slate-400'># {pokemon?.id}</span>
//       <h4 className={`text-lg font-bold transition-colors ${isHovered && pokemon?.types?.length > 0 ? colorByText[pokemon.types[0].type.name] : ''}`}>  {pokemon?.name}</h4>
//       <ul className='flex gap-2 justify-center'>
//         {pokemon?.types?.map(type => (
//           <li 
//             className={`p-1 rounded-md text-black text-sm ${colorByTypes[type.type.name]}`}
//             key={type.type.name}>
//             {type.type.name}
//           </li>
//         ))}
//       </ul>
//     </article>
//   );
// };

// export default PokemonPreview;

// import React, { memo, useEffect, useState } from 'react';
// import axios from 'axios';
// import { colorByTypes, colorByText, borderByTypes } from '../constants/Colores';

// const PokemonPreview = ({ pokeURL }) => {
//   const [pokemon, setPokemon] = useState(null);
//   const [isHovered, setIsHovered] = useState(false);
//   const [loading, setLoading] = useState(true); // Estado de carga

//   useEffect(() => {
//     axios
//       .get(pokeURL)
//       .then(({ data }) => {
//         setPokemon(data);
//         setLoading(false); // Finalizar carga
//       })
//       .catch((err) => {
//         console.log(err);
//         setLoading(false); // Finalizar carga en caso de error
//       });
//   }, [pokeURL]);

//   const getSafeImageUrl = () => {
//     if (pokemon?.sprites?.versions?.["generation-v"]?.["black-white"]?.front_default) {
//       return pokemon.sprites.versions["generation-v"]["black-white"].front_default;
//     }
//     return ""; // Retorna una cadena vacía si la imagen no está disponible
//   };

//   return (
//     <article className={`text-center bg-white transition-all rounded-3xl relative font-semibold capitalize pb-4 shadow-lg shadow-slate-400/10 border-2 ${isHovered && pokemon?.types?.length > 0 ? borderByTypes[pokemon.types[0].type.name] : 'border-transparent'} cursor-pointer group grid gap-2`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {loading ? (
//         <div className="flex justify-center items-center h-full">
//           <img 
//             src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" 
//             alt="Cargando..." 
//             className="w-8 h-8 animate-spin imagen" 
//           />
//           <p className="mt-2">Cargando Pokémon...</p>
//         </div>
//       ) : (
//         <>
//           <header className='h-9'>
//             <img
//               className='absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 group-hover:scale-125 transition-transform pixelated'
//               src={getSafeImageUrl()} alt="" />
//           </header>
//           <span className='text-sm text-slate-400'># {pokemon?.id}</span>
//           <h4 className={`text-lg font-bold transition-colors ${isHovered && pokemon?.types?.length > 0 ? colorByText[pokemon.types[0].type.name] : ''}`}>  {pokemon?.name}</h4>
//           <ul className='flex gap-2 justify-center'>
//             {pokemon?.types?.map(type => (
//               <li 
//                 className={`p-1 rounded-md text-black text-sm ${colorByTypes[type.type.name]}`}
//                 key={type.type.name}>
//                 {type.type.name}
//               </li>
//             ))}
//           </ul>
//         </>
//       )}
//     </article>
//   );
// };

// export default PokemonPreview;
import React, { useEffect, useState, memo } from 'react';
import axios from 'axios';
import { colorByTypes, colorByText, borderByTypes } from '../constants/Colores';

const PokemonPreview = memo(({ pokeURL }) => {
  const [pokemon, setPokemon] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const { data } = await axios.get(pokeURL);
        setPokemon(data);

        // Simular un retraso de 1 segundo antes de cambiar el estado de carga
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
    <article className={`text-center bg-white transition-all rounded-3xl relative font-semibold capitalize pb-4 shadow-lg shadow-slate-400/10 border-2 ${isHovered && pokemon?.types?.length > 0 ? borderByTypes[pokemon.types[0].type.name] : 'border-transparent'} cursor-pointer group grid gap-2`}
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
              alt={`${pokemon?.name} sprite`} 
            />
          </header>
          <span className='text-sm text-slate-400'># {pokemon?.id}</span>
          <h4 className={`text-lg font-bold transition-colors ${isHovered && pokemon?.types?.length > 0 ? colorByText[pokemon.types[0].type.name] : ''}`}>  {pokemon?.name}</h4>
          <ul className='flex gap-2 justify-center'>
            {pokemon?.types?.map(type => (
              <li 
                className={`p-1 rounded-md text-black text-sm ${colorByTypes[type.type.name]}`}
                key={type.type.name}>
                {type.type.name}
              </li>
            ))}
          </ul>
        </>
      )}
    </article>
  );
});

export default PokemonPreview;