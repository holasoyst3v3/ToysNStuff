import React, { useState, useEffect } from "react";
import axios from "axios";
import FavoriteCard from "./itemComponents/FavoriteCard";

function Favorites(props) {
  const [data, setData] = useState([]);
  // const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    axios.get(`http://localhost:3001/getFavorites/2`).then((res) => {
      // .then((res) => console.log('data data ya ya'))
      console.log(res.data[0]);
      setData(res.data[0]);
    });
  }, []);

  return (
    <div>
      <h1>Your Favorites</h1>
      <div className="favorite-container">
        <div className="fav">
          {!data ? (
            <p>Gathering some toys n' stuff...</p>
          ) : (
            data.map((item, index) => {
              // console.log(item)
              return (
                <FavoriteCard
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

// const getData = async () => {
//   axios
//     .get("http://localhost:3001/getFavorites")
//     // .then((res) => console.log('data data ya ya'))
//     .then((res) => setData(res.data[0]));
// };

// useEffect(() => {
//   getData();
// }, []);
