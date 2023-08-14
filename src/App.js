import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Shop from './components/Shop';
import Login from './components/Login';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [product, setProduct] = useState([
    
  ]);
  

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />

        <Route path='*' element={<div>존재하지 않는 페이지</div>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
