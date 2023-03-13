// imports de los types
import { 
    GET_ALL_POKEMONS,
    IS_LOADING,
    GET_POKEMONS_BY_TYPE,
    FILTER_BY_TYPE,
    FILTER_BY_CREATED,
    FILTER_BY_NAME,
    FILTER_BY_ATTACK
} from './types';

// creando el estado inicial
const initialState = {
    pokemons: [],
    allPokemons: [],
    loading: false, 
    types: [],
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
                types: action.payload,
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
            const allPokemons2 = state.allPokemons;
            if (action.payload === 'created') {
                const createdFilter = allPokemons2.filter(poke => poke.createdDb);
                return {
                    ...state,
                    pokemons: createdFilter,
                }
            }
            if (action.payload === 'api') {
                const createdFilter = allPokemons2.filter(poke => !poke.createdDb)
                return {
                    ...state,
                    pokemons: createdFilter,
                }
            }
            if (action.payload === 'all') {
                const createdFilter = allPokemons2;
                return {
                    ...state,
                    pokemons: createdFilter,
                }
            }
            const createdFilter = allPokemons2.filter(poke => poke.createdDb);

            return {    
                ...state,
                pokemons: createdFilter,
            }
            case FILTER_BY_NAME:
                let orderName = action.payload === 'asc' ? 
                    state.pokemons.sort((a, b) => {
                        if(a.name > b.name){
                            return 1;
                        }
                        if(b.name > a.name){
                            return -1;
                        }
                        return 0;
                    }) :
                    state.pokemons.sort((a, b) => {
                        if(a.name > b.name){
                            return -1;
                        }
                        if(b.name > a.name){
                            return 1;
                        }
                        return 0;
                    })
                return {
                    ...state,
                    pokemons: orderName,
                }
            case FILTER_BY_ATTACK:
                let orderAttack = action.payload === 'asc' ?
                    state.pokemons.sort((a, b) => {
                        if(a.attack > b.attack){
                            return 1;
                        }
                        if(b.attack > a.attack){
                            return -1;
                        }
                        return 0;
                    }) :
                    state.pokemons.sort((a, b) => {
                        if(a.attack > b.attack){
                            return -1;
                        }
                        if(b.attack > a.attack){
                            return 1;
                        }
                        return 0;
                    })
                return {
                    ...state,
                    pokemons: orderAttack,
                }
                

                    
        default:
            return state;
    }
}

export default rootReducer;

