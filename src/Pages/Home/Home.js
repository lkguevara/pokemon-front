// Importando react y redux
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import style from "./Home.module.css"
// importando componentes
import NavBar from '../../components/Home/NavBar';
import Card from '../../components/Home/CardsHome';
import Paginate from '../../components/Home/Paginate';
// importando las actions
import {getAllPokemons} from '../../redux/actions';
// importando imagenes
import logo from '../../assets/landinPage.png';
import loadingPoke from '../../assets/loading.gif';


const Home = () => {

  const dispatch = useDispatch();

  // useSelector
  let allPokemons = useSelector((state) => state.pokemons);
  let loading = useSelector((state) => state.loading);

  // useStates
  // páginado
  const [currentPage, setCurrentPage] = useState(1); // pagina actual
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12); // pokemons por página
  const indexOfLastPokemon = currentPage * pokemonsPerPage; // indice del último pokemon de la página
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage; // indice del primer pokemon de la página
  const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon); // pokemons de la página actual. El slice lo que hace es cortar el array de pokemons y nos devuelve un array con los pokemons de la página actual

  const paginate = (pageNumber) => setCurrentPage(pageNumber); // función para cambiar de página

  // useEffects
  useEffect(() => {
    if(!allPokemons.length) { 
      dispatch(getAllPokemons());
    }
  }, [dispatch, allPokemons])
  console.log(allPokemons)



  return (
    <>
      <img className= {style.image} src={logo} alt="" />
      <NavBar />

      

      {
        loading ? (
          <div>
            <img className= {style.loading} src={loadingPoke} alt="cargando" />
          </div>
        ) : 
        <div className= {style.card}>
          {
            
            currentPokemons.map((pokemon) => {
                return (
                  
                    <Card
                      
                      name={pokemon.name}
                      image={pokemon.image}
                      type={pokemon.types}
                      id={pokemon.id}
                    />
      
                )
              })
          }
        </div>
      }

      <Paginate 
        pokemonsPerPage={pokemonsPerPage}
        allPokemons={allPokemons.length}
        paginate={paginate}
      />
    
      

    </>


  )
}

export default Home



