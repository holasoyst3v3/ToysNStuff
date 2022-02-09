import { Route, Routes } from 'react-router';
import './App.css';
import Menu from './components/Menu';
import Home from './components/Login';
import Register from './components/Register';
import ItemPage from './components/itemComponents/ItemPage';

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='items' element={<ItemPage />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
