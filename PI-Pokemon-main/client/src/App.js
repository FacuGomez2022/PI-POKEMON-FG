import React, {useEffect} from "react"
import './App.css';
import { useDispatch } from "react-redux";
import { getPokemons, getTypes } from "./actions";
import NavBar from "./components/NavBar/NavBar";
import {Pokemon} from "./components/Pokemon/Pokemon.jsx"
import {home} from "./components/Home/home"
import { LandingPage } from "./components/LandingPage/landingPage";

import {Route} from "react-router-dom"


function App() {


  return (
    <React.Fragment>

    <NavBar />
    <Route exact path="/" component={LandingPage}/>
    <Route exact path="/home" component={home}/>

    <Route path="/pokemons/:id" component={Pokemon}/>
      

    </React.Fragment>
  );
}

export default App;
