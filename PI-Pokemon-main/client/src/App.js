import React, {useEffect} from "react"
import './App.css';
import { useDispatch } from "react-redux";
import { getPokemons, getTypes } from "./actions";

import {Pokemon} from "./components/Pokemon/Pokemon.jsx"
import {Home} from "./components/Home/home"
import { LandingPage } from "./components/LandingPage/landingPage";
import {Create} from "./components/Create/Create";

import {Route} from "react-router-dom"


function App() {


  return (
    <React.Fragment>

  
    <Route exact path="/" component={LandingPage}/>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/create" component={Create}/>
    <Route path="/pokemons/:id" component={Pokemon}/>
      

    </React.Fragment>
  );
}

export default App;
