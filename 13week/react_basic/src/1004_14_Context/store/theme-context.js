import { createContext, useState } from 'react';

//Context 생성
//Provider와 Comsumer 두개의 리액트 컴포넌트를 반환.

//Context
const ThemeContext = createContext({
  //어떤 것을 쓸거다~ 라고 선언만 해놓는다고 생각하면 됨
  language: '',
  theme: '',
  setLanguage: () => {},
  setTheme: () => {},
});

//Provider Component
export function ThemeProvider(children) {

  const [language, setLanguage] = useState('ko');
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={{language, setLanguage, theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext;