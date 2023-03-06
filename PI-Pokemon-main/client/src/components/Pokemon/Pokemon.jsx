import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsDetails } from "../../actions/";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export const Pokemon = () => {
  const dispatch = useDispatch()
  const { id } = useParams();

  const pokemon = useSelector((state) => state.pokemonDetail)
  useEffect(() => {
    dispatch(getPokemonsDetails(id))
    
  },
  [])

  return (
    <>
    <div>
    <p>${id}</p>
//     <div className="pokemon-detail">
//       <h3>Name: {pokemon.name}</h3>
//       <p>Type: {pokemon.types}</p>
//       <p>ID: {pokemon.id}</p>
//       <p>HP: {pokemon.hp}</p>
//       <p>Attack: {pokemon.attack}</p>
//       <p>Defense: {pokemon.defense}</p>  
//       <p>Speed: {pokemon.speed}</p>
//       <p>Height: {pokemon.height}</p>
//       <p>Weight: {pokemon.weight}</p>
//       <img src={pokemon.img} alt="Img not found" />
        <Link to = "/create"><button>Create my Own Pokemon</button></Link>
        <br></br>
        <Link to="/home"><button>BACK TO HOME</button></Link>
//     </div>
        </div></>
  )
}