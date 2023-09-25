import { useRef } from "react"

const UseRef2 = () => {

  //1. ref 객체 만들기

  const idRef = useRef(0)
  const plusIdRef = () => {
    idRef.current += 1;
    console.log(idRef.current);
    
  }
  
  return (
    <>
      <p>useRef 로컬 변수 사용</p>
      <h2>{idRef.current}</h2>
      <button onClick={plusIdRef}>plus ref</button>
    </>
  )
  }
  export default UseRef2