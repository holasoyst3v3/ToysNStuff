import { Route, Routes } from "react-router";
import "./App.css";
import Menu from "./components/Menu";
import Home from "./components/Login";
import Register from "./components/Register";
import ItemPage from "./components/itemComponents/ItemPage";
import Upload from "./components/Upload";
import Favorites from "./components/Favorites";

function App() {
  return (
    <div className="App">
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
