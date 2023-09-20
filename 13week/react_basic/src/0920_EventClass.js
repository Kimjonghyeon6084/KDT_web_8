import {Component} from 'react'

class EventClass extends Component {

  //생성자
    constructor(props) {
      super(props) //부모 클래스인 Component의 생성자 호출

      this.handleClick = this.handleClick.bind(this)
    }
    

  handleClick () {
    console.log(this);
    alert('클래스형 컴포넌트입니다.')
    
  }

  handleClick2 = () => {
    console.log('화살표함수', this);
    alert('클래스형 컴포넌트 2 입니다.')
    
  }
  showMessage = () => {
    
    alert('show message')
  }
  
  render() {
    
    return <>
      <button onClick={this.handleClick}>클릭 클래스</button>
      <button onClick={this.handleClick2}>클릭2 클래스</button>
      <button onClick={this.showMessage}>Show Message</button>
    </>
  }

}

export default EventClass