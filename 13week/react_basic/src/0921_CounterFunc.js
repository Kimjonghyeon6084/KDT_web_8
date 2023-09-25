import { useState } from "react"

export default function CounterFunc() {

  const [number, setNumber] = useState(0)
  // console.log(number);

  const handeIncrement = () => {
    setNumber(() => number + 1)
  }

  const handeDecrement = () => {
    setNumber(() => number - 1)
  }
  
  return <div>
      <h1>{number}</h1>
      <button onClick={handeIncrement}>증가</button>
      <button onClick={handeDecrement}>감소</button>
  </div>
}