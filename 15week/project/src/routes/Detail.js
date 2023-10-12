// import data from './../Component/data'
import { useParams } from 'react-router-dom'
import List from './Navbar'
import { useState } from 'react';

export default function Detail (props) {

  const {id} = useParams();
  

  const product = props.shoes.find((item, i) => {
    return item[i].id == id
  })

  return (
    <>
    <List/>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{product[id].title}</h4>
          <p>{product[id].content}</p>
          <p>{product[id].price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
    </>
  )
}