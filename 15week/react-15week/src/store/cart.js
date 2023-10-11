import {createStore} from 'redux'


const ADD_CART = 'ADD_CART'
const REMOVE_CART = 'REMOVE_CART'
//리듀서 함수
const reducer = (state = [], action) => {
  console.log(action);
  
  switch(action.type) {
    case ADD_CART:
      //findIndex()는 배열의 index 값을 찾아주며 존재하지 않는다면 -1반환, 존재할 시 해당 index값을 반환한다.
      const findIndex = state.findIndex( element => element.id === action.product.id)
      if (findIndex !== -1) {
        //존재할때
        const newState = [...state]
      } else {
        //존재하지 않을 때
        return [...state, {...action.product, quantity: 1}]

      }
    case REMOVE_CART:
      return state.filter((element) => element.id !== action.id)
    // null를 두면 안되고 state나 
    default:
      return state
  }
}


//스토어 생성, 리듀서 함수가 필수
const store = createStore(reducer)

export default store;


