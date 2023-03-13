// Importando react y redux
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import style from "./Home.module.css"
// importando componentes
import NavBar from '../../components/Home/NavBar';
import Card from '../../components/Home/CardsHome';
import Paginate from '../../components/Home/Paginate';
// importando las actions
import {getAllPokemons,getPokemonsByType} from '../../redux/actions';
import {} from '../../redux/actions';
// importando imagenes
import logo from '../../assets/landinPage.png';
import loadingPoke from '../../assets/loading.gif';


const Home = () => {

  const dispatch = useDispatch();

  // useSelector
  let allPokemons = useSelector((state) => state.pokemons); 
  let pokemonsTypes = useSelector((state) => state.types); 
  let loading = useSelector((state) => state.loading);

  // useStates
  // Páginado
  const [currentPage, setCurrentPage] = useState(1); // Corresponde a la página actual, la cual arranca en 1
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12); // cantidad de pokemons por página
  const indexOfLastPokemon = currentPage * pokemonsPerPage; // indice del último pokemon 
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage; // indice del primer pokemon 
  const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon); // cantidad de pokemons de la página actual. El slice lo que hace es cortar el array de pokemons y nos devuelve un array con los pokemons de la página actual


  const [order, setOrder] = useState('');

  const paginate = (pageNumber) => setCurrentPage(pageNumber); // función para cambiar de página

  // useEffects
  useEffect(() => {
    if(!allPokemons.length) { 
      dispatch(getAllPokemons());
    }
    if(!pokemonsTypes.length) {
      dispatch(getPokemonsByType());
    }
    
  }, [dispatch, allPokemons, pokemonsTypes])
  // console.log(allPokemons, pokemonsTypes)



  return (
    <>
      <img className= {style.image} src={logo} alt="" />
      <NavBar
        // llenar el select con los tipos de pokemons
        pokemonsType={pokemonsTypes}
        setCurrentPage={setCurrentPage}
        setOrder={setOrder}

      />

      

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
                      attack={pokemon.attack}
                      id={pokemon.id}
                      key={pokemon.key}
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



