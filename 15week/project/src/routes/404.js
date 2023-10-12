import { useNavigate } from "react-router-dom"

export default function NotFoundPage () {

  const navigate = useNavigate()

  return (
    <>
      <div>존재하지 않는 페이지입니다.</div>
      <div onClick={() => {navigate('/')}}>home으로 돌아가기</div>
    </>
  )
}