// import './App.css';
// import ClassComponent from './ClassComponent';
// import FunctionComponent from './FunctionComponent';
// import PracticeComponent from './0919_practice_1'
// import Test from './test';
// import Test2 from './test2';
// import FruitClassComponent from './0919_practice2_class';
// import FruitFunctionComponent from './0919_practice2_function';

// function App() {
//   return <>
//     {/* <h1>컴포넌트</h1> */}
//     {/* <ClassComponent name='food'></ClassComponent> */}
//     {/* <FruitClassComponent></FruitClassComponent> */}
//     <FruitFunctionComponent></FruitFunctionComponent>
//     {/* <ClassComponent></ClassComponent> */}
//     {/* <FunctionComponent name='kdt8' age={12}>안녕</FunctionComponent> */}
//     {/* <PracticeComponent/> */}
//     {/* <ClassComponent /> */}
//     {/* {<Test></Test>}
//     {<Test2></Test2>} */}
//   </>;
// }

// export default App;


// ------------------------20230920------------------------

// // 바인딩??8페이지
// // 인스턴스
import Event from "./0920_event"
import EventClass from "./0920_EventClass"
import Message from "./0920_message"
import Counter from "./0920_Counter"
import ChangeColor from "./0920_practice1"
import Board from "./0920_practice3"
import CounterFunc from "./0921_CounterFunc"
import ToggleFunc from "./0921_ToggleFunc"
import FunctionPractice from "./0920_practice_3"
import ContentFunc from "./0921_practice3"
import UseStatePrac5 from "./0921_practice5"
import LifeCycleClass from "./0922_LifeCycleClass"
import LifeCycleFunc from "./0922_UseEffect"
import UseEffectFuncPractice1 from "./0922_UseEffectFuncPreactice1"
import RefSample from "./0923_Useref1"
import RefSample2 from "./0923_refSample2"
import UseRef2 from "./0923_UseRef2"
import UseMemo from './0923_UseMemo'
import ParentCompnent from './0923_UseCallback'
import UseCallback2 from "./0923_UseCallback2"
import UseReducer from "./0923_UseReducer"
import LoginPage from "./0923_LoginPage"
import Style from "./0925_Style"
import SassComponent from "./0925_SassComponent"
// import Lavar from "./0925_Practice1"
import Practice2 from "./0925_Practice1"
import StyledComponent from './0925_StyledComponent'
import StyledComponentPrac2 from "./0925_StyleComponetPrac2"
// import Router from './0926_Router'
import Header from "./0926_12Router/Header"
import { Outlet } from "react-router-dom"

function App () {
  return(
    <>
      {/* <Event></Event>
      <EventClass></EventClass>
      <Message></Message> */}
      {/* <Counter></Counter> */}
      {/* <ChangeColor></ChangeColor> */}
      {/* <Board></Board> */}
      {/* <CounterFunc></CounterFunc> */}
      {/* <ToggleFunc></ToggleFunc> */}
      {/* <FunctionPractice></FunctionPractice> */}
      {/* <ContentFunc></ContentFunc> */}
      {/* <UseStatePrac5></UseStatePrac5> */}
      {/* <LifeCycleClass></LifeCycleClass> */}
      {/* <LifeCycleFunc></LifeCycleFunc> */}
      {/* <UseEffectFuncPractice1></UseEffectFuncPractice1> */}
      {/* <RefSample></RefSample> */}
      {/* <RefSample2></RefSample2> */}
      {/* <UseRef2/> */}
      {/* <UseMemo/> */}
      {/* <ParentCompnent/> */}
      {/* <UseCallback2></UseCallback2> */}
      {/* <UseReducer></UseReducer> */}
      {/* <LoginPage/> */}
      {/* <Style/> */}
      {/* <SassComponent/> */}
      {/* <Lavar/> */}
      {/* <Practice2/> */}
      {/* <StyledComponent/> */}
      {/* <StyledComponentPrac2></StyledComponentPrac2> */}
      {/* //버전1
      <Router/> */}
      {/* //버전2 */}
      <Header/>
      <Outlet/>
    </>
  )
}

export default App


