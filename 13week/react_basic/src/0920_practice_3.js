import { useState } from 'react'

const FunctionPractice = () => {
  const [inputUser, setInputUser] = useState('');
  // userName = document.querySelector('#name');
  // userTitle = document.querySelector('#title');
  const [add, setAdd] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = () => {
    const searchValue = document.getElementById('search').value;
    const filteredResults = add.filter((item) => {
      return item.id.toString() === searchValue;
    });

    setSearchResult(filteredResults);
  };

  

  //작성 버튼 클릭시 작성자 이름과 작성 제목이 테이블 요소에 들어가도록.



  return (
    <>
      <fieldset>
        <label>작성자 :</label>
        <input id='name' type='text' placeholder='작성자'></input>
        <label>제목 :</label>
        <input id='title' type='text'></input>
        <button onClick={() => {
          const name = document.getElementById('name').value
          const title = document.getElementById('title').value

          setAdd(prev => [...prev, {id: prev.length+1, name, title}])
        }}>작성</button>
      </fieldset>
      <select>
        <option>작성자</option>
        <option>제목</option>
      </select>
      <input id='serach'></input>
      <button onClick={handleSearch}>검색</button>

      <table border={1}>
        <th>번호</th>
        <th>제목</th>
        <th>작성자</th>
        {
          add.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.name}</td>
                </tr>
                <tbody>
          {searchResult.length > 0 ? (
            searchResult.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.name}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">검색 결과가 없습니다.</td>
            </tr>
          )}
        </tbody>
              </>
            )
          })
        }
      </table>
    </>
  ) 
}

//배열
//spraed 이용해보기




export default FunctionPractice

