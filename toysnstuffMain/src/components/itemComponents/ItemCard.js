import React from "react";
import axios from "axios";
// import { Image } from "cloudinary-react";

function ItemCard(props) {
  const user_id = localStorage.getItem("user_id");

  const favbtn = () => {
    axios.post(`http://localhost:3001/favorites/`, {user_id:user_id, post_id:props.id})
    console.log(props)
  }
  return (
    <div className="item-card">
      <div className="card-text-container">
        <h2>{props.title}</h2>
        <div>
          {props.image}
          {/* <Image
            style={{ width: 200 }}
            cloudname="dbvwkew7p"
            publcid="https://res.cloudinary.com/dbvwkew7p/image/upload/v1644878397/ANIDOM_BobsBurgers_4096x2160_03_bltgv7.jpg"
          ></Image> */}
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

/* <a href={props.url}><button>View</button></a> */
