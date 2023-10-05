import { useContext } from "react";
import { ThemeContext } from "styled-components";


export default function ThemeSelecter () {
  //두번째 방법 useContext
  const {theme, setTheme} = useContext(ThemeContext)

  
  return (
      <div>
        <h2>현재 선택된 언어: {theme}</h2>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value='light'>밝은테마</option>
          <option value='dark'>어두운테마</option>
          
        </select>
      </div>
  )
}