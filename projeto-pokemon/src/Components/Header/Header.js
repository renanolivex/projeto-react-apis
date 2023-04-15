import React from "react"
import { PokeLogo, PokeDexButton, HeaderMain, ContainerPokedex, P } from "./HeaderStyle"
import PokemonLogo from "../Image/LogoPoke.png"

export function Header (){
    return(
        <div>
        <HeaderMain>


        <a href="#"><PokeLogo src= {PokemonLogo}/></a>

        <ContainerPokedex>
        <a href="#"><PokeDexButton><P>PokéDex</P></PokeDexButton></a>
        </ContainerPokedex>
        </HeaderMain>
       
        </div>

    )



}