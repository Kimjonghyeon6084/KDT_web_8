import './AppBasic.css';
import './App.css';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Main from './routes/Main';
import Detail from './routes/Detail';
import List from './routes/Main';
import NotFoundPage from './routes/404';
import About from './routes/about';
import data from './Component/data';
import Cart from './routes/Cart';
import { useEffect, useState } from 'react';
import NavbarMain from './routes/NavbarMain';
import Login from './routes/Login';


function App() {
  
  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify([]))
  }, [])

  //누가 Detail페이지 접속하면
  //그 페이지에 보이는 상품 id 가져와서
  //localstorage에 watched 항목에 추가
  
  

  const [shoes, setShoes] = useState(data);
  console.log('shoes : ', shoes);
  console.log(shoes)


  return (
    <>
    <NavbarMain />
      <Routes>
        <Route path='/' element={<Main shoes={shoes} setShoes={setShoes}/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* <Route path='/list' element={<List shoes={shoes} setShoes={setShoes}/>}/> */}
        <Route path='/detail/:id' element={<Detail shoes={shoes}/>}/>
          <Route path='/cart' element={<Cart/>}/>
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>우리 멤버는 한명이야!</div>}/>
        </Route>
        <Route path='/*' element={<NotFoundPage/>}/>
      </Routes>
      </>
  );
}

export default App;
