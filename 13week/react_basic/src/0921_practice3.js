import { useState,useRef } from "react";

export default function ContentFunc () {
  const [board, setBoard] = useState([])
  const [filteredBoard, setFilteredBoard] = useState([])
  const [isFiltering, setIsFiltering] = useState(false)


  const writerInputRef = useRef()
  const titleInputRef = useRef()


  

  const onReset = () => {
    const writers = writerInputRef.current
    const titles = titleInputRef.current

    if(writers.value.length === 0) {
      writers.focus()
      return;
    }

    if(titles.value.length === 0 ) {
      titles.focus()
      return
    }
    
  }


  return (
    <>
      <fieldset>
        <label>작성자</label>
        <input name="name" placeholder='작성자' id='id' ref={writerInputRef}></input>
        <label>제목</label>
        <input name="title" placeholder='제목' id='title' ref={titleInputRef}></input>
        <button onClick={() => {
          const writers = writerInputRef.current
          const titles = titleInputRef.current
      
          if(writers.value.length === 0) {
            writers.focus()
            return;
          }
      
          if(titles.value.length === 0 ) {
            titles.focus()
            return
          }
    

          setBoard(prev => [...prev, {writer : writers.value, title : titles.value}]);

        }}>작성</button>
        {/* <button onClick={onReset}>focus 작성</button> */}
      </fieldset>

      <br />

      <div>
        <select id="standard">
          <option value="작성자">작성자</option>
          <option value="제목">제목</option>
        </select>

      <input placeholder='검색' id="word"></input>
      
      <button onClick={() => {
        const standard = document.querySelector('#standard').value
        const word = document.querySelector('#word').value

        setIsFiltering(true)

        let filteredList

        if(standard === '작성자') {
          filteredList = board.filter(item => item.writer.includes(word))
        } else {
          filteredList = board.filter(item => item.title.includes(word))
        }

        setFilteredBoard(filteredList)
      }}>검색</button>
      <button onClick={() => {setIsFiltering(false)}}>전체</button>
      </div>
      
      <table border={1}>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
        </tr>

        {
          !isFiltering ? (board.map((item, index) => {
              return (
                <>
                  <tr key={index+1}>
                    <td >{index}</td>
                    <td >{item.title}</td>
                    <td >{item.writer}</td>
                  </tr>
                </>
              )
            })
          ) : (
            filteredBoard.map((item, index) => {
              return (
                <>
                  <tr key={index+1}>
                    <td>{index}</td>
                    <td>{item.title}</td>
                    <td>{item.writer}</td>
                  </tr>
                </>
              )
            })
          )
        }
      </table>
    </>
  );
}