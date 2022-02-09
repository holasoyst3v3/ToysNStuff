import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <header>
      <h2 style={{color:"lightblue"}}>Toys N' Stuff</h2>
      <h4 style={{color:"lightblue"}}>All of the pre owned goodies for your tots</h4>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/Items'>Buy</Link>
        <Link to='/Register'>Sign Up</Link>
      </nav>
    </header>
  )
}

export default Menu
