import React from "react";
// import { Image } from "cloudinary-react";

function FavoriteCard(props) {
  return (
    <div className="favorite-card">
      <div className="favorite-text-container">
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
      <div className="favorite-button-container">
        <button className="favorite-btn">💙</button>
      </div>
    </div>
  );
}

export default FavoriteCard;
