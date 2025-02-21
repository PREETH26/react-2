// write button card here
import React from 'react'


function button({ props }) {
  return (
    <div id="hello">
      <img src={props.img} alt="User" />
      <h3>{props.name}</h3>
      <p>Price: {props.price}</p>
      <button>View product</button>
      
    </div>
  )
}

export default button