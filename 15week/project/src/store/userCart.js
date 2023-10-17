import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    addCount(state, action) {
      state[action.payload].count++
    },
    addItem(state, action) {
      state.push(action.payload)
    }
  }
})

export default cart.reducer
export const {addCount, addItem} = cart.actions