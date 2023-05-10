import React, { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"
import { PokemonCard } from "../../Components/pokemonCard/PokemonCard"
import { Display, ListTitle, PokeMain } from "./PokemonListStyle"


export function PokemonList (){
    const context = useContext(GlobalContext)
    const {pokemons, pokedex}= context
   

    return(
        <div>
         
            <PokeMain><ListTitle>Todos Pokémons</ListTitle>

            <Display>
             {pokemons.filter((pokemon)=>!pokedex.find((pokemonPokedex)=>pokemon.name === pokemonPokedex.name))
             .map((pokemon)=>{
                return <PokemonCard key={pokemons.id} pokemons={pokemons} pokemon={pokemon} />
            })
            }

            </Display>
            </PokeMain>
        </div>

    )



}