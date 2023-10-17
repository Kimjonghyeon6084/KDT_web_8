import { configureStore, createSlice } from '@reduxjs/toolkit';

const user = createSlice({
    name: 'user',
    initialState: { name: 'Kim', age: 20 },
    reducers: {
        changeName(state) {
            // 여기서 state는 위에 initialState의 value
            // return {name : 'park', age : 20}
            state.name = 'park';
        },
        changeAge(state, action) {
            // return {name:'park', age}
            state.age += action.payload;
        },
    },
});

export default user.reducer;
export const { changeName, changeAge } = user.actions;
