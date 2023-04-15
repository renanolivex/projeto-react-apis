import React from "react"
import { PokeMain, ListTitle, Display } from "./PokemonListStyle"
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard"

export function PokemonList (){
    return(
        <div>

           
            <PokeMain><ListTitle>Todos Pokémons</ListTitle>

            <Display>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>

            </Display>
            </PokeMain>
        </div>

    )



}