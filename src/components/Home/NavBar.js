import React from 'react'
import Search from './SearchBar'
import style from "./Home.module.css"
import {useDispatch} from 'react-redux'
import {filterByType, filterByCreated, filterByName} from '../../redux/actions'


const NavBar = ({pokemonsType, setCurrentPage, setOrder}) => {
  const dispatch = useDispatch();

  const handleFilterType = (e) => {
    e.preventDefault()
    dispatch(filterByType(e.target.value))
    console.log(e.target.value)
  }

  const handleFilterCreated = (e) => {
    e.preventDefault()
    dispatch(filterByCreated(e.target.value))
    console.log(e.target.value)
  }

  const handleFilterName = (e) => {
    e.preventDefault()
    dispatch(filterByName(e.target.value))

    // setear la pagina en 1
    setCurrentPage(1) 
    setOrder(`order = ${e.target.value}`)
    
  }


  return (
    <div>
        <Search/>
        <div className = {style.container__Nav}>
        {/*  Filtrado por tipos */}
          <select name="filterType" onChange = {e => handleFilterType(e)}>
            <option value="sortType" disabled = "disabled" >Sort type:</option>  
            <option value="all">All</option>
            {
              pokemonsType.map((type) => {
                return (
                  <option 
                    value={type.value}
                    key={type.id}
                  >
                    {type}
                  </option>
              )})
            }
          </select>
        {/*  Ordenado por existente o creado por nosotros */}
          <select name="filterCreate" onChange = {e => handleFilterCreated(e)}>
            <option value="created" disabled = "disabled">Created:</option>
            <option value="all">All</option>
            <option value="api">Pokeapi</option>
            <option value="created">Created</option>
          </select>

        {/*  Ordenado por A - Z */}
          <select name="orderASC" onChange = {e => handleFilterName(e)}>
            <option value="default" disabled = "disabled" >Sort by Name</option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        {/*  Ordenado por attack */}
          <select name="orderASC">
            <option value="default" disabled = "disabled" >Sort by Attack</option>
            <option value="asc">Attack A -Z </option>
            <option value="desc">Attack Z - A</option>
          </select>
      </div>
    </div>
  )
}

export default NavBar