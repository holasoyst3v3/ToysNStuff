import React, { useState, useEffect } from "react";
import axios from "axios";
import FavoriteCard from "./itemComponents/FavoriteCard";

function Favorites(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    let user_id = localStorage.getItem('user_id');
    axios.get(`http://localhost:3001/getFavorites/${user_id}`).then((res) => {
      setData(res.data[0]);
    });
  }, []);

  var username = localStorage.getItem('username');

  return (

    <div>
      <h1>{username}'s Favorites</h1>
      <div className="favorite-container">
        <div className="fav">
          {!data ? (
            <p>Gathering some liked toys n' stuff...</p>
          ) : (
            data.map((item, index) => {
              return (
                <FavoriteCard
                  post_id={item.post_id}
                  title={item.post_title}
                  image={item.post_media}
                  seller={item.username}
                  desc={item.post_desc}
                  price={item.post_price}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
