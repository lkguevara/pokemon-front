import axios from 'axios';

import { 
    GET_ALL_POKEMONS,
    GET_POKEMONS_ERROR,
    IS_LOADING
} from './types';

const getAllPokemons = () => async (dispatch) => {
    dispatch({
        type: IS_LOADING
    })
    try{
        const response = await axios.get('http://localhost:3001/pokemons');
        dispatch({
            type: GET_ALL_POKEMONS,
            payload: response.data
        })
    }catch(error){
        console.log(error.message);
        dispatch({
            type: GET_POKEMONS_ERROR,
            payload: error.message
        })
    }
}
 


export { 
    getAllPokemons,
 
};





