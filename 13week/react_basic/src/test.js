import './test.css'



const Test = () => {
  const name = '김종현'
  const myStyle = {'background-color': 'blue',
  'color': 'orange',
  'font-size': '40px',
  'padding': '12'
}
  return (
    <>
      <div style={ myStyle }>
        <h2>{name}</h2></div>
      {/* <div className='myStyle'>{myStyle}</div> */}
    </>
  )
}



export default Test