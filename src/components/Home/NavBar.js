import React from 'react'
import Search from './SearchBar'
import style from "./Home.module.css"

const NavBar = () => {
  return (
    <div>
        <Search/>
      <div className = {style.container__Nav}>
        {/*  Filtrado por tipos */}
        <select name="" id="">
          <option value="types">Types:</option>
        </select>
        {/*  Ordenado por existente o creado por nosotros */}
        <select name="" id="">
          <option value="create">Create by:</option>
          <option value="all">Alls</option>
          <option value="api">Pokeapi</option>
          <option value="database">Database</option>
        </select>

        {/*  Ordenado por A - Z */}
        <select name="" id="">
          <option value="order">Order by</option>
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