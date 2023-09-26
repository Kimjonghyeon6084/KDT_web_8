import { Link, useNavigate } from "react-router-dom"


export default function Header () {

  //useNavigate():Link 컴포넌트를 사용하지 않고 사용자를 어딘가로 이동시키는 기능
  const navi = useNavigate()

  const onClick = () => {
    navi('redirect')
  }

  //Link: 유저가 클릭했을 때
  return <div>
    <ul>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to='user'>User</Link>
      </li>
      <li>
        <button onClick={onClick}>Redirect</button>
      </li>
    </ul>
  </div>
}