// imports de los types
import { 
    GET_ALL_POKEMONS,
    IS_LOADING,
    GET_POKEMONS_BY_TYPE,
    FILTER_BY_TYPE
} from './types';

// creando el estado inicial
const initialState = {
    pokemons: [],
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
            if (action.payload === 'All') {
                return {
                    ...state,
                    filteredPokemons: state.pokemons
                }
            }
            return {
                ...state,
                filteredPokemons: state.pokemons.filter(pokemon => pokemon.types.includes(action.payload))
            }
        default:
            return state;
    }
}

export default rootReducer;

