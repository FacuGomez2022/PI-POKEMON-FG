import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPokemons, getTypes, orderByName, orderByAttack, orderById } from "../../actions";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { useState } from "react";
import Paginado from "../Paginado/Paginado";


export function Home() {
  const dispatch = useDispatch();
    const types = useSelector((state) => state.types)
  const pokemons = useSelector((state) => state.pokemons)
  const filtredPokemons = useSelector((state) => state.pokemonsFiltered);

  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value)
    setPagActual(1)
  };

  const [pagActual, setPagActual] = useState(1);
  const [pokemonsPorPag, setPokemonsPorPag] = useState(12);

  const ultimoPokemon = pagActual * pokemonsPorPag;
  const primerPokemon = ultimoPokemon - pokemonsPorPag;
  const pokemonsActuales = filtredPokemons.slice(primerPokemon, ultimoPokemon)

  const paginado = (numeroPag) => 
    setPagActual(numeroPag)
  


  const [isChecked, setIsChecked] = useState(false);
  const handleCheckBoxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  useEffect(() => {
    
    if (filtredPokemons.length < 3) {
      dispatch(getPokemons())
      dispatch(getTypes())
     
    }
  }, []);

  const [selectedOption, setSelectedOption] = useState("");
    const handleSelectChange = (event) => {
      const newValue = event.target.value;
      setPagActual(1)
      setSelectedOption(newValue);
      }  
  
      const [orderSet, setOrderSet] = useState("");
      const handleOrdenChange = (event) => {
        if (event.target.value === "Default"){
          dispatch(orderById())
          
        }
        else dispatch(orderByName(event.target.value))
        setOrderSet(event.target.value)
      };  
      const [attackSet, setAttackSet] = useState("");
      const handleAttackChange = (event) => {
        if (event.target.value === "Default"){
          dispatch(orderById())
        }
        else dispatch(orderByAttack(event.target.value))
        setAttackSet(event.target.value)
      };    
  

  return (
    <>
 
      <p>Welcome to my home page!</p>
      <Link to = "/create">Create my Own Pokemon</Link>
      <p>My own creation's
      <input type="checkbox" onChange ={handleCheckBoxChange} checked={isChecked}/>
      </p>
<div>
    <p>
        TYPE FILTER
        <select value={selectedOption} onChange={handleSelectChange}>
            <option value="">Select a type</option>
            {types.map((types)=> (
                <option value={types.name}>{types.name}</option>))}
        </select>
    </p>
    </div>

    <div>
    <p>
    ALFABETICH ORDER 
    <select value={orderSet} onChange={handleOrdenChange} >
    {/* <option value="Default">Default</option> */}
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
        </select>
    </p>
    </div>
    <div>
    <p>
    ATTACK ORDER 
    <select value={attackSet} onChange={handleAttackChange} >
    {/* <option value="Default">Default</option> */}
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
        </select>
    </p>
    </div>





      <input type="text" onChange={handleInputChange} value={searchTerm} />
      { isChecked
         ? filtredPokemons.map(e => {
            if (isNaN(e.id)){
                return (
                    <div>
                      <Card name={e.name} img={e.img} type={e.types} />
                      <Link to={`/pokemons/` + e.id}>{e.name.toUpperCase()}! I CHOOSE YOU</Link>
                    </div>
                  );
            }
        }) : selectedOption ? 
        filtredPokemons.map(e => {
            if (selectedOption.toLowerCase() === e.types){
          return (
            
            <div>
                    
                    <Card name={e.name} img={e.img} type={e.types} />
              <Link to={`/pokemons/` + e.id}>{e.name.toUpperCase()}! I CHOOSE YOU</Link>
            </div>
          );
        }})  :
        searchTerm ? filtredPokemons.map(e => {
            if (searchTerm.toLowerCase() === e.name.toLowerCase()){
          return (
            <div>
                   
                   <Card name={e.name} img={e.img} type={e.types} />
              <Link to={`/pokemons/` + e.id}>{e.name.toUpperCase()}! I CHOOSE YOU</Link>
            </div>
          );
        }}) :
        pokemonsActuales.map((e) => {
          
            return (
              
              <div>

                <>{e.id}</>
                <>{e.types}</>
                <Card name={e.name} img={e.img} type={e.types} />
                <Link to={`/pokemons/` + e.id}>{e.name.toUpperCase()}! I CHOOSE YOU</Link>
                
              </div>
              
            );
          })
    
        }     
         <div>
                            <Paginado pokemonsPorPag={pokemonsPorPag} filtredPokemons = {filtredPokemons.length} paginado = {paginado} ></Paginado>
          </div>
    </>
  );
}
