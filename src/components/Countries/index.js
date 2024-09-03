import './index.css'

const Countries = ({obj, handleVisitBtn}) => {
  const {name, isVisited, id} = obj
  return (
    <li className="countries-list-li-container">
      <p>{name}</p>
      <div className="visit-btn-container">
        {isVisited ? (
          <p className="visited-style">Visited</p>
        ) : (
          <button onClick={() => handleVisitBtn(id)} type="button">
            Visit
          </button>
        )}
      </div>
    </li>
  )
}

export default Countries
