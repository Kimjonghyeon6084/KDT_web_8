import { useState } from "react"

export default function Modal (props) {


  return (
    <div className='modal'>
        {/* {
        title.map(function(a, i){
          return (
            <h4>{title[i]}</h4>
          )
        })
        } */}
        <h4>{props.modalData.title}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={() => {
          props.setTitle(['여자 코드 추천', '맛집 추천', '파이썬 독학'])
        
        }}>글제목변경</button>
      </div>
  )
}