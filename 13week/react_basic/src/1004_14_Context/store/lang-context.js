import React, { createContext } from 'react';

//Context 생성
//Provider와 Comsumer 두개의 리액트 컴포넌트를 반환.

const MyContext = createContext({
  //어떤 것을 쓸거다~ 라고 선언만 해놓는다고 생각하면 됨
  language: '',
  setLanguage: () => {},
});

export default MyContext;