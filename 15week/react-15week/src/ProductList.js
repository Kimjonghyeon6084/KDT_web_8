import { useDispatch } from "react-redux";
import {ADD_CART} from './store/cart'


export default function ProductList() {
  const products = [
    {id: 1,
    name: 'a상품',
    price: 1000,
  },
    {id: 2,
      name: 'b상품',
      price: 1500,
    },
  {id: 3,
    name: 'c상품',
    price: 2000,
  }
  ]

  const dispatch = useDispatch();

  const addProduct = (product) => {
    //이 함수에서 product는 위에 있는 products 배열의 객체 하나
    dispatch({type: ADD_CART, product})
  }

  return (
    <div>
      <h2>상품리스트</h2>
      {products.map((value) => {
        return (
          <div key = {value.id}>
            <span>
              
            </span>
          </div>
        )
      })}
    </div>
  )
}

