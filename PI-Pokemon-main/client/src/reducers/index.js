import {
    GET_POKEMON_DETAILS,
    GET_POKEMONS,
    POST_POKEMON,
    GET_TYPES,
    ORDER_BY_NAME,
    ORDER_BY_ATTACK,
    ORDER_BY_ID,
} from '../actions';

const initialState = {
    pokemons: [],
    pokemonsFiltered: [],
    types: [],
    pokemonsLoaded: [],
    pokemonDetail: []
}

const rootReducer = (state = initialState, action) => {
    if (action.type === ORDER_BY_NAME) {
        let orden = [];
        if (action.payload === "Default"){
            return {
                ...state,
                pokemonsFiltered: state.pokemons
              };
        }
        if (action.payload === "Ascendente"){
           orden = state.pokemons.sort(function (a, b) {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                  return 1;
                }
                if (b.name.toLowerCase() > a.name.toLowerCase()) {
                  return -1;
                }
                return 0;
              })
          
        }
        if (action.payload === "Descendente"){
            orden = state.pokemons.sort(function (a, b) {
            if (a.name < b.name) {
              return 1;
            }
            if (b.name < a.name) {
              return -1;
            }
            return 0;
          })
         
        }; 
        return {
            ...state,
            pokemonsFiltered: orden
        }
    }

    
    if (action.type === ORDER_BY_ATTACK) {
        let orden = [];
        if (action.payload === "Default"){
  return {
    ...state,
    pokemonsFiltered: state.pokemons
  };
        }
        if (action.payload === "Ascendente"){
           orden = state.pokemons.sort(function (a, b) {
                if (a.attack > b.attack) {
                  return 1;
                }
                if (b.attack > a.attack) {
                  return -1;
                }
                return 0;
              })
          
        }
        if (action.payload === "Descendente"){
            orden = state.pokemons.sort(function (a, b) {
            if (a.attack < b.attack) {
              return 1;
            }
            if (b.attack < a.attack) {
              return -1;
            }
            return 0;
          })
         
        }; 
        return {
            ...state,
            pokemonsFiltered: orden
        }
    }
    if (action.type === ORDER_BY_ID) {
        if (action.payload === "Default") {
          return {
            ...state,
            pokemonsFiltered: state.pokemons
          }
        }
    }
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
        pokemons: [...state.pokemons, action.payload],
        pokemonsFiltered: [...state.pokemonsFiltered, action.payload]
    }
    }
    if (action.type === GET_POKEMONS) {
        return {
            ...state,
            pokemons: action.payload,
            pokemonsFiltered: action.payload
        }
    }
    return {...state}
    }
    
export default rootReducer