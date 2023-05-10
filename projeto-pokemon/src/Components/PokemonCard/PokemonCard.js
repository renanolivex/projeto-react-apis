import React, { useContext, useEffect, useState } from "react"
import { PokeCard, MainCard,CardButton, PokeName, PokeNumber, PokeType, PokeDetails, TypeDiv, PokeImage, PokeContainer, PokeContainer2, ContainerDetail, PokeBallImage, PokemonColor, PokeTypeImage, PokeType2 } from "./PokemonCardStyle"
import axios from "axios"
import Pokeball from "../../assets/Pokeball.png"
import { useLocation, useNavigate } from "react-router-dom"
import { goToPokeDetail } from "../../routes/coordinator"
import { GlobalContext } from "../../contexts/GlobalContext"
import { getTypes } from "../../types/Types"
import { getColors } from "../../types/BackgroundTypeColor"
import { typeColors } from "../../types/TypesColors"

export function PokemonCard ({pokemon}){
    const location = useLocation()
    const navigate = useNavigate()
    const context = useContext(GlobalContext)
    const { addToPokedex, removeFromPokedex, pokedex } = context
    
    const [pokeData, setPokeData] =useState([])
    const [isLoading, setIsLoading] = useState(true)
  
    async function getPokeData(){
        try{
            const response = await axios.get(pokemon.url)
            setIsLoading(true)
            setPokeData(response.data)
            setIsLoading(false)
        }
        catch (error){
            console.log(error.response)
            console.log("Erro ao buscar lista de pokemons")
          
           
        }
    }
    useEffect(()=>{
        getPokeData()
        
        
    },[pokedex])

    
  
    console.log(pokeData)


    return(
       
        <div>
            <MainCard>
            {isLoading? <p>Carregando</p>:
             
             
                <PokeCard colorbcg={getColors(pokeData.types[0].type.name)}>
                
                <PokeContainer >
                <PokeNumber>#{pokeData.id}</PokeNumber>
                <PokeName>{pokemon.name}</PokeName>
                <TypeDiv><PokeType colorbackground ={typeColors(pokeData.types[0].type.name)}><PokeTypeImage src={getTypes(pokeData.types[0].type.name)}/>{pokeData.types[0].type.name} </PokeType> 
                {pokeData.types[1]? <PokeType2 colorbackground2 = {typeColors(pokeData.types[1].type.name)}><PokeTypeImage src={getTypes(pokeData.types[1]?.type.name)}/>{pokeData.types[1]?.type.name}</PokeType2>:<></>} 
                </TypeDiv>
                <ContainerDetail><PokeDetails onClick={()=>{goToPokeDetail(navigate)}}>Detalhes</PokeDetails></ContainerDetail>
                </PokeContainer>
                
                <PokeContainer2>
                <PokeBallImage src={Pokeball}/>
                <PokeImage src={pokeData.sprites.other["official-artwork"].front_default} alt=""/>
               

                   
                {location.pathname === "/"?(
                <TypeDiv><CardButton onClick={()=>{addToPokedex(pokemon)}}>Capturar!</CardButton></TypeDiv>)
                :  (<TypeDiv><CardButton onClick={()=>{removeFromPokedex(pokemon)}}>Remover!</CardButton></TypeDiv>)}


                </PokeContainer2>
                
            </PokeCard>}

            </MainCard>
        </div>
   
    )

}

