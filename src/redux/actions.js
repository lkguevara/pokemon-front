import axios from 'axios';

import { 
    // get all pokemons
    GET_ALL_POKEMONS,
    IS_LOADING,
    // get pokemons by type
    GET_POKEMONS_BY_TYPE,
    // Filter by type
    FILTER_BY_TYPE,
    // Filter by created
    FILTER_BY_CREATED
} from './types';

export const getAllPokemons = () => async (dispatch) => {
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
    }
}

export const getPokemonsByType = () => async (dispatch) => {
    dispatch({
        type: IS_LOADING
    })
    try{
        const response = await axios.get('http://localhost:3001/types');
        dispatch({
            type: GET_POKEMONS_BY_TYPE,
            payload: response.data
        })
    }catch(error){
        console.log(error.message);
    }
}

export const filterByType = (payload) => {
    return {
        type: FILTER_BY_TYPE,
        payload
    }
}

export const filterByCreated = (payload) => {
    return {
        type: FILTER_BY_CREATED,
        payload
    }
}









