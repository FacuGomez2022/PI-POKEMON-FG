import {
    GET_POKEMON_DETAILS,
    GET_POKEMONS,
    POST_POKEMON,
    GET_TYPES,
} from '../actions';

const initialState = {
    pokemons: [],
    types: [],
    pokemonsLoaded: [],
    pokemonDetail: []
}

const rootReducer = (state = initialState, action) => {
    if (action.type === GET_TYPES) {
        return {
            ...state,
            types: action.payload
        }
    }
    if (action.type === GET_POKEMON_DETAILS) {
        return {
            ...state,
            pokemonDetail: action.payload,
        }
    }
    if (action.type === POST_POKEMON) {
    return {
        ...state, 
        pokemons: state.pokemons.concat(action.payload),
    }
    }
    if (action.type === GET_POKEMONS) {
        return {
            ...state,
            pokemonsLoaded: action.payload,
        }
    }
    return {...state}
    }
export default rootReducer