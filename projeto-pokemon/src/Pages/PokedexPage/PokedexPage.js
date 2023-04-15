import React from "react"
import { PokeMain, ListTitle, Display } from "../PokemonListPage/PokemonListStyle"
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard"


export function PokeDexPage (){
    return(
        <div>
            <PokeMain><ListTitle>Meus Pokémons</ListTitle>
            <Display>
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