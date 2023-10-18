export default function Login() {
    return (
        <div>
            <div className="login">
                <h1>로그인</h1>
            </div>
            <div className="loginForm">
                <div className="userTypeTab">
                    <div>회원 로그인</div>
                    <div>비회원 주문조회</div>
                </div>
                <div className="userTypeTab2"></div>
                <div className="userInput">
                    <div>
                        <input
                            type="text"
                            placeholder="아이디를 입력해 주세요."
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="비밀번호를 입력해 주세요."
                        />
                    </div>
                </div>
                <div>
                    <button className="loginBtn">로그인</button>
                </div>
                <div>
                    <a>아이디 찾기</a>
                    <a>비밀번호 찾기</a>
                    <a>회원가입</a>
                </div>
            </div>
        </div>
    );
}
