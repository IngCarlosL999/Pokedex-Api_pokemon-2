import { useEffect, useState } from 'react';
import { IconSearch } from '@tabler/icons-react';
import axios from 'axios';
import PokemonsList from './PokemonsList';

const Pokemons = () => {
    const [allPokemons, setAllPokemons] = useState([]);
    const [pokemonNameSearch, setPokemonNameSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState(null);
    const pokemonsPerPage = 30;

    const filteredPokemons = allPokemons.filter(pokemon => 
        pokemon.name.toLowerCase().startsWith(pokemonNameSearch.toLowerCase())
    );

    const totalFiltered = filteredPokemons.length;
    const totalPages = Math.ceil(totalFiltered / pokemonsPerPage);

    // Asegurarse de que currentPage no exceda el total de páginas
    const validPage = Math.max(1, Math.min(currentPage, totalPages));

    const indexOfLastPokemon = validPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = filteredPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

    const handleSearchPokemonName = (e) => {
        setPokemonNameSearch(e.target.value);
        setCurrentPage(1); // Reiniciar a la primera página en una nueva búsqueda
    };

    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=898";
        axios.get(url)
            .then(({ data }) => {
                
                setAllPokemons(data.results);
                setError(null); // Resetea el error si la llamada es exitosa
            })
            .catch((err) => {
                console.error(err);
                setError("Error al cargar los Pokémon. Intenta de nuevo más tarde.");
            });
    }, []);

    const handleNextPage = () => {
        if (validPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (validPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    return (
        <section className='p-4 py-5'>
            {error && <div className="text-red-500">{error}</div>}
            <form>
                <div className='bg-white p-4 flex rounded-2xl text-lg'>
                    <input
                        className='outline-none flex-1'
                        type="text"
                        autoComplete='off'
                        placeholder='Busca tu Pokémon'
                        onChange={handleSearchPokemonName}
                    />
                    <button type="button" className='bg-red-600 p-2 rounded-xl shadow-lg shadow-red-600/50 hover:bg-red-400 transition-colors'>
                        <IconSearch color='white' stroke={3} />
                    </button>
                </div>
            </form>
            
            <div className='flex justify-center items-center mt-4 gap-4'>
                {totalFiltered > 0 && validPage > 1 && (
                    <button onClick={handlePrevPage} className='bg-gray-300 p-2 rounded-lg hover:bg-blue-400'>
                        Prev
                    </button>
                )}

                <div className='flex gap-2 rounded-lg'>
                    {validPage > 1 && (
                        <button
                            onClick={() => handlePageClick(validPage - 1)}
                            className='bg-gray-300 p-3 rounded-full'
                        >
                            {validPage - 1}
                        </button>
                    )}
                    <span className='bg-red-600 text-white p-3 rounded-lg'>
                        {validPage}
                    </span>
                    {validPage < totalPages && (
                        <button
                            onClick={() => handlePageClick(validPage + 1)}
                            className='bg-gray-300 p-3 rounded-full'
                        >
                            {validPage + 1}
                        </button>
                    )}
                </div>

                {totalFiltered > 0 && validPage < totalPages && (
                    <button onClick={handleNextPage} className='bg-gray-300 p-2 rounded-lg hover:bg-blue-400 transition-colors'>
                        Next
                    </button>
                )}
            </div>

            {totalFiltered === 0 ? (
                <div className='flex flex-col items-center mt-8'>
                    <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/25.png' alt='Pokémon no encontrado' className='w-32 h-32 pixelated ' />
                    <h2 className='text-2xl font-bold mt-1'>Pokémon no encontrado</h2>
                </div>
            ) : (
                <PokemonsList poke={currentPokemons} />
            )}
        </section>
    );
};

export default Pokemons;