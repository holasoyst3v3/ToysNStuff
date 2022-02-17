import React from "react";
import { Routes, Route } from "react-router";
import ItemPage from "./ItemPage";
import Upload from "./Upload";
import Favorites from "./Favorites";

function Homepage() {
  return (
    <div>
      <Routes>
        <Route path="items" element={<ItemPage />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="upload" element={<Upload />} />
      </Routes>
    </div>
  );
}

export default Homepage;
