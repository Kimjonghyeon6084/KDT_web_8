import { useDispatch, useSelector } from "react-redux"
import { changeCount} from "../store"
import { changeAge, changeName } from "./../store/userSlice"
import { addCount } from "../store/userCart"
import NavberMain from './NavbarMain'




export default function Cart(){

  const state = useSelector((state) => {return state})
  // console.log('state : ', state);

  //store.js로 요청 보내주는 함수
  const dispatch =  useDispatch()
  const basket = state.basket;
  const cart = state.cart;
  // console.log(state.basket);
  console.log('state.cart : ', state.cart);
  
  
  
  return (
    <>
    <div>
      {state.user.name} {state.user.age}살의 장바구니
      <button onClick={() => {
        dispatch(changeAge(10))
      }}>버튼</button>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((item, i) => {
            // console.log('item : ', item);
            return (
              <tr key={i}>
                <td>{state.cart[i].id}</td>
                <td>{state.cart[i].name}</td>
                <td>{state.cart[i].count}</td>
                <td>안녕</td>
                {/* <td><button onClick={() => {
                  dispatch(changeName())
                }}>+</button></td> */}
                <td><button onClick={() => {
                  dispatch(addCount(i))
                }}>수량증가</button></td>
              </tr>
            )
          })}
          

        </tbody>
      </table>
    </div>
    </>
    
  )
}