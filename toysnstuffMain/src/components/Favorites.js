import React, { useState, useEffect } from "react";
import axios from "axios";

function FavoriteItem(props) {
  const [data, setData] = useState();
  const setData = async () => {
    axios
      .get("http://localhost:3001/getFavorites")
      .then((res) => console.log('data data ya ya'))
      .then((res) => setData(res.data[0]));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="favorite-card">
      <div className="favorite-text-container">
        <h2>{props.post_title}</h2>
        <p>{props.post_desc}</p>
        <p>Sold by: {props.user_id}</p>
        <p>Price: {props.post_price}</p>
      </div>
      <div className="favorite-button-container">
        <button>Favorite</button>
        <a href={"/"}>
          <button>View</button>
        </a>
      </div>
    </div>
  );
}

export default FavoriteItem;
