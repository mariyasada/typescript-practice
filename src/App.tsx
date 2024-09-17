import './App.css';
import { Route, Routes } from 'react-router';
import Login from './Pages/Login/Login';
import Header from './Components/Header/Header';
import Products from './Pages/Products/Products';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/productpage" element={<Products/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
