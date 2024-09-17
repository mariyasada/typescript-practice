import './App.css';
import { Route, Routes } from 'react-router';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
