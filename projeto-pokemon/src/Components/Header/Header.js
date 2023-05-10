import React from "react"
import { PokeLogo, PokeDexButton, HeaderMain, ContainerPokedex, P } from "./HeaderStyle"
import PokemonLogo from "../../assets/LogoPoke.png"

import { goToHome, goToPokeDex } from "../../routes/coordinator"
import { useLocation, useNavigate } from "react-router-dom"
import { PokeHomeLink } from "./HeaderStyle2"



function Header() {
    const location = useLocation();
    const navigate = useNavigate();
  
    const renderHeader = () => {
      switch (location.pathname) {
        case "/":
          return (
            <HeaderMain>
                        <PokeLogo src={PokemonLogo} />

                        <ContainerPokedex>
                            <PokeDexButton onClick={() => { goToPokeDex(navigate) }}><P>PokéDex</P></PokeDexButton>
                        </ContainerPokedex>
                    </HeaderMain>
          );
        case "/pokedex":
          return (
            <HeaderMain>
                <PokeHomeLink onClick={()=>{goToHome(navigate)}}>{"<"} <b>Todos Pokémons</b></PokeHomeLink>
                <PokeLogo src= {PokemonLogo}/>
                
                </HeaderMain>

          );
        default:
          return (
            <>
             <HeaderMain>
                <PokeHomeLink onClick={()=>{goToHome(navigate)}}>{"<"} <b>Todos Pokémons</b></PokeHomeLink>
                <PokeLogo src= {PokemonLogo}/>
                
                </HeaderMain>
            </>
          );
      }
    };
  
    return <>{renderHeader()}</>;
  }
  
  export default Header;















/* export function Header() {
    const navigate = useNavigate()
    const location = useLocation()

    const locationHeader = () => {
        switch (location.pathname) {
            case "/":
                return (

                    <HeaderMain>
                        <PokeLogo src={PokemonLogo} />

                        <ContainerPokedex>
                            <PokeDexButton onClick={() => { goToPokeDex(navigate) }}><P>PokéDex</P></PokeDexButton>
                        </ContainerPokedex>
                    </HeaderMain>)

            case "/pokedex":
            return(
                <HeaderMain>
                <PokeHomeLink onClick={()=>{goToHome(navigate)}}>{"<"} <b>Todos Pokémons</b></PokeHomeLink>
                <PokeLogo src= {PokemonLogo}/>
                
                </HeaderMain>

            )

           
    
            
        }

        return <HeaderMain>{locationHeader()}</HeaderMain>
       


    }
} */