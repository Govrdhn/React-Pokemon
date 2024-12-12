import '../stylings/PokemonCard.css'

export const PokemonCard = ({ pokemon }) => {
    return (
        <>
            <div className="flex flex-col grow p-2 w-fit bg-white border-second-800
                 rounded-md content-start justify-center">
                <img className="rounded-md col-span-2 w-56 h-full object-cover" src={pokemon.sprites.front_default} alt="no imge found" />
                <div className='grid  bg-emerald-50 rounded-md'>
                    <span className="col-span-2 text-black capitalize font-semibold text-center bg-emerald-400 rounded-md">{pokemon.name}</span>
                    <div className="text-xs py-1.5 px-0.5 flex flex-col items-center">
                        <span>{pokemon.height}</span>
                        <span className='font-semibold'>Height</span>
                    </div>
                    <div className="text-xs py-1.5 col-start-2 px-0.5 flex flex-col items-center">
                        <span>{pokemon.weight}</span>
                        <span className='font-semibold'>Weight</span>
                    </div>
                    <div className="text-xs py-1.5 px-0.5 flex flex-col items-center">
                        <span>{pokemon.base_experience}</span>
                        <span className='font-semibold'>Experience</span>
                    </div>
                    <div className="text-xs py-1.5 col-start-2 px-0.5 flex flex-col items-center">
                        <span>{pokemon.moves.length}</span>
                        <span className='font-semibold'>Moves</span>
                    </div>
                </div>
            </div>
        </>
    )
}
