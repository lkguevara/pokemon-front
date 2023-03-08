import React from 'react'
import { NavLink } from 'react-router-dom'
// Estilos
import style from "./LandingPage.module.css"
// imagenes
import logo from '../../assets/landinPage.png'
import logoPoke from '../../assets/landingPoke.png'



const LandingPage = () => {
  return (
    <div className= {style.container}>
      <img className= {style.image} src={logo} alt="Pokemon" />

      <div className= {style.container__poke}>
        <img className= {style.pokeImg} src={logoPoke} alt="logoPoke" />

        <NavLink className= {style.toHome} to='/home'>
          <button className= {style.button}>Home</button>
        </NavLink>
       
      </div>

      
    </div>
  )
}

export default LandingPage