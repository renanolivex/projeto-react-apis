import React from "react"
import { PokeLogo, HeaderMain, PokeHomeLink } from "./HeaderStyle2"
import PokemonLogo from "../Image/LogoPoke.png"

export function Header2 (){
    return(
        <div>
        <HeaderMain>
        <PokeHomeLink>{"<"} <a href="#"><b>Todos Pokémons</b></a></PokeHomeLink>
        <PokeLogo src= {PokemonLogo}/>
        
        </HeaderMain>
       
        </div>

    )



}