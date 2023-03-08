import React from 'react';
import "./card.css"
import { Link } from 'react-router-dom';
import imgAlt from './unknown.png';


export default function Card ({name, type, img, id}) {
    if(!img){
        img = imgAlt
    }


    return (
        <div className='pokebola'>
        <div className='card'>
        <Link to={`/pokemons/` + id}><img className="imgCard" src={img} alt={imgAlt} /></Link>

            <div className= 'bgNameType'>
            <h1 className='nameCard'>{name}</h1>
            <h2 className='typeCard'>{type}</h2>

            
            </div>
        </div>
        </div>
    )
}