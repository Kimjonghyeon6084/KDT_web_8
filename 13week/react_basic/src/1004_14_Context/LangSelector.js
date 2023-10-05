import { useContext } from "react";
import { ThemeContext } from "styled-components";


export default function LanguageSelecter () {
  //두번째 방법 useContext
  const {language, setLanguage} = useContext(ThemeContext)
  

  return (
      <div>
        <h2>현재 선택된 언어: {language}</h2>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value='ko'>한국어</option>
          <option value='jp'>일본어</option>
          <option value='en'>영어</option>
        </select>
      </div>
  )


  //첫번째 방법 Consumer
// return (
//  <MyContext.Consumer>
//     {(value) => {
//       return (
//       <div>
//         <h2>현재 선택된 언어: {value.language}</h2>
//         <select value={value.language} onChange={(e) => value.setLanguage(e.target.value)}>
//           <option value='ko'>한국어</option>
//           <option vlaue='jp'>일본어</option>
//           <option value='en'>영어</option>
//         </select>
//       </div>
//       )
//     }}
//    </MyContext.Consumer>
//   )


}