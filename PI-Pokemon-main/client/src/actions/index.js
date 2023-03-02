export const GET_POKEMON_DETAILS = "GET_POKEMON_DETAILS";
export const POST_POKEMON = "POST_POKEMON";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_TYPES = "GET_TYPES";

export const getPokemons = () => async (dispatch) => {
  const response = await fetch(`https://localhost:3001/pokemons`);
  const data = await response.json();
  dispatch({
    type: GET_POKEMONS,
    payload: data,
  });
};
export const getPokemonsDetails = (id) => async (dispatch) => {
  const response = await fetch(`https://localhost:3001/pokemons/${id}`);
  const data = await response.json();
  dispatch({
    type: GET_POKEMON_DETAILS,
    payload: data,
  });
};
export const getTypes = () => async (dispatch) => {
  const response = await fetch(`https://localhost:3001/types`);
  console.log(response);
  const data = await response.json();
  console.log(data);
  dispatch({
    type: GET_TYPES,
    payload: data,
  });
};

export function postPokemon(payload) {
  return { type: POST_POKEMON, payload: payload };
}
