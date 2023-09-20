// import './0919_practiec2_function.css'

const FruitFunctionComponent = () => {
  const title = '이번주 베스트셀러'
  const author = '김유진'
  const price = '13,500원'
  const type = '자기계발서'

  return (
    <>
      <h1>{title}</h1>
      <img src="./pngwing.com.png"></img>
      <h2>나의 하루는 4시 40분에 시작된다</h2>
      <p>저자 : {author}</p>
      <p>판매가 : {price}</p>
      <p>구분 : {type}</p>
    </>
    
  )
}

export default FruitFunctionComponent