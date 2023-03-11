// imports de los types
import { 
    GET_ALL_POKEMONS,
    IS_LOADING,
    GET_POKEMONS_BY_TYPE,
    FILTER_BY_TYPE,
    FILTER_BY_CREATED
} from './types';

// creando el estado inicial
const initialState = {
    pokemons: [],
    allPokemons: [],
    loading: false, 
    pokeType: [],
    filteredPokemons: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload,
                loading: false, 
            }
        case IS_LOADING:
            return {
                ...state,
                loading: true,
            }
        case GET_POKEMONS_BY_TYPE:
            return {
                ...state,
                pokeType: action.payload,
                loading: false,
            }
        case FILTER_BY_TYPE:
            // constante que contiene todos los pokemones
            const allPokemons = state.allPokemons;
            const typeFilter = action.payload === 'all' ? allPokemons : allPokemons.filter(poke => poke.types.includes(action.payload));
            // si no existe el tipo mandar un mensaje de error
            if(!typeFilter.length){
                alert('No hay pokemones de este tipo');
            }
            return {
                ...state,
                pokemons: typeFilter,
            }
        case FILTER_BY_CREATED:
            const allPokemonsCreated = state.allPokemons;
            const createdFilter = action.payload === 'created' ? allPokemonsCreated.filter(poke => poke.createdInDb) : allPokemonsCreated.filter(poke => !poke.createdInDb);
            // si no existe el tipo mandar un mensaje de error
            if(!createdFilter.length){
                alert('No hay pokemones creados desde la base de datos');
            }
            return {
                ...state,
                pokemons: action.payload === 'all' ? allPokemonsCreated : createdFilter,
            }

        default:
            return state;
    }
}

export default rootReducer;

