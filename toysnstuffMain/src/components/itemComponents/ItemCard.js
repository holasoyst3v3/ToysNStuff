import React from "react";
import {Image} from "cloudinary-react"


function ItemCard(props) {
  return (
    <div className="item-card">
      <div className="card-text-container">
        <h2>{props.post_title}</h2>
        <div><Image cloudname="dbvwkew7p" publcid=""></Image></div>
        <p>{props.post_desc}</p>
        <p>Sold by: {props.username}</p>
        <p>Price: {props.post_price}</p>
      </div>
      <div className="card-button-container">
        <button>Favorite</button>
        <a href={"/"}>
          <button>View</button>
        </a>
      </div>
    </div>
  );
}

export default ItemCard;

/* <a href={props.url}><button>View</button></a> */
