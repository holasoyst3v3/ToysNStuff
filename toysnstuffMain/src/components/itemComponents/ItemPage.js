// import axios, { Axios } from 'axios'
import axios from "axios";
import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

function ItemPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/getItems").then((res) => {
      setData(res.data[0]);
    });
  }, []);

  return (
    <div>
      <h2>Have something to sell? Sell some Toys N' Stuff here...</h2>
      <h1>Items For Sale</h1>
      <div className="card-container">
        {!data ? (
          <p>Gathering toys n' stuff...</p>
        ) : (
          data.map((data, index) => {
            return (
              <ItemCard
                title={data.post_title}
                seller={data.username}
                desc={data.item_desc}
                price={data.post_price}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default ItemPage;

// const getData = async () => {
//   axios.get('/getItems')
//   // .then((res) => console.log('data data ya ya'))
//   .then((res) => setData(res.data[0]))
// }

// useEffect(() => {
//   getData()
// }, [])

// data.map((element, index) => {return <ItemCard title={element.post_title} seller={element.username} desc={element.item_desc} url={element.url}
