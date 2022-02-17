import React from "react";
import { Link } from "react-router-dom";


function Menu() {
  // let navigate = useNavigate();
  let clearLocal = () => {
    localStorage.clear();
    window.location.reload();
      }
  return (
    <header>
      <h2 style={{ color: "lightblue" }}>Toys N' Stuff</h2>
      <h4 style={{ color: "lightblue" }}>
        All of the pre owned goodies for your tots
      </h4>
      <nav>
      <button className="nav"><Link className="nav" to="/items">Buy/Sell</Link></button>
      <button className="nav"><Link className="nav" to="/favorites">Favorites</Link></button>
      <button className="nav" onClick={clearLocal}>Sign Out</button>
      </nav>
    </header>
  );
}

export default Menu;
