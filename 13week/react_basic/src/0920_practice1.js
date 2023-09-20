import { useState } from 'react'
import './0920_practice_1.css'

const ChangeColor = () => {
  const[message, setMessage] = useState('')
  const[color, setColor] = useState('black')
  const[disappear, setDisappear] = useState(true)
  

const handleRemove = () => {
  setDisappear(false)
  // const divRemoveDiv = document.getElementById('asd')
  // if (divRemoveDiv){
  //   divRemoveDiv.remove()
  // }
}


return (
  <div className="container">
  <div className="red">
    {disappear ? <div style={{color}}>사라져보자?</div> : null}
    <button onClick={() => setColor('red')}>빨간색</button>
    <button onClick={() => setColor('blue')}>파란색</button>
    <button onClick={handleRemove}>사라져보기</button>
  </div>
</div>
)

}

export default ChangeColor