const CardsHome = ({name, image, type}) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt="" />
      <h3>{type}</h3>
    </div>
  )
}

export default CardsHome