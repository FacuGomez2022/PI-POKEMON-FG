import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsDetails } from "../../actions/";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Pokemon.css";
import Logo from "../Home/logo.jpg";
import imgAlt from '../Card/unknown.png';

export const Pokemon = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const pokemon = useSelector((state) => state.pokemonDetail);
  useEffect(() => {
    dispatch(getPokemonsDetails(id));
    // eslint-disable-next-line
  }, []);
  if(!pokemon.img){
    pokemon.img = imgAlt
}
  return (
    <div >
      <div className="logoImg"><img src={Logo} alt="logo.jgp" className="imgSet" /></div>
    <div className="pokemonPage">
       <img classname="imgRadius" src={pokemon.img} alt={imgAlt} />
      
      <div className="pokemonCard">

        <div className="pokemon-detail">
          <h1>{pokemon.name}</h1>
          <p>Type: {pokemon.types}</p>
          <p>ID: {pokemon.id}</p>
          <p>HP: {pokemon.hp}</p>
          <p>Attack: {pokemon.attack}</p>
          <p>Defense: {pokemon.defense}</p>
          <p>Speed: {pokemon.speed}</p>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>          
        </div>
          <br></br>
          <Link to="/home">
            <button className="CreateButton">BACK TO HOME</button>
          </Link>
      </div>
    </div>
    </div>
  );
};
