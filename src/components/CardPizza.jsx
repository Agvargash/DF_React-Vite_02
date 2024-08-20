import React from 'react'

export default function CardPizza(props) {
  return (
    <div className='card_container'>
    <div className="card" style={{ width: '20rem' }}>
    <img id='card_img' src={props.img} alt={props.img_alt} />
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.name}</li>
        <li className="list-group-item">{props.ingredients}</li>
        <li className="list-group-item">{props.price}
        <div className='card_buttons'>
        <button type="button" class="btn btn-light">Ver más 👀</button>
        <button type="button" class="btn btn-dark">Añadir 🛒</button>
        </div>
        </li>
      </ul>
    </div>
    </div>
  )
}
