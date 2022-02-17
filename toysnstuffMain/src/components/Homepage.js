import React from "react";
import { Routes, Route } from "react-router";
import Menu from "./Menu";
import ItemPage from "./itemComponents/ItemPage";
import Upload from "./Upload";
import Favorites from "./Favorites";

function Homepage() {
  return (
    <div>
    <Menu/>
      <Routes>
        <Route path="items" element={<ItemPage />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="upload" element={<Upload />} />
      </Routes>
    </div>
  );
}

export default Homepage;
