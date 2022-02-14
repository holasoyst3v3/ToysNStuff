// import axios, { Axios } from 'axios'
import React, { useState, useEffect, } from "react";
import axios, { Axios } from "axios";
import ItemCard from "./ItemCard";


function ItemPage() {
  const [data, setData] = useState(0);

  const [imageSelected, setImageSelected] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3001/getItems").then((res) => {
      // .then((res) => console.log('data data ya ya'))
      setData(res.data[0]);
    });
  }, []);

  const uploadImg = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "xlKm3d2!2op");

    Axios.post(
      "https://api.cloudinary.com/v1_1/dbvwkew7p/image/upload",
      formData
    ).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <h2>Have something to sell? Sell some Toys N' Stuff here...</h2>
      <div className="img-up-container">
        <div>
          <input
            type="file"
            onChange={(event) => {
              setImageSelected(event.target.files[0]);
            }}
          />
          <button onClick={uploadImg}>Upload</button>
        </div>
      </div>
      <h1>Items For Sale</h1>
      <div className="card-container">
        <div className="item">
          {!data ? (
            <p>Gathering some toys n' stuff...</p>
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
//
// data.map((element, index) => {return <ItemCard title={element.post_title} seller={element.username} desc={element.item_desc} url={element.url}
