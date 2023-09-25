import { useState, useRef } from 'react';
import styled from 'styled-components';
import './0925_StyledComponentPrac2.css'

// const _Btn = styled.button`
// background-color: blue;
// width: 200px;
// height: 100px;
// color: white;
// div:active {
//   background-color: red;
//   color: black;
//   padding: 38px 0 38px 0;
// }
// `;



const _Input = styled.input`
margin: 20px;
`

const _Btn2 = styled.button`
  background-color: aqua;
  `;






export default function StyledComponentPrac2 () {

  const inputRef = useRef()



  const [todos, setTodos] = useState([])

    return(
      <div>
            <_Input ref={inputRef}/>
        <_Btn2 onClick={() => {
          // const inputValue = document.getElementsByTagName('input')
          // const inputvalue = document.getElementsByClassName('cFPSRQ').value
          // const value = document.getElementsByTagName('input').value

          const input = inputRef.current;

          setTodos(prev => [...prev, {id: prev.length+1, value : input.value}])
        }}>Add</_Btn2>
        <div  className='c' >
        {todos.map((item, index) => {
          return (
            <>
              <div key={index}>{item.id} : {item.value}</div>
          </>
          )
          }
    )
    
}
</div>
    </div> 
  )

}
