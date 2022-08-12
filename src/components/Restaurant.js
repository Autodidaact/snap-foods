import React from 'react'

function Restaurant({ results }) {
  return (
    <div className="resultsCard">
      <figure className="image is-48x48">
        <img src={results.photograph} alt={results.name}/>
      </figure>
      <h4>{results.name}</h4>
      <span>Address:{results.address}</span>
    </div>
  )
}
export default Restaurant;