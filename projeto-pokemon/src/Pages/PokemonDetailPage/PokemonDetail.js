import React from "react"
import { ListTitle, PokeMain } from "../PokemonListPage/PokemonListStyle"
import { BaseStatsCard, DetailCard, DetailMainContainer, PokeTypeContainer, PokeType, SpriteBackCard, SpriteFrontCard, StatusCard } from "./PokemonDetailStyle"
import { SpriteContainer, ImageContainer, BaseStatsContainer,MovesContainer, MoveCard, PokeNumber, PokeName } from "./PokemonDetailStyle"





export function PokemonDetail (){
    return(
        <div>
            <PokeMain><ListTitle>Detalhes</ListTitle>

            <DetailMainContainer>

            <DetailCard>

            <SpriteContainer>
                <SpriteFrontCard/>
                <SpriteBackCard/>
           </SpriteContainer>

            <BaseStatsContainer>
                <BaseStatsCard>
                </BaseStatsCard>
            </BaseStatsContainer>

            <MovesContainer>
                <StatusCard>
                    <PokeNumber>#01</PokeNumber>
                    <PokeName>Bulbassaur</PokeName>
                    <PokeTypeContainer>
                        <PokeType>Poison</PokeType>
                        <PokeType>Poison</PokeType>
                    </PokeTypeContainer>
                    

                    
                </StatusCard>
                <MoveCard/>
            </MovesContainer>
            <ImageContainer></ImageContainer>
           

            </DetailCard>
           
            </DetailMainContainer>
            </PokeMain>
           

        
        </div>

    )



}