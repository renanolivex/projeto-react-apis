import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./Components/Header/Header";
import { Header2 } from "./Components/Header/Header2";
import { PokemonCard } from "./Components/PokemonCard/PokemonCard";
import { PokeDexPage } from "./Pages/PokedexPage/PokedexPage";
import { PokemonDetail } from "./Pages/PokemonDetailPage/PokemonDetail";
import { PokemonList } from "./Pages/PokemonListPage/PokemonList";
import Router from "./Router/Router";



export default function App() {
  return (
    <div>
      <GlobalStyle/>
      <Header/>
     {/*  <Router/> */}
       <PokemonDetail></PokemonDetail>
       <PokemonList ></PokemonList>
      <PokeDexPage></PokeDexPage>
    
    
      
      
    </div>
  );
}


