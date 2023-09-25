import { useState } from 'react'
import './0920_practice_1.css'

const ChangeColor = () => {
  const[message, setMessage] = useState('')
  const[color, setColor] = useState('black')
  const[disappear, setDisappear] = useState(true)
  const[content, setContent] = useState('사라져볼게 하나 둘 셋 얍 !')
  const[button, setButton] = useState('사라져라')
  

const handleRemove = () => {
  // setDisappear(false)
  if (disappear === false) {
    setDisappear(true); setContent('다시 왔지롱'); setButton('사라져라')
  } else {
    setDisappear(false); setContent('사라져볼게 하나 둘 셋 얍 !'); setButton('보여라')
  }
  // const divRemoveDiv = document.getElementById('asd')
  // if (divRemoveDiv){
  //   divRemoveDiv.remove()
  // }
}


return (
  <div className="container">
  <div className="red">
    {disappear ? <div style={{color}}>{content}</div> : null}
    {/* <button onClick={() => setColor('red')}>빨간색</button>
    <button onClick={() => setColor('blue')}>파란색</button> */}
    <button onClick={handleRemove}>{button}</button>
  </div>
</div>
)

}

export default ChangeColor