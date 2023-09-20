//구조분해할당을 통해 가져오던 마음대로 할 것

import { Component } from 'react'; //1번방법
// import React from 'react' //2번방법
import { ReactPropTypes } from 'prop-types';


//class형 컴포넌트
//class 컴포넌트명 extends component {}

// class ClassComponent extends React.Component {} //1번방법
class ClassComponent extends Component {
  //클래스형 컴포넌트에서는 render함수는 필수

render() {
  // const name = 'Kimjonghyun'
  const {name} = this.props
  return <>
    <h1>Hello {name}</h1>
    <p>여기는 클래스형 컴포넌트</p>
    <h4>{name}</h4>
  </>
}
}

ClassComponent.defaultProps = {
  name:'김종현인데?'
};
// ClassComponent.propType = {
//   name: ReactPropTypes.string
// }
export default ClassComponent;