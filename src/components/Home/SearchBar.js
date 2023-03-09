import React from 'react';
import { Link } from 'react-router-dom';
import style from "./Home.module.css"
import { useDispatch } from 'react-redux';
import { getAllPokemons } from '../../redux/actions';


const SearchBar = () => {
    
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getAllPokemons());

    }

    return (
        <div className = { style.container__searchBar}>
            <form className = {style.form__searchBar} >
                <input
                    className = { style.input__searchBar}
                    type="text"
                    placeholder="Search Pokemon"
                />
                <button className={style.button__searchBar}>Search</button>
                    
            </form>
            <Link to="../../Pages/CreatePokemon/CreatePokemon.js">
                <button className={style.button__searchBar}>Create Pokemon</button>
            </Link>
            <button 
                className={style.button__searchBar} 
                onClick={handleSubmit}
            >Get all pokemons
            </button>
        </div>
    );
};

export default SearchBar;