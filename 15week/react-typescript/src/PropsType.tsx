import React, {useState, useRef} from "react"

//interface 할 땐 Props 뒤에 = 이런거 안들어 감
interface Props {
  name: string | number,
  age?: number
}

// 방법1
//FC : function Component
const PropsType1:React.FC<Props> = ({ name, age }) => {

const [count, setCount] = useState<number>(0);
const myInput = useRef<HTMLInputElement>(null)

const handleFocus = () => {
  myInput.current!.focus()
}

const onClick = (e: React.MouseEvent<HTMLElement>) => {}

  return (
    <>
      <h2>hello { name }</h2>
      <h4>{age}</h4>
      <input ref={myInput} />
      <button onClick={handleFocus}>버튼</button>
      <form action="">
        <button onClick={(e) => onClick(e)}>제출</button>
      </form>
    </>
  )
}

// 방법2
// export default function PropsType1({ name }:Props) {
//   return (
//     <>
//       <h2> hello {name}</h2>
//     </>
//   )
// }


export default PropsType1