import React from 'react'
import Sujan from "../../assets/sujan.jpg"
import "./card.css"

function Card(props) {
  const altname = `${props.name} user pic`

  return (
    <div className="card">
      <div className="top">
        <img src={props.image} alt={altname} />
        <div className="text">
          <h2>{props.name}</h2>
          <p>Bhairahawa, Nepal</p>
        </div>
      </div>
      <p>Choosing to pursue my degree at Bhairahawa Multiple Campus  was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
    </div>
  )
}

export default Card
