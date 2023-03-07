import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPokemons, getTypes, orderByName, orderByAttack, orderById } from "../../actions";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { useState } from "react";
import Paginado from "../Paginado/Paginado";
import "./home.css";
import Logo from "./logo.jpg";

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
    <div className = "prueba" key="KeyTest">
      <div className="logoImg"><img src={Logo} alt="logo.jgp" className="imgSet" /></div>
      <div className="prueba3">
        <div>
      <input className="filterName" type="text" onChange={handleInputChange} value={searchTerm} placeholder="Search your Pokemon here!"/>
      </div>
      <div>
      <Link to = "/create"><button className="CreateButton">Create my Own Pokemon</button></Link>
      </div>
      </div>

<div className = "type">
    <p className="filters">
        Type Filter
        <select className="filters" value={selectedOption} onChange={handleSelectChange}>
            <option className="filters" value="">Select a type</option>
            {types.map((types)=> (
                <option className="filters" value={types.name}>{types.name}</option>))}
        </select>
    </p>
    

    <div>
    <p className="filters">
    Alphabetical order
    <select className="filters" value={orderSet} onChange={handleOrdenChange} >
    {/* <option value="Default">Default</option> */}
            <option className="filters" value="Ascendente">Ascendente</option>
            <option className="filters" value="Descendente">Descendente</option>
        </select>
    </p>
    </div>
    <div>
    <p className="filters">
    Attack Order
    <select className="filters" value={attackSet} onChange={handleAttackChange} >
    {/* <option value="Default">Default</option> */}
            <option className="filters" value="Ascendente">Ascendente</option>
            <option className="filters" value="Descendente">Descendente</option>
        </select>
    </p>
    </div>
    </div>
    <p className="creations">My own creation's   
      <input className="creationCheckBox" type="checkbox" onChange ={handleCheckBoxChange} checked={isChecked}/>
      </p>
    <hr></hr>
      { isChecked
         ? filtredPokemons.map(e => {
            if (isNaN(e.id)){
                return (
                    <div className="CardDiv">
                      <Card name={e.name} img={e.img} type={e.types} id={e.id}/>
                    
                    </div>
                    
                  );
            }
        }) : selectedOption ? 
        filtredPokemons.map(e => {
            if (selectedOption.toLowerCase() === e.types){
          return (
            
            <div className="CardDiv">
                    
                    <Card name={e.name} img={e.img} type={e.types} id={e.id} />
              
            </div>
          );
        }})  :
        searchTerm ? filtredPokemons.map(e => {
            if (searchTerm.toLowerCase() === e.name.toLowerCase()){
          return (
            <div className="CardDiv">
                   
                   <Card name={e.name} img={e.img} type={e.types} id={e.id}/>
             
            </div>
          );
        }}) :
        pokemonsActuales.map((e) => {
          
            return (
              
              <div className="CardDiv">
                <Card name={e.name} img={e.img} type={e.types} id={e.id}/>
                
              </div>
              
            );
          })
    
        }     
         <div className="paginado">
                            <Paginado pokemonsPorPag={pokemonsPorPag} filtredPokemons = {filtredPokemons.length} paginado = {paginado} ></Paginado>
          </div>
          </div>
    </>
  );
}
