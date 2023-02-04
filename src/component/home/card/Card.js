import React from 'react'

function Card(props) {
  return (
    <div>
      <div className="upperPart">
        <img src={props.imgUrl} alt={props.imgText} />
      </div>
      <div className="bottomPart">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default Card
