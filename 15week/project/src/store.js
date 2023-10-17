import { configureStore, createSlice } from '@reduxjs/toolkit'
import userSlice from './store/userSlice'
import userCart from './store/userCart'
  
  
  const stock = createSlice({
    name : 'stock',
    initialState : [10,11,12]
  })
  
  const basket = createSlice({
    name : 'basket',
    initialState : [
      {id : 0, name : 'White and Black', count : 2},
      {id : 2, name : 'Grey Yordan', count : 1}
    ],
    // reducers : {
    //   changeCount(state){
    //     return state + 1
    //   }
    // }
  })
  
  export default configureStore({
    reducer: {
      cart : userCart,
      user: userSlice,
      stock : stock.reducer,
      basket : basket.reducer
    }
  }) 
  