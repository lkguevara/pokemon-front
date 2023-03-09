// imports de los types
import { 
    GET_ALL_POKEMONS,
    GET_POKEMONS_ERROR,
    IS_LOADING
} from './types';

// creando el estado inicial
const initialState = {
    pokemons: [],
    loading: false, // para saber si se esta cargando o no
    error: '', // para saber si hay un error
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                loading: false, 
                error: "",
            }
        case IS_LOADING:
            return {
                ...state,
                loading: true,
            }
            
        case GET_POKEMONS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

export default rootReducer;

