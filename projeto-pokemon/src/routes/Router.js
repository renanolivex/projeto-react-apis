 import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {PokemonList} from '../Pages/pokemonListPage/PokemonList' 
import { PokeDexPage } from '../Pages/pokedexPage/PokedexPage'
import { PokemonDetail } from '../Pages/pokemonDetailPage/PokemonDetail'
import Header  from '../Components/header/Header'

export default function Router(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route index="/" element={<PokemonList/>}/>
                <Route path="/pokedex" element={<PokeDexPage/>}/>
                <Route path="/pokedetail" element={<PokemonDetail/>}/>
            </Routes>
        
        </BrowserRouter>

    )

} 