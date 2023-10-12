import './App.css';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Main from './routes/main';
import Detail from './routes/Detail';
import AutoLayoutExample from './routes/List';
import NotFoundPage from './routes/404';
import About from './routes/about';
import data from './Component/data';
import { useState } from 'react';



function App() {
  
  const [shoes,setShoes] = useState([data])
  console.log('shoes : ', shoes);
  


  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/list' element={<AutoLayoutExample data={data}/>}/>
        <Route path='/detail/:id' element={<Detail shoes={shoes}/>}/>
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>우리 멤버는 한명이야!</div>}/>
        </Route>
        <Route path='/*' element={<NotFoundPage/>}/>
      </Routes>
      </>
  );
}

export default App;
