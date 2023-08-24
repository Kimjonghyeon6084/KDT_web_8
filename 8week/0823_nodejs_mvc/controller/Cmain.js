const model = require('../model/Model');

//GET
const main = (req, res) => {
    res.render('index');
};
//회원가입 페이지
const signup=(req,res) => {
    res.render('signup');
};
//로그인 페이지
const signin=(req,res) => {
    res.render('signin');
};
//회원정보 조회
const profile = (req,res) => {
    console.log(req.params);
    model.db_profile(req.params), (result) => {
        res.render('profile', {data : result[0]});
    }};


//----------------------------------------//
//POST
//회원가입 POST
const post_signup = (req,res) => {
    model.db_signup(req.body, () => {
        res.json({result: true});
    });
};
//로그인 POST(일단 쭉 다 만들어놓고 테스트를 할때는 일단 빈 함수로 만들어 놓고 만들어 놓은거 테스트 해보기)
const post_signin = (req,res) => {
    model.db_signin(req.body, (result) => {
        if(result.length > 0){
        res.json({result:true, data: result[0]})
    } else {
        res.json({reslut: false});
    }
    });
};

//----------------------------------------//
//PATCH
const edit_profile = (req,res) => {
    model.db_profile_edit(req.body, () => {
        res.json({result:true});
    })
};


//res.render :  뷰페이지(node.js가 제공하는 템플릿)를 렌더링, render(뷰페이지이름, 데이터(선택사항))
//res.send : 모든 타입의 데이터 전송(모든 타입?? >> 문자열, 배열, 객체, 숫자, 등)
//res.json : 객체타입 데이터 전송
//res.redirect : 페이지를 이동
module.exports = {
    main,
    signin,
    signup,
    profile,
    edit_profile,
    post_signup,
    post_signin,
};