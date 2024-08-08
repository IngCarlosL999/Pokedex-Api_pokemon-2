import { createContext, useState } from "react"
import { formaStats, formatAbilities, formatTypes, getEvolutions, getPokemonDescription, getImgByPokemons } from "../helpers/pokemon";
import axios from "axios";


const PokemonContext = createContext();

const PokemonProvider = ({children}) =>{

    

    const [pokemonDetail,SetPokemonDetail] = useState(null);


    //Mostrar el Modal
    const [showDetailPokemon, setShowDetailPokemon] = useState(false);


    const showPokemon = async (pokemonInfo) =>{
       
        const {data: dataSpecies} = await axios.get(pokemonInfo.species.url)
        const {data: dataEvolutions} = await axios.get(dataSpecies.evolution_chain.url) 
        

        //console.log(pokemonInfo)
        // console.log(dataSpecies)
       // console.log(dataEvolutions)
      
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
            image: getImgByPokemons(sprites)
        });
        setShowDetailPokemon(true);

    }

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
        }}
        
    
    >
        {children}
    </PokemonContext.Provider>
    )
}

export {  PokemonContext, PokemonProvider  }