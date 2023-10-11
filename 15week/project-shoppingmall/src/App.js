import { useState } from 'react';
import './App.css';

function App() {
  let post = '강남 우동 맛집';
  const [title,setTitle] = useState(['남자 코트 추천', '맛집 추천', '파이썬 독학'])
  const [good, setGood] = useState(0)

  
  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>쇼핑몰임</h4>
        <button onClick={() => {
          const copy = [...title];
          copy[0] = '여자 코트 추천'
          setTitle(title)
        }}>첫번째 글 수정</button>
      </div>
      <div className='list'>
        <h4>{title[0]}<span onClick={() => {setGood(good + 1)}}>👍{good}</span></h4>
        <p>2월 17일 발행</p>      
      </div>

      <div className='list'>
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>      
      </div>
      <div className='list'>
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>      
      </div>
    </div>
  )
}

export default App;
