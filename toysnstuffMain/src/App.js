import React from "react";
import {
  ComponentBrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Redirect,
  RouteLink,
} from "react-router-dom";
// import { Route, Routes } from "react-router";
import "./App.css";
import Menu from "./components/Menu";
import MenuTwo from './components/MenuTwo'
import Home from "./components/Login";
import Register from "./components/Register";
import ItemPage from "./components/itemComponents/ItemPage";
import Upload from "./components/Upload";
import Favorites from "./components/Favorites";

function Apps() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="items" element={<ItemPage />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="upload" element={<Upload />} />
      </Routes>
    </div>
  );
}
//Login
function App() {


  return (
    <div className="App">
      <div>
        <button>Login</button>
      </div>
      <MenuTwo />
      <Routes>
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="Login">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="items" element={<ItemPage />} />
        <Route path="register" element={<Register />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="upload" element={<Upload />} />
      </Routes>
    </div>
  );
}

export default App;
