const express = require('express');
const app = express();
const PORT = 8000;

const userInfo = { id: 'kdt8', pw: '1234' };

//body-parser
app.use(express.json());
//view engine
app.set('view engine', 'ejs');

//router
app.get('/', (req, res) => {
    res.render('index');
});
//post실습
app.get('/axiosPost', (req, res) => {
    res.render('post');
});


app.post('/resultPost', (req, res) => {
    //코드 실습
    //아이디와 패스워드 치고 로그인 버튼을 눌렀을 때 userInfo와 비교해서 맞으면 resultBox에 '로그인이 되었습니다.', 틀리면 '로그인 정보가 올바르지 않습니다.'뜨게 하기.
    //객제 분해 할당
    const {username, password} = req.body;
    console.log(username)
    if (username === userInfo.id && password === userInfo.pw){
        //userInfo의 사용자값 비교
        //res.json()는 application/json 형태로 응답할 때 사용
        //json()함수 안에는 객체가 꼭 와야 한다.
        //json으로 보내는거 이해 잘 안됨 // 보내고 나서 검사창에 네트워크 들어가서 확인해보기, send로 보냈을 때도 확인해보기
        res.json({result: true, userInfo: {id: username, pw: password}})
    } else {
        res.json({result: false});
    }
});

//server start
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
