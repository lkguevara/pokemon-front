import React from 'react';
import { Link } from 'react-router-dom';
import style from "./Home.module.css"
import { useDispatch } from 'react-redux';
import {useState} from 'react';
import { getAllPokemons, getPokemonsByName } from '../../redux/actions';


const SearchBar = () => {
    
    const dispatch = useDispatch();

    // estado local
    const [name, setName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getAllPokemons());
    }

    // handles para el input
    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value);
        console.log(e.target.value);
    }

    function handleSearch(e) {
        e.preventDefault();
        dispatch(getPokemonsByName(name));
        console.log(name);
    }

    return (
        <div className = { style.container__searchBar}>

            {/* Search pokemon */}
            
            <form onSubmit={handleSearch} className = {style.form__searchBar}>
                <input
                    className = { style.input__searchBar}
                    type="text"
                    id="searchterm"
                    placeholder="Search Pokemon"
                    value={name}
                    onChange={handleInputChange}
                />
                <button 
                    className={style.button__searchBar}
                    type="submit"   
                >
                    Search
                </button>
            </form>



            
 

            {/* created pokemon */}
            <Link to="../../Pages/CreatePokemon/CreatePokemon.js">
                <button className={style.button__searchBar}>Create Pokemon</button>
            </Link>
            
            {/* Get all pokemons */}
            <button 
                className={style.button__searchBar} 
                onClick={handleSubmit}
            >Get all pokemons
            </button>
        </div>
    );
};

export default SearchBar;