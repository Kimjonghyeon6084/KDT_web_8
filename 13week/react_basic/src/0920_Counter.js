import { Component } from "react"

class Counter extends Component {

  constructor(props) {
    super(props);

    this.state = {number: 0}

    //바인딩
    this.handleIncreament = this.handleIncreament.bind(this)
  }

  handleIncreament() {
    this.setState( {number: this.state.number + 1})
    this.setState((prevState) => ({numer: prevState.number + 1}))
  }

  handleDecreament = () => {
    //setState는 호출 직후에 상태가 바로 업데이트 되지 않는다.
    //react는 여러 setState 호출을 일괄 처리
    // this.setState({number: this.state.number - 1})
    // this.setState({number: this.state.number - 1})
    this.setState((prevState2) => ({numer: prevState2.number - 1}))
  }

  render() {
    return <div>
      <h1>{this.state.number}</h1>
      <button onClick={this.handleIncreament}>증가</button>
      <button onClick={this.handleDecreament}>감소</button>
    </div>
  }

}

export default Counter