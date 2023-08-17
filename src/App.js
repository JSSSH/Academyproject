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
      content : '울렁이는 물결을 닮은 베이스, 어느 방향으로 바라보아도 부드러운 곡선의 미가 느껴집니다.',
      price : 15000,
    },
    {
      id : 1,
      name : 'p2',
      title : '예쁜 화병',
      content : '울렁이는 물결을 닮은 베이스, 어느 방향으로 바라보아도 부드러운 곡선의 미가 느껴집니다.',
      price : 15000,
    },
    {
      id : 2,
      name : 'p3',
      title : '강한 화병',
      content : '울렁이는 물결을 닮은 베이스, 어느 방향으로 바라보아도 부드러운 곡선의 미가 느껴집니다.',
      price : 15000,
    },
    {
      id : 3,
      name : 'p4',
      title : '멋진 접시',
      content : '작고 오목한 샘을 닮은 오벌 플레이트, 물에 갠 흙을 이용하여 기물 표면에 더한 텍스쳐는 마치 모래의 질감처럼 느껴집니다.',
      price : 11000,
    },
    {
      id : 4,
      name : 'p5',
      title : '예쁜 접시',
      content : '작고 오목한 샘을 닮은 오벌 플레이트, 물에 갠 흙을 이용하여 기물 표면에 더한 텍스쳐는 마치 모래의 질감처럼 느껴집니다.',
      price : 11000,
    },
    {
      id : 5,
      name : 'p6',
      title : '강한 접시',
      content : '작고 오목한 샘을 닮은 오벌 플레이트, 물에 갠 흙을 이용하여 기물 표면에 더한 텍스쳐는 마치 모래의 질감처럼 느껴집니다.',
      price : 11000,
    },
    {
      id : 6,
      name : 'p7',
      title : '멋진 컵',
      content : '두 개의 원이 교차하는 기하학적 구조가 매력적인 머그, 얇고 둥근 핸들 손잡이는 마치 바다 위를 이어주는 다리처럼 보여집니다.',
      price : 8000,
    },
    {
      id : 7,
      name : 'p8',
      title : '예쁜 컵',
      content : '두 개의 원이 교차하는 기하학적 구조가 매력적인 머그, 얇고 둥근 핸들 손잡이는 마치 바다 위를 이어주는 다리처럼 보여집니다.',
      price : 8000,
    },
    {
      id : 8,
      name : 'p9',
      title : '강한 컵',
      content : '두 개의 원이 교차하는 기하학적 구조가 매력적인 머그, 얇고 둥근 핸들 손잡이는 마치 바다 위를 이어주는 다리처럼 보여집니다.',
      price : 8000,
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
