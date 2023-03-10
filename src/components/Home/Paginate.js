import style from './Home.module.css'

const Paginate = ({pokemonsPerPage, allPokemons, paginate}) => {
    // Crear un array vacio para guardar los numeros de las paginas.
    const pageNumbers = [];
  
    // Recorrer los pokemons, donde debe ser menor o igual a la cantidad de pokemons dividido por la cantidad de pokemons por pagina. Math.ceil redondea hacia arriba.
    for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
        // Agregamos los numeros de las paginas al array vacio.
        pageNumbers.push(i);
    }

    // componente para renderizar los números de las páginas.
    return (
        <nav className= {style.paginate}>
            <ul className= {style.paginate__ul}>
                {pageNumbers && pageNumbers.map(number => (
                    // Agregamos un evento onClick para que al hacer click en el número de la página, se cambie el estado de la página actual.
                    <li className= {style.paginate__li} key={number}>
                        <a onClick={() => paginate(number)} >
                            {number}
                        </a>
                    </li>
                    
                ))}
            </ul>
        </nav>
    )

}

export default Paginate