import { Route, Routes } from "react-router";
// import Routes from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import MenuTwo from "./components/MenuTwo";
import Home from "./components/Login";
import Register from "./components/Register";
import ItemPage from "./components/itemComponents/ItemPage";
import Upload from "./components/Upload";
import Favorites from "./components/Favorites";

function App() {
  return (
    <div className="App">
      <MenuTwo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="items" element={<ItemPage />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="upload" element={<Upload />} />
      </Routes>
    </div>
  );
}
export default App;

