import { getEvolutionData } from "../services/pokemonServices";

const formaStats = (stats) =>{

    const nameTypes ={
        hp: "HP",
        attack: "ATK",
        defense: "DEF",
        "special-attack": "SPA",
        "special-defense": "SPD",
        speed: "SPD"


    }
    const newStats = stats.map(({stat, base_stat}) =>
    ({
        name: nameTypes[stat.name],
        base_stat

    }))

    newStats.push({
        name: "TOT",
        base_stat: newStats.reduce((acc, stat)=> stat.base_stat + acc, 0)
    })
   return newStats
};


const formatTypes = (types) => types.map((type)=> type.type.name)

const formatAbilities = (abilities) => abilities.map((ability)=> ability.ability.name)

const getPokemonDescription = (pokemonSpecie) => pokemonSpecie.flavor_text_entries[1].flavor_text


const getEvolutions = async (evolutionsInfo)=>{
   
    const evolutions = []
    let evolutionData = evolutionsInfo.chain;

    do {
        const evoDetails = evolutionData["evolution_details"][0]

        evolutions.push({
            name: evolutionData.species.name,
            min_level: evoDetails?.min_level ?? 1,

        })
        // vuelvo a redifinir la data
        evolutionData =  evolutionData.evolves_to[0]

    } while (evolutionData)//mientras halla informacion en evoluvion data se sigue ejecutando

    const promises =  getEvolutionData(evolutions)
    try {
        const responses = await Promise.allSettled(promises)
        asignarInfoEvolutions(responses, evolutions)

    } catch (error) {
        console.log(error)
    }
   

    return evolutions;
};

   
const asignarInfoEvolutions = (responses , evolutions) =>{
    responses.forEach((response, index)=>{
        if(response.status === "fulfilled" ){
            evolutions[index].image = response.value.data.sprites.versions["generation-v"]["black-white"].front_default;
            evolutions[index].pokemonInfo =  response.value.data;
        }
    });
}


const getImgByPokemons = (sprites) =>{
  return (sprites.versions["generation-v"]["black-white"].animated.front_default ?? sprites.versions["generation-v"]["black-white"].front_default)
}

export{
    formaStats,
    formatTypes,
    formatAbilities, 
    getPokemonDescription,
    getEvolutions,
    asignarInfoEvolutions,
    getImgByPokemons
}