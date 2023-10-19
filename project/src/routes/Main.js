import NavbarMain from './NavbarMain';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Main({ shoes, setShoes }) {
    console.log(shoes);
    const navigate = useNavigate()

    return (
        <>
            <div className="container">
                {shoes.map((item) => {
                    return (
                        <div onClick={() => {navigate(`/detail/${item.id}`)}}
                            className="shoesDiv"
                            key={item.id}
                        >
                            <img
                                className="shoesImg"
                                src={`https://kdt8-kjh-test.s3.ap-northeast-2.amazonaws.com/${item.id}.png`}
                            />
                            <h4>{item.title}</h4>
                            <p>{item.content}</p>
                            <p>{item.price}원</p>
                            <p></p>
                        </div>
                    );
                })}
            </div>
            {/* <button
                onClick={() => {
                    axios
                        .get('https://codingapple1.github.io/shop/data2.json')
                        .then((data) => {
                            // console.log(data.data);
                            let copy = [...shoes, ...data.data];
                            setShoes(copy);
                        })
                        .catch(() => {
                            console.log('실패함ㅅㄱ');
                        });
                }}
            >
                버튼
            </button> */}
        </>
    );
}
