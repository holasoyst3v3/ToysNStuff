import React from "react";
import axios from "axios";
// import { Image } from "cloudinary-react";

function ItemCard(props) {
  const username = localStorage.getItem("username");
  const user_id = localStorage.getItem("user_id");

  const favbtn = () => {
    axios.post(`http://localhost:3001/favorites/`, {post_id:props.post_id, user_id:user_id, username:username})
    console.log(props)
  }

  return (
    <div className="item-card">
      <div className="card-text-container">
        <h2>{props.title}</h2>
        <div>
          <img src={props.image} style={{ width: 200 }} alt={"visual description"}/>
        </div>
        <p>{props.desc}</p>
        <p>Sold by: {props.seller}</p>
        <p>Price: ${props.price}</p>
      </div>
      <div className="card-button-container">
        <button className="favorite-btn" onClick={favbtn}>💙</button>
      </div>
    </div>
  );
}

export default ItemCard;
