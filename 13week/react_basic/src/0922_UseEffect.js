import { useState,useEffect } from "react";


function MyComponent(props) { //()안에 number or props 적는 이유는?
  
  const [text, setText] = useState('');

  useEffect(() => {
    // console.log('항상 실행 됩니다.'); // 콘솔이 2번 찍히는 이유는?
  })

  useEffect(() => {
    console.log('생성될 때 실행됩니다.');

    return () => {
      console.log('제거될 때 실행됩니다.');
      
    }
    
  }, [])

    useEffect(() => {
    console.log('state가 변경될 때');
    }, [text])
return <>
  <div>MyComponent {props.number}</div>
  <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
</>

}

export default function LifeCycleFunc () {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumberState = () => {
    setNumber(() => number + 1);
  }
  
  const changeVisibleState = () => {
    setVisible(() => !visible);
  }

  return <>
    <button onClick={changeNumberState}>PLUS</button>
    <button onClick={changeVisibleState}>ON/OFF</button>
    {visible && <MyComponent number={number}/>}
  </>
}