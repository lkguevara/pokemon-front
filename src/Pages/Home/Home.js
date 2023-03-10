// Importando react y redux
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import style from "./Home.module.css"
// importando componentes
import NavBar from '../../components/Home/NavBar';
import Card from '../../components/Home/CardsHome';
// importando las actions
import {getAllPokemons} from '../../redux/actions';
// importando imagenes
import logo from '../../assets/landinPage.png';
import loadingPoke from '../../assets/loading.gif';


const Home = () => {

  const dispatch = useDispatch();

  // useSelector
  let pokemons = useSelector((state) => state.pokemons);
  let loading = useSelector((state) => state.loading);

  useEffect(() => {
    if(!pokemons.length) { 
      dispatch(getAllPokemons());
    }
  }, [dispatch, pokemons])
  console.log(pokemons)



  return (
    <div>
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
            
            pokemons.map((pokemon) => {
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

    
      

    </div>


  )
}

export default Home



