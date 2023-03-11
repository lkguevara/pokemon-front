import style from './Home.module.css'
import { Link } from 'react-router-dom'

const CardsHome = ({name, image, type, id}) => {
  return (
    <>
      <div className= {style.card}>
          <Link className = {style.link} to={`/detail/${id}`}>
            <img className = {style.card__image} src={image} alt="" />
            <h2 className={style.card__title}>{name}</h2>
            <p className={style.card__id}>#{id}</p>

            <p className={style.card__type}>{type.map((type) => {
              return (
                <span key={type.id}>{type} </span>
              )
            })}</p>
            {/* <p className={style.card__type}>{type}</p> */}
            

          </Link>
 
      </div>
      
    </>
  )
}

export default CardsHome