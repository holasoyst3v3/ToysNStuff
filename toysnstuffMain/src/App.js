import { Route, Routes } from "react-router";
import { useState, useEffect } from "react";
// import Routes from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import Home from "./components/Login";
import Homepage from "./components/Homepage";
import Register from "./components/Register";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginUser = () => setIsLoggedIn(!isLoggedIn);

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <div className="App">
      <Menu/>
        <Routes>
        <Route path="*" element={ isLoggedIn ? <Homepage /> : <Home logFunction={loginUser}/> } />
        <Route path="register" element={<Register />}/>
      </Routes>
    </div>
  );
}

export default App;
