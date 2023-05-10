import axios from "axios"
import { useEffect, useState } from "react"
import { GlobalContext } from "./GlobalContext"
import Catcht from "../assets/Catch.png"
import { Catch } from "./GlobalStateStyle"
import Swal from "sweetalert2"

export default function GlobalState(props){

    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex]= useState([])

    const getAllPokemons = () =>{
        const headers = {
            headers: {
                Authorization: "renan-oliveira-ozemela"
            }
    
        }
        axios.get("https://pokeapi.co/api/v2/pokemon/", headers)
        .then((response)=>{
            setPokemons(response.data.results)
        })
        .catch((error)=>{
            console.log(error)
        })
        }


        const addToPokedex = (addPokemons) =>{
            const isAlreadyOnPokedex = pokedex.find(
                (pokedexPokemons)=> pokedexPokemons.name === addPokemons.name)
    
          if (!isAlreadyOnPokedex){
            const newPokemonPokedex = [...pokedex, addPokemons]
            setPokedex(newPokemonPokedex)}
            Swal.fire({
                title: "Gotcha!",
                text: "O pokémon foi adicionado na pokedex"
            })}
               
         const removeFromPokedex = (pokeRemove)=>{
            const newPokemonPokedex = pokedex.filter(
                (beforeRemove) => beforeRemove.name !== pokeRemove.name
            )
            setPokedex(newPokemonPokedex)
        } 


       

      useEffect (()=>{
        getAllPokemons()
        
      },[])
     
      const data ={
        pokemons,
        setPokemons,
        pokedex,
        setPokedex,
        getAllPokemons,
       removeFromPokedex,
        addToPokedex,
        
      }
    return(
    <GlobalContext.Provider value={data}>
        {props.children}
    </GlobalContext.Provider>
    )
}
