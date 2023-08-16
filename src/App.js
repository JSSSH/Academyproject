import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Shop from './components/Shop';
import Login from './components/Login';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { useState } from 'react';
import Detail from './components/Detail';

function App() {
  const [product, setProduct] = useState([
    {
      id : '0',
      name : 'p1',
      title : '멋진 화병',
      price : '15,000원',
    },
    {
      id : 1,
      name : 'p2',
      title : '예쁜 화병',
      price : '15,000원',
    },
    {
      id : 2,
      name : 'p3',
      title : '강한 화병',
      price : '15,000원',
    },
    {
      id : 3,
      name : 'p4',
      title : '멋진 접시',
      price : '15,000원',
    },
    {
      id : 4,
      name : 'p5',
      title : '예쁜 접시',
      price : '15,000원',
    },
    {
      id : 5,
      name : 'p6',
      title : '강한 접시',
      price : '15,000원',
    },
    {
      id : 6,
      name : 'p7',
      title : '멋진 컵',
      price : '15,000원',
    },
    {
      id : 7,
      name : 'p8',
      title : '예쁜 컵',
      price : '15,000원',
    },
    {
      id : 8,
      name : 'p9',
      title : '강한 컵',
      price : '15,000원',
    }
  ]);
  
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/shop' element={<Shop product={product}/>} />
        <Route path='/detail/:id' element={<Detail product={product}/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />

        <Route path='*' element={<div>존재하지 않는 페이지</div>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
