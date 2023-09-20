function Event() {

  const handleClick = () => {
    alert('클릭했습니다.')
  }
// ()안에 str 넣어야 하는 이유??
  const handleClick2 = (e, str) => {
    console.log(e);
    alert(str)
  }

  return <>
    <button onClick={handleClick}>클릭</button>
    <button onClick={(e) => handleClick2(e, '클릭2 클릭')}>클릭2</button>
  </>
}

export default Event