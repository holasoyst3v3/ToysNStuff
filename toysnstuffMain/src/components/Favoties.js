import React from 'react'

function FavoriteItem(props) {
  return (
    <div className='item-card'>
      <div className='card-text-container'>
        <h2>{props.post_title}</h2>
        <p>{props.post_desc}</p>
        <p>Sold by: {props.user_id}</p>
        <p>Price: {props.post_price}</p>
      </div>
      <div className='card-button-container'>
        <button>Favorite</button>
        <a href={props.url}><button>View</button></a>
      </div>
    </div>
  )
}

export default FavoriteItem