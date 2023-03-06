import React from 'react';


export default function Card ({name, type, img}) {
    return (
        <>
        <div>
            <img src={img}></img>
            <h2>{name}</h2>
            <h2>{type}</h2>
        </div>
        </>
    )
}