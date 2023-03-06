import axios from "axios"
export const GET_POKEMON_DETAILS = "GET_POKEMON_DETAILS";
export const POST_POKEMON = "POST_POKEMON";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_TYPES = "GET_TYPES";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";
export const ORDER_BY_ID = "ORDER_BY_ID";

export const getPokemons = () => async (dispatch) => {
  const response = await fetch(`http://localhost:3001/pokemons`);
  const data = await response.json();
  dispatch({
    type: GET_POKEMONS,
    payload: data,
  });
};
export const getPokemonsDetails = (id) => async (dispatch) => {
  const response = await fetch(`http://localhost:3001/pokemons/${id}`);
  const data = await response.json();
  dispatch({
    type: GET_POKEMON_DETAILS,
    payload: data,
  });
};
export const getTypes = () => async (dispatch) => {
  const response = await fetch(`http://localhost:3001/types`);
  const data = await response.json();
  dispatch({
    type: GET_TYPES,
    payload: data,
  });
};

export function postPokemon(payload) {
    return async function (dispatch) {
      console.log('acá estoy', dispatch, payload);

      const crear = await axios.post("http://localhost:3001/pokemon/", payload);
      console.log(crear.data, 'SOY CREAR.DATA')
      return dispatch({
      type: POST_POKEMON,
      payload: crear.data 
    })
  }
}


export function orderByName (payload){
  return { type: ORDER_BY_NAME, payload: payload };
}

export function orderByAttack (payload){
  
  return { type: ORDER_BY_ATTACK, payload: payload };
}

export function orderById (payload){
  return { type: ORDER_BY_ID, payload: payload };
}
