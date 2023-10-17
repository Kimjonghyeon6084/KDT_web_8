// import data from './../Component/data'
import { useParams } from 'react-router-dom';
import List from './Main';
import { useContext, useEffect, useState } from 'react';
import TabComponent from '../Component/TabComponent';
import { addItem } from '../store/userCart';
import { useDispatch } from 'react-redux';

export default function Detail(props) {
    console.log(props);

    const dispatch = useDispatch();
    const [count, setCount] = useState(0);
    const [alert, setAlert] = useState(true);
    const [tab, setTab] = useState(0);

    // useEffect(() => {}) //1. 재렌터링마다 코드를 실행시키고 싶다면 //4. useEffect 실행 전에 뭔가 실행하려면(싹 비우고 싶다면,cleanUpFunc) {} 안에 retrun () => {}  useEffect(() => {}, [])//2. mount시 1회 코드 실행하고 싶다면
    // useEffect(() => {
    //   return () => {} // 3. unmount시 1회 코드 시
    // })

    // useEffect(() => {
    // const a =  setTimeout(() => {
    //     setAlert(false)
    //   }, 2000);
    //   console.log(2);

    //   return () => {
    //     console.log(1);

    //     clearTimeout(a)
    //   }
    // })

    const { id } = useParams();

    const product = props.shoes.find((item, i) => {
        return item.id == id;
    });
console.log('1', product.imgUrl);

    //localstorage로 최근 본 상품 기능
    // useEffect(() => {
    //   let getWatched = localStorage.setItem('watched', product)
    //   getWatched = JSON.parse(getWatched)
    //   getWatched.push(product.id)
    //   getWatched = new Set(getWatched)
    //   getWatched = Array.from(getWatched)
    //   localStorage.setItem('watched', JSON.stringify(getWatched))
    //   // console.log(product);

    // }, [])

    return (
        <>
            {/* <NavbarMain/> */}
            <div className="container">
                {/* {
        alert == true ? <div className='alert alert-waring'>2초 이내 구매시 할인</div> : null
      } */}

                {/* {count} */}
                {/* <button onClick={() => {setCount(count + 1)}}>버튼</button> */}

                <div className="row">
                    <div className="col-md-6">
                        {/* <img src={`https://codingapple1.github.io/shop/shoes1.jpg`} width="100%" />
                         */}
                            <img
                                className="detailShoesImg"
                                src={process.env.PUBLIC_URL + product.imgUrl}
                            />
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-5">{product.title}</h4>
                        <p>{product.content}</p>
                        <p>{product.price}원</p>
                        <button
                            className="btn btn-danger"
                            onClick={() => {
                                dispatch(
                                    addItem({
                                        id: 1,
                                        name: 'red Knit',
                                        count: 1,
                                    })
                                );
                                console.log('1');
                            }}
                        >
                            주문하기
                        </button>
                    </div>
                    {/* <Nav variant="tabs" >
          <Nav.Item>
            <Nav.Link onClick={() => {setTab(0)}} eventKey="0" >버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => {setTab(1)}} eventKey="1" >버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => {setTab(2)}} eventKey="2" >버튼2</Nav.Link>
          </Nav.Item>
        </Nav>
          <TabComponent tab={tab} setTab={setTab}/> */}
                </div>
            </div>
        </>
    );
}
