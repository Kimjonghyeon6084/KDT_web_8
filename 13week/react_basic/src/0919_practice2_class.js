import { Component } from "react";

class FruitClassComponent extends Component {
  render () {
    const {name} = this.props
    const style = {
      color: 'red'
    }
    return (
      <h1>props 실습 
        <span style={style}>{name}</span>
        </h1>
    )
  }
}

FruitClassComponent.defaultProps = {
  name: '기본 과일'
}


export default FruitClassComponent