import { useCallback, useState } from "react";

export default function ParentCompnent() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('')

  const IncreamentCount = useCallback(() => {
    setCount((prev) => prev + 1)
  },[])

  return (
    <>
    <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>

    <ChildComponent onClick={IncreamentCount}></ChildComponent>
    <p>Count: {count}</p>
    </>
  )
}

function ChildComponent ({onClick}) {
  console.log('child component render');
  return <button onClick={onClick}>IncreamentCount</button>
  
} 