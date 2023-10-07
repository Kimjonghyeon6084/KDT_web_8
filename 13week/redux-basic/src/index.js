// ////redux를 이용한 코드
import {createStore} from 'redux';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Provider} from 'react-redux'
import store from './store/legacy'
// const add = document.querySelector('#add')
// const minus = document.querySelector('#minus')
// const num = document.querySelector('#num')

// const ADD = 'ADD'
// const MINUS = 'MINUS'


// //reducer는 데이터를 수정해주는 함수
// const countReducer = (state = 0, action) => {
//   console.log(state, action);
//   switch (action.type) {
//     case 'ADD':
//       return state + 1;
//     case 'MINUS':
//       return state - 1;
//     default:
//       return state;
//   }
  
// }

// //store는 데이터를 넣는 곳
// //store를 생성해준다.
// //createStore: store 생성, 인자로 reducer 함수 필수.
// const countStore = createStore(countReducer);
// console.log(countStore);

// //subscribe()는 함수를 반환하며 데이터와 저장소가 변경될 때마다 함수를 실행
// countStore.subscribe(() => {
//   num.textContent = countStore.getState();
// });

// add.addEventListener('click', () => {
//   countStore.dispatch({type:ADD})
// })
// minus.addEventListener('click', () => {
//   countStore.dispatch({type:MINUS})
// })


// // //getState()는 createStore로 생성된 저장소에서 최신상태의 값을 반환할 때 스는 메소드
// // console.log('state', countStore.getState());


//-------------------------------------------------------------------------//




// ////javascript를 이용한 +1, -1 코드

// let count = 0;

// num.textContent = count;

// add.addEventListener('click', () => {
//   count = count + 1;
//   num.textContent = count;
  
  
// });

// minus.addEventListener('click', () => {
//   count = count - 1;
//   num.textContent = count;
// });

// ---------------------------------------------------------------------------------

//practice

// const add = document.querySelector('#add');
// const del = document.querySelector('.delete')
// const list = document.querySelector('#list');
// const input = document.querySelector('#input');
// const ADD = 'add';

// const listReducer = (list = [], action) => {
//   switch (action.type) {
//     case 'add':
//       return [...list, {text: action.title, id: Date.now()}]
//     case 'delete':
//       return list.filter((toDo) => toDo.id !== action.id)
//     default:
//       return list;
//   }
// }

// const listStore = createStore(listReducer);

// listStore.subscribe(() => {
//   list.innerHTML = "";
//   for (let item of listStore.getState()) {
//     const li = document.createElement("li");
//     li.innerHTML = `${item.text}`;
//     li.name = `${item.id}`;
//     const btn = document.createElement("button");
//     btn.innerText = "DEL";
//     btn.addEventListener("click", (e) => {
//       listStore.dispatch({ type: 'delete', id: item.id});
//     });
//     li.appendChild(btn);
//     list.appendChild(li);
//   }
// });

// add.addEventListener('click', () => {
//   const li = document.createElement('li')
//   const value = input.value
//   li.innerHTML = `
//   <li class='list'>${value}<button class='delete'>DEL</button></li>
//   `
//   list.appendChild(li)
//   listStore.dispatch({type: ADD, title: value})
// })

// del.addEventListener('click', () => {
//   console.log('1');
  
//   listStore.dispatch({type:'delete'})
// })

// ----------------------------------------------------------------------------------
//practice
// const input = document.querySelector('input');
// const form = document.querySelector('form');
// const ul = document.querySelector('ul');

// const ADD_TODO = 'ADD_TODO';
// const DELETE_TODO = 'DELETO_TODO';

// //reducer
// const reducer = (state = [], action) => {
//     console.log(action);
//     switch (action.type) {
//         case ADD_TODO:
//             const newTodo = { text: action.text, id: Date.now() };
//             return [...state, newTodo];
//         case DELETE_TODO:
//             return state.filter((el) => el.id !== action.id);
//         default:
//             return state;
//     }
// };
// //store
// const store = createStore(reducer);

// const removeTodo = (event) => {
//     event.preventDefault();
//     console.log(event);
//     store.dispatch({ type: DELETE_TODO, id: Number(event.target.parentNode.id) });
// };
// //subscribe 스토어의 데이터가 변경될때 ( ) 안에있는 함수가 실행
// //store.subscribe(() => console.log(store.getState()));
// store.subscribe(() => {
//     const todos = store.getState();
//     ul.innerHTML = '';
//     todos.map((value) => {
//         //console.log(value);
//         const li = document.createElement('li');
//         const btn = document.createElement('button');
//         btn.innerText = '삭제';
//         btn.addEventListener('click', removeTodo); //삭제이벤트
//         li.innerText = value.text;
//         li.id = value.id;
//         li.appendChild(btn);
//         ul.appendChild(li);
//     });
// });

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     store.dispatch({ type: ADD_TODO, text: input.value });
//     input.value = '';
// });
// ----------------------------------------------------------------------------------
//react-redux

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)