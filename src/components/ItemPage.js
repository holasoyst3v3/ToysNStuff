import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemCard from "./itemComponents/ItemCard";
import { Link } from "react-router-dom";

function ItemPage() {
  const [data, setData] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3001/getItems").then((res) => {
      setData(res.data[0]);
    });
  }, []);

  return (
    <div>
      <h2>Have something to sell? Sell some Toys N' Stuff here...</h2>
      <div className="img-up">
        <div>
          <button className="nav">
            <Link className="nav" to="/Upload" style={{ textDecoration: "none" }}>Upload your wares</Link>
          </button>
        </div>
      </div>
      <h1>Items For Sale</h1>
      <div className="card-container">
        <div className="item">
          {!data ? (
            <p>Gathering some toys n' stuff...</p>
          ) : (
            data.map((item, index) => {
              return (
                <ItemCard
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

export default ItemPage;
