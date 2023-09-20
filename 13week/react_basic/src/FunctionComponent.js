import PropTypes from 'prop-types'
//fucntion 컴포넌트 명, const 컴포넌트명 = () => {}
function FunctionComponent(props) {

  const myClass = 'kdt 8기';
  return (
    <>
    <h1>이것은 함수형 컴포넌트</h1>
    <div>반갑습니다. {myClass}에 오신 것을 환영합니다.</div>
    <div>{props.name}</div>
    <div>{props.age}</div>
    <div>{props.children}</div>
  </>
  )
}

FunctionComponent.defaultProps = {
  name: 'kdt',
}
FunctionComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}

export default FunctionComponent;