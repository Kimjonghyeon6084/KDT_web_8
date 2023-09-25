import { useState } from "react";

export default function LoginForm({state, disaptch}) {
const [id, setId] = useState('');
cosnt [pw, setPw] = useState('');
const userInfo = {realId : 'banana', realPw : '4321'}

const handleLoginForm = (e) => {
  e.preventDefault();
  const {realId, realPw} = userInfo;

  if (id === realId && pw===realPw) dispatch({type: 'LOGIN_SUCCESS'})
  else if(id !== realId && pw === realPw) dispatch({type: 'MISS_ID'})
  else if(id === realId && pw !== realPw) dispatch({type: 'MISS_PW'})
  else if(id !== realId && pw !== realPw) dispatch({type: 'LOGIN_FAILURE'})
}

return(
  <>
    <form action="" onSubmit={handleLoginForm}>
      <label htmlFor="id">ID</label>
      <input id="id" type="text" onChange={(e) => setId(e.target.value)} />
      <br />

      <label htmlFor="pw">PW</label>
      <input
        id="pw"
        type="password"
        onChange={(e) => setPw(e.target.value)}
      />
      <br />

      <button>Login</button>
      <br />

      <p>{state.message}</p>
    </form>
  </>
)
}