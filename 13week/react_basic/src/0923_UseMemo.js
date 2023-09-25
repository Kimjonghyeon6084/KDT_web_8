import { useState, useMemo } from "react"

export default function UseMemo () {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('')

  const calc = useMemo(() => {
    console.log('Calc.....');
    for (let i = 0; i < 10000000; i++) {}
    return count * 2
    
  }, [count])

  return (
    <>
      <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
      <button onClick={() => setCount(count + 1)}>Increament Count</button>
      <p>Count: {count}</p>
      <p>Double Count: {calc}</p>
    </>
  )
}