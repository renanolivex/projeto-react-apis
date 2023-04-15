import React from "react"
import { PokeCard, MainCard,CardButton, PokeName, PokeNumber, PokeType, PokeDetails, TypeDiv } from "./PokemonCardStyle"

export function PokemonCard (){
    return(
        <div>
            <MainCard>

            <PokeCard>

              
                <PokeNumber>#01</PokeNumber>
                <PokeName>Bulbassaur</PokeName>

                <TypeDiv><PokeType>Poison</PokeType> <PokeType>Poison</PokeType></TypeDiv>
                <TypeDiv><PokeDetails>Detalhes</PokeDetails>           
                <CardButton>Capturar!</CardButton></TypeDiv>
            
            
            </PokeCard>
           
           
            </MainCard>
        </div>

    )



}