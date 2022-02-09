import axios from 'axios'
import React, {useState, useEffect} from 'react'
import ItemCard from './ItemCard'

function ItemPage() {
  const [data, setData] = useState()
  
  const getData = async () => {
    axios.get('http://localhost:3001/getItems')
    .then((res) => console.log('data data ya ya'))
    // .then((res) => setData(res.data[0]))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <h2>Have something to sell? Sell some Toys N' Stuff here...</h2>
      <h1>Items For Sale</h1>
      <div className='card-container'>
       {!data ? <p>Gathering toys n' stuff...</p> : data.map((element, index) => {
        return <ItemCard title={element.post_title} author={element.user_id} desc={element.item_desc} url={element.url} />
      }
      )} 
      </div>
      
    </div>
  )
}

export default ItemPage
