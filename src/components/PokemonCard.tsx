import '../stylings/PokemonCard.css'

export const PokemonCard = ({pokemon}) => {
    // console.log(pokemon.name)
    return (
        <>
                <div className="pokemon-card p-2 w-fit bg-white  border-second-800
                 rounded-md content-start">
                    <img className="rounded-md col-span-2 w-56 h-full object-cover" src={pokemon.sprites.front_default} alt="no imge found" />
                    <span className="col-span-2 text-black font-medium capitalize">{pokemon.name}</span>
                    <p className="text-xs py-1.5 px-0.5">{pokemon.id}</p>
                    <p className="text-xs col-start-2 py-1.5 px-0.5">{pokemon.id}</p>
                    <p className="text-xs py-1.5 px-0.5">{pokemon.id}</p>
                    <p className="text-xs col-start-2 py-1.5 px-0.5">{pokemon.id}</p>
                </div>
        </>
    )
}
