import { createContext, useState } from "react"
import { formaStats, formatAbilities, formatTypes, getEvolutions, getPokemonDescription, getImgByPokemons } from "../helpers/pokemon";
import axios from "axios";


const PokemonContext = createContext();

const PokemonProvider = ({children}) =>{

    

    const [pokemonDetail,SetPokemonDetail] = useState(null);
    //Mostrar el Modal
    const [showDetailPokemon, setShowDetailPokemon] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    

    const showPokemon = async (pokemonInfo) =>{
        setIsLoading(true)
       
        const {data: dataSpecies} = await axios.get(pokemonInfo.species.url)
        const {data: dataEvolutions} = await axios.get(dataSpecies.evolution_chain.url) 
          
        const {id, name, height, weight, types, stats, abilities,sprites} = pokemonInfo;

      const evolutions = await getEvolutions(dataEvolutions)

        
        SetPokemonDetail({
            id,
            name,
            height,
            weight,
            stats: formaStats(stats),
            types: formatTypes(types),
            abilities: formatAbilities(abilities),
            description: getPokemonDescription(dataSpecies),
            evolutions,
            image: getImgByPokemons(sprites),
            isLoading
        });
        setShowDetailPokemon(true);
        setTimeout(()=>{
          setIsLoading(false)
        }, 500)
      };
    
    

    const closePokemonDetail = () =>{
        setShowDetailPokemon(false);
    }

    return (
    <PokemonContext.Provider
        
        value={{
            showDetailPokemon,
            showPokemon,
            closePokemonDetail,
            pokemonDetail,
            isLoading
        }}
        
    
    >
        {children}
    </PokemonContext.Provider>
    )
}

export {  PokemonContext, PokemonProvider  }