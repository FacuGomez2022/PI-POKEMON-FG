import React from 'react';
import { Link } from 'react-router-dom';
import "./landing.css";

export const LandingPage = () => {


    return (
        <div>
        <div className="landing">
        <p className='pLP'>
             Welcome to my landing Page!
         </p>
         <Link to={`/home`}><button className='buttonLP'>Run to the action!</button></Link>
   
           

            </div>  
         </div>
    )
}
    