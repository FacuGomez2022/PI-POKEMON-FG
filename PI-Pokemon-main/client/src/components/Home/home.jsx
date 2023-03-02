import React from 'react';
import {useSelector} from 'react-redux'




export const home = () => {

    const prueba = useSelector((state) => state.pokemons)
    function handleSubmit() {
        console.log(prueba)
  }
    return (
        <>
        <div>
            <button onClick= {e => handleSubmit(e)}>Hola</button>
            <p>
                Esta es la HOME.
            </p>
            </div>
            </>
    )
}
    




