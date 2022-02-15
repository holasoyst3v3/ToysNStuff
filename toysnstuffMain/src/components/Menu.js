import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <header>
      <h2 style={{ color: "lightblue" }}>Toys N' Stuff</h2>
      <h4 style={{ color: "lightblue" }}>
        All of the pre owned goodies for your tots
      </h4>
      <nav>
      <button className="nav"><Link to="/">Home</Link></button>
      <button className="nav"><Link to="/Items">Buy/Sell</Link></button>
      <button className="nav"><Link to="/Register">Sign Up</Link></button>
      <button className="nav"><Link to="/Favorites">Favorites</Link></button>
      </nav>
    </header>
  );
}

export default Menu;
