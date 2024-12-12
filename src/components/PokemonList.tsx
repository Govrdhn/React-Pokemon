import { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";

function PokemonList() {

    const [pokemonData, setPokemonData]: any[] = useState([]);

    const API = "https://pokeapi.co/api/v2/pokemon?limit=201";
    const [loading, setloading] = useState(true)

    const fetchPokemon = async () => {
        try {
            let res = await fetch(API);
            const data = await res.json();

            let responseData = await data.results.map(async (curpokemon: any) => {
                const result = await fetch(curpokemon.url);
                const data = await result.json();
                return data;
            })

            const pokemons = await Promise.all(responseData);
            console.log(pokemons)
            setPokemonData(pokemons);
            setloading(false)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchPokemon();
    }, [])

    if (loading) {
        return <div>loading..</div>
    }

    return (
        <>
            <div className="flex flex-col gap-2 items-center">
                <header className="p-4 flex justify-center items-center font-semibold text-2xl">Pokemon List</header>
                <div className="mb-3 border-2 border-emerald-600 bg-emerald-600 rounded-md flex">
                    <input type="text" placeholder="Search your Pokemon" className="bg-white grow p-1 px-3 rounded-md outline-none" />
                    <div className="flex items-center justify-center p-1.5 text-white">
                        <svg width="17" height="17" viewBox="0 0 78 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M63.375 31.6875C63.375 38.6801 61.1051 45.1395 57.2812 50.3801L76.568 69.682C78.4723 71.5863 78.4723 74.6789 76.568 76.5832C74.6637 78.4875 71.5711 78.4875 69.6668 76.5832L50.3801 57.2812C45.1395 61.1203 38.6801 63.375 31.6875 63.375C14.1832 63.375 0 49.1918 0 31.6875C0 14.1832 14.1832 0 31.6875 0C49.1918 0 63.375 14.1832 63.375 31.6875ZM31.6875 53.625C34.5684 53.625 37.421 53.0576 40.0826 51.9551C42.7442 50.8526 45.1626 49.2367 47.1997 47.1997C49.2367 45.1626 50.8526 42.7442 51.9551 40.0826C53.0576 37.421 53.625 34.5684 53.625 31.6875C53.625 28.8066 53.0576 25.954 51.9551 23.2924C50.8526 20.6308 49.2367 18.2124 47.1997 16.1753C45.1626 14.1383 42.7442 12.5224 40.0826 11.4199C37.421 10.3174 34.5684 9.75 31.6875 9.75C28.8066 9.75 25.954 10.3174 23.2924 11.4199C20.6308 12.5224 18.2124 14.1383 16.1753 16.1753C14.1383 18.2124 12.5224 20.6308 11.4199 23.2924C10.3174 25.954 9.75 28.8066 9.75 31.6875C9.75 34.5684 10.3174 37.421 11.4199 40.0826C12.5224 42.7442 14.1383 45.1626 16.1753 47.1997C18.2124 49.2367 20.6308 50.8526 23.2924 51.9551C25.954 53.0576 28.8066 53.625 31.6875 53.625Z"
                                fill="currentColor" />
                        </svg>
                    </div>
                </div>
                <div className="flex flex-wrap grid-cols-5 gap-2 grow px-2">
                    {
                        pokemonData.map((curpokemon: any) => {
                            console.log(curpokemon)
                            return (
                                <PokemonCard key={curpokemon.id} pokemon={curpokemon}></PokemonCard>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default PokemonList;