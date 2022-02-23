import React from "react";
import axios from "axios";
// import { Image } from "cloudinary-react";

function FavoriteCard(props) {
  const username = localStorage.getItem("username");
  const user_id = localStorage.getItem("user_id");

  const favdlt = () => {
    axios.delete(`http://localhost:3001/favorites/`, {data:{post_id:props.post_id, user_id:user_id, username:username}})
    console.log(props)
    window.location.reload();
  };
  return (
    <div className="favorite-card">
      <div className="favorite-text-container">
        <h2>{props.title}</h2>
        <div>
        <img src={props.image} style={{ width: 200 }} alt={"visual description"}/>
        </div>
        <p>{props.desc}</p>
        <p>Sold by: {props.seller}</p>
        <p>Price: ${props.price}</p>
      </div>
      <div className="favorite-button-container">
        <button className="favorite-btn" onClick={favdlt}>💙</button>
      </div>
    </div>
  );
}

export default FavoriteCard;
