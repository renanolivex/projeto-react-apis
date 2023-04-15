import styled from "styled-components";

export const DetailCard = styled.div`
width: 95vw;
background-color: #729F92;
height: 80vh;
border-radius: 1vw;
margin-top: 5vh;
margin-bottom: 5vh;
display: flex;
`
//CONTAINERS 

export const DetailMainContainer = styled.div`
 display: flex;
 justify-content: center;
 padding-bottom: 10vh;

`

export const SpriteContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

`
export const PokeTypeContainer = styled.div`
display:flex;
`



export const BaseStatsContainer = styled.div`

`
export const MovesContainer = styled.div`
display: flex;
flex-direction: column;


`
export const ImageContainer = styled.div`
grid-column: 4/5;
grid-row: 1/3;

`

//CARDS

export const SpriteFrontCard = styled.div`
background-color: white;
width: 18vw;
height: 35vh;
border-radius: 1.4vh;
margin: 3vh, 3vh;
margin-left: 4vh;
margin-right: 4vh;
margin-bottom: 4vh;


`

export const SpriteBackCard = styled.div`
background-color: white;
width: 18vw;
height: 35vh;
border-radius: 1.4vh;
margin: 3vh, 3vh;
margin-left: 4vh;
margin-right: 4vh;

`

export const BaseStatsCard = styled.div`
background-color: white;
width: 25vw;
height: 74vh;
border-radius: 1.4vh;
margin-top: 3vh;
margin-right: 3vh;

`

export const StatusCard = styled.div`

width: 24vw;
margin-left: 6vh;

`

export const MoveCard =  styled.div`
background-color: white;
width: 20vw;
height: 51vh;
margin-top: 10vh;
margin-left: 6vh;
border-radius: 1.4vh;
`


//MoveCard itens

export const PokeNumber = styled.p`
font-size: 3vh;
color: white;
margin-top: 1vw;
font-family: 'Inter';

`
export const PokeName = styled.p`
color: white;
font-size: 4.5vh;
font-family: 'Inter';
width: 100%;
`
export const PokeType = styled.p`

color: white;
display: flex;
font-size: 3vh;
margin-top: 1vh;
margin-right: 1vh;
font-family: "Poppins";
`

