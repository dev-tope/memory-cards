import '../styles/Card.css'

const Card = ({ id, name, imgURL, handleClick }) => {
  return (
    <div className="card" id={id} onClick={handleClick}>
      <div className="img-div">
        <img src={imgURL}/>
      </div>
      <div className="name-div">
        <p>{name}</p>
      </div>
    </div>
  )
}

export default Card