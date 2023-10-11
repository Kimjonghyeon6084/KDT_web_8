import { useState } from 'react';
import './App.css';
import Modal from './Component/Modal';
import Navbar from './Component/Navber';

function App() {
  
  const [title,setTitle] = useState(['남자 코트 추천', '맛집 추천', '파이썬 독학'])
  const [good, setGood] = useState([0,0,0,0])
  const [modal, setModal] = useState(false)
  const [modalData, setModalData] = useState({title: '', date: ''})
  const [input, setInput] = useState('')

  // const copy = [...title];
  // copy[0] = '여자 코트 추천'
  

  return (
    <div className='App'>
      <Navbar/>

      {
        title.map(function(a, i){        
          return (
            <div key={i} className='list' onClick={() => {
                setModal(modal => !modal)
                setModalData({title: a})
                }
              }>
              <h4 key={i}>{a}<span onClick={(e) => {
                e.stopPropagation();
                let copy = [...good];
                copy[i] = copy[i] + 1
                setGood(copy)
                }}>👍</span>{good[i]}</h4>
              <p>2월 17일 발행</p>   
              <button onClick={() => {
                let copy = [...title]
                copy.splice(i, 1)
                setTitle(copy)
                //input 다루기2 : 블로그 글발행 기능 만들기
                // setTitle(title.filter((title) => title.i !== i))
              }}>삭제</button>  
            </div>
          )
      })}

      <input onChange={(e) => {
        setInput(e.target.value)
        console.log(input);
      }}/>
      <button onClick={() => {
        let copy = [...title];
        copy.unshift(input);
        setTitle(copy)
      }}>글발행</button>

      {
        modal === true ? <Modal setTitle={setTitle} modalData={modalData} /> : null
      }
      <button onClick={() => {
          const copy = [...title];
          copy[0] = '여자 코트 추천'
          setTitle(copy)
        }}>첫번째 글 수정</button>
        <button onClick={() => {
          let copy = [...title];
          copy.sort()
          setTitle(copy)
        }}>가나다순정렬</button>
    </div>
  )
}

export default App;
