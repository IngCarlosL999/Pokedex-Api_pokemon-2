import { useEffect, useState } from 'react';
import { IconSearch } from '@tabler/icons-react';
import axios from 'axios';
import PokemonsList from './PokemonsList';

const Pokemons = () => {
    const [allPokemons, setAllPokemons] = useState([]);
    const [pokemonNameSearch, setPokemonNameSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const pokemonsPerPage = 15;

    const filteredPokemons = allPokemons.filter(pokemon => 
        pokemon.name.toLowerCase().startsWith(pokemonNameSearch.toLowerCase())
    );

    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = filteredPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

    const handleSearchPokemonName = (e) => {
        setPokemonNameSearch(e.target.value.toLowerCase());
        setCurrentPage(1); // Reset to the first page on new search
    };

    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=898";
        axios
            .get(url)
            .then(({ data }) => setAllPokemons(data.results))
            .catch((err) => console.log(err));
    }, []);

    const totalPages = Math.ceil(filteredPokemons.length / pokemonsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    return (
        <section className='p-4 py-5'>
            <form>
                <div className='bg-white p-4 flex rounded-2xl text-lg'>
                    <input
                        className='outline-none flex-1'
                        type="text"
                        autoComplete='off'
                        placeholder='Search your Pokemon'
                        name='pokemonNameSearch'
                        onChange={handleSearchPokemonName}
                    />
                    <button className='bg-red-600 p-2 rounded-xl shadow-lg shadow-red-600/50 hover:bg-red-400 transition-colors'>
                        <IconSearch color='white' stroke={3} />
                    </button>
                </div>
            </form>
            
            <div className='flex justify-center items-center mt-4 gap-4'>
                {/* Solo se muestra el prev si es mayor que 0 */}
                {filteredPokemons.length > 0 && currentPage > 1 && (
                    <button onClick={handlePrevPage} className='bg-gray-300 p-2 rounded-lg hover:bg-blue-400'>
                        Prev
                    </button>
                )}

                <div className='flex gap-2 rounded-lg'>
                    {currentPage > 1 && (
                        <button
                            onClick={() => handlePageClick(currentPage - 1)}
                            className='bg-gray-300 p-3 rounded-full'
                        >
                            {currentPage - 1}
                        </button>
                    )}
                    <span className='bg-red-600 text-white p-3 rounded-lg'>
                        {currentPage}
                    </span>
                    {currentPage < totalPages && (
                        <button
                            onClick={() => handlePageClick(currentPage + 1)}
                            className='bg-gray-300 p-3 rounded-full'
                        >
                            {currentPage + 1}
                        </button>
                    )}
                </div>

                {/* Solo se muestra el next si es mayor que 0 */}
                {filteredPokemons.length > 0 && currentPage < totalPages && (
                    <button onClick={handleNextPage} className='bg-gray-300 p-2 rounded-lg hover:bg-blue-400 transition-colors'>
                        Next
                    </button>
                )}
            </div>

            {filteredPokemons.length === 0 ? (
                <div className='flex flex-col items-center mt-8'>
                    <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' alt='Pokemon not found' className='w-32 h-32' />
                    <h2 className='text-2xl font-bold mt-4'>Pokemon not found</h2>
                </div>
            ) : (
                <PokemonsList poke={currentPokemons} />
            )}
        </section>
    );
};

export default Pokemons;