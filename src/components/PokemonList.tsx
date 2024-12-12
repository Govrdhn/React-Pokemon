import { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";

function PokemonList() {

    const [pokemonData, setPokemonData]: any[] = useState([]);

    const API = "https://pokeapi.co/api/v2/pokemon?limit=24";
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
            <div className="h-dvh w-dvw flex flex-col gap-2 items-center">
                <header className="p-4 flex justify-center items-center font-semibold text-2xl">Pokemon List</header>
                <div className="mb-3 border-2 border-emerald-600 bg-emerald-600 rounded-md w-64 flex">
                    <input type="text" placeholder="Search your Pokemon" className="bg-white p-1 rounded-md outline-none" />
                </div>
                <div className="grid grid-cols-4 gap-2">
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