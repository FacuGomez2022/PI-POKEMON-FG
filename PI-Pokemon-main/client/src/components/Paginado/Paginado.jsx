import React from 'react';

export default function Paginado ({pokemonsPorPag,filtredPokemons, paginado}){
    const numeroPag = []


        for(let i = 1; i <= Math.ceil(filtredPokemons/pokemonsPorPag); i++){
        numeroPag.push(i);
    }

    return(
        <nav>
            <ul className='paginado'>
                {numeroPag && numeroPag.map(numero =>( 
                    <li className='numero' key= {numero}>
                        <button onClick={() => paginado(numero)}> {numero}</button>
                    </li>
                    )
                )}
            </ul>
        </nav>
    )
}