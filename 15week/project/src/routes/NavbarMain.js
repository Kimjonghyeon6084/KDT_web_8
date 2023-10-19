import { useNavigate } from 'react-router-dom';

export default function NavbarMain() {
    const navigate = useNavigate();

    return (
        <>
            <nav className="navbar">
                <div className="navbarUp">
                    <div className="navbarUpLeft">
                        <h1
                            onClick={() => {
                                navigate('/');
                            }}
                            className="logo"
                        >
                            <a
                                className="logoA"
                                href=""
                            >
                                
                                <img
                                    className="logoImg"
                                    src="https://kdt8-kjh-test.s3.ap-northeast-2.amazonaws.com/logo.png"
                                />
                            </a>
                        </h1>
                    </div>
                    <div className="navbarUpRight">
                        <div className="navbarUpRightUpInput">
                            <input
                                type="search"
                                placeholder="검색할 단어를 입력하세요"
                            />
                        </div>
                        <div className="navbarUpRightRight">
                            <span onClick={()=>{navigate('/login')}}>로그인</span>
                            <span>마이페이지</span>
                            <span onClick={() => {navigate('/cart')}}>장바구니</span>
                            <span>매장찾기</span>
                        </div>
                    </div>
                </div>
                <div className="navbarDown">
                    <div className="navbarDownLeft">
                        <span
                            onClick={() => {
                                navigate('/');
                            }}
                        >
                            ALL
                        </span>
                        <span
                            onClick={() => {
                                navigate('/list/men');
                            }}
                        >
                            MEN
                        </span>
                        <span
                            onClick={() => {
                                navigate('/list/women');
                            }}
                        >
                            WOMEN
                        </span>
                        <span
                            onClick={() => {
                                navigate('/list/kids');
                            }}
                        >
                            KIDS
                        </span>
                        <span
                            onClick={() => {
                                navigate('/sale');
                            }}
                        >
                            SALE
                        </span>
                    </div>
                    <div className="navbarDownRight">
                        <span>기획전</span>
                        <span>KIDS마트</span>
                        <span>ONLY ABC</span>
                        <span>이벤트/쿠폰</span>
                        <span>G-LOG</span>
                    </div>
                </div>
            </nav>
        </>
    );
}
