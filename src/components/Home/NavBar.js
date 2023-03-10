import React from 'react'
import Search from './SearchBar'
import style from "./Home.module.css"

const NavBar = ({pokemonsType}) => {

  
  return (
    <div>
        <Search/>
        <div className = {style.container__Nav}>
        {/*  Filtrado por tipos */}
          <select name="filterType">
            <option value="sortType" disabled = "disabled" >Sort type:</option>  
            <option value="all">All</option>
            {
              pokemonsType.map((type) => {
                return (
                  <option>
                    {type}
                  </option>
              )})
            }
          </select>
        {/*  Ordenado por existente o creado por nosotros */}
          <select name="filterCreate">
            <option value="create" disabled = "disabled">Create:</option>
            <option value="all">All</option>
            <option value="api">Pokeapi</option>
            <option value="database">Database</option>
          </select>

        {/*  Ordenado por A - Z */}
          <select name="orderASC">
            <option value="sortBy" disabled = "disabled" >Sort by</option>
            <option value="name_asc">Name A - Z</option>
            <option value="name_desc">Name Z - A</option>
            <option value="attack_asc">attack A -Z </option>
            <option value="attack_desc">attack Z - A</option>
          </select>
      </div>
    </div>
  )
}

export default NavBar