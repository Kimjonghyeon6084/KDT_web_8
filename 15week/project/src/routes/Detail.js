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
            {/* <div className="detailContainer">
                <div className="datailLeft">
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                        <h4 className="pt-5">{product.title}</h4>
                        <p>{product.content}</p>
                        <p>{product.price}원</p>
                        <button
                            className="btn btn-danger"
                            onClick={() => {
                                dispatch(
                                    addItem({
                                        id: product.id,
                                        name: product.title,
                                        count: 1,
                                    })
                                );
                                console.log('1');
                            }}
                        >
                            주문하기
                        </button>
                    </div>
                </div>
            </div> */}

            <div className="datailCountainer">
                <div className="datailLeft">
                    <div className="shoesPic">
                        <img
                            className="detailShoesImg"
                            src={`https://kdt8-kjh-test.s3.ap-northeast-2.amazonaws.com/${product.id}.png`}
                        />
                    </div>
                    <div className="shoesPics">
                        <img
                            className="detailShoesImgs"
                            src={`https://kdt8-kjh-test.s3.ap-northeast-2.amazonaws.com/${product.id}.png`}
                        />
                        <img
                            className="detailShoesImgs"
                            src={`https://kdt8-kjh-test.s3.ap-northeast-2.amazonaws.com/${product.id}.png`}
                        />
                        <img
                            className="detailShoesImgs"
                            src={`https://kdt8-kjh-test.s3.ap-northeast-2.amazonaws.com/${product.id}.png`}
                        />
                        <img
                            className="detailShoesImgs"
                            src={`https://kdt8-kjh-test.s3.ap-northeast-2.amazonaws.com/${product.id}.png`}
                        />
                        <img
                            className="detailShoesImgs"
                            src={`https://kdt8-kjh-test.s3.ap-northeast-2.amazonaws.com/${product.id}.png`}
                        />
                    </div>
                    <div className="shoeSatisfaction">
                        <div className="상품만족도그림">
                            <div className='productSati1'>상품만족도</div>
                            <h2 className='productSati2'>96%</h2>
                            <div className='productSati3'>*****</div>
                        </div>
                        <div className='상품만족도문자before'></div>
                        <div className="상품만족도문자">
                            <ul>
                                <ol>
                                    <span>사이즈</span>정 사이즈
                                </ol>
                                <ol>
                                    <span>색상</span>화면과 같음
                                </ol>
                                <ol>
                                    <span>발볼</span>적당함
                                </ol>
                                <ol>
                                    <span>발등</span>적당함
                                </ol>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="datailRight">
                    <div className="shoesName">
                        <h3>{product.title}</h3>
                        <h1>{product.content}</h1>
                        <h4>NIKE COURT ROTALE 2 NN</h4>
                        <div>
                            <span>스타일코드 : DH3160</span>
                            <span>상품코드 : 1010098546</span>
                        </div>
                        <h2>가격 : {product.price}원</h2>
                    </div>
                    <div className="shoesDetailInfo">
                        <table>
                            <tbody>
                                <tr>
                                    <td className='infoMenu'>스타일컬러</td>
                                    <td className='infoMenu2'>사진,사진,사진</td>
                                </tr>
                                <tr>
                                    <td className='infoMenu'>통합맴버쉽 혜택</td>
                                    <td className='infoMenu2'>회원가입시 5,000P 즉시 적립<br />APP설치 시 1만원 할인쿠폰 지급</td>
                                </tr>
                                <tr>
                                    <td className='infoMenu'>카드 혜택</td>
                                    <td className='infoMenu2'>무이자 할부</td>
                                </tr>
                                <tr>
                                    <td className='infoMenu'>색상코드</td>
                                    <td className='infoMenu2'>103</td>
                                </tr>
                                <tr>
                                    <td className='infoMenu'>배송방법</td>
                                    <td className='infoMenu2'>일반배송, 아트배송</td>
                                </tr>
                                <tr>
                                    <td className='infoMenu'>사이즈</td>
                                    <td className='infoMenu2'>240,245,250,255,260,265</td>
                                </tr>
                                {/* <tr>
                                    <td className='infoMenu'>관련용품 추가구매</td>
                                    <td>
                                        <select>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                    <div className="choiceBtn">
                        <div className='totalPrice'>
                            <div>총 결제금액</div>
                            <span>{product.price}원</span>
                        </div>
                        <div className='choiceBtn2'>
                            <button className='cartBtn' onClick={() => {
                                dispatch(
                                    addItem({
                                        id: product.id,
                                        name: product.title,
                                        price : product.price,
                                        count: 1,
                                    })
                                );
                            }}>장바구니</button>
                            <button className='buyBtn'>바로구매</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
