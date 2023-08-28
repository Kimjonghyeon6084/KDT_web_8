// const model = require('../model/Model');
const { User } = require('../models');
const bcrypt = require('bcrypt')


///////////////////////////////////////
//GET
const main = (req, res) => {
    res.render('index');
};
//회원가입 페이지
const signup = (req, res) => {
    res.render('signup');
};
//로그인 페이지
const signin = (req, res) => {
    res.render('signin');
};
//회원정보 조회 페이지
const profile = (req, res) => {
    console.log(req.params);
    // model.db_profile(req.params, (result) => {
    //     res.render('profile', { data: result[0] });
    // });
    //findOne 데이터베이스에서 하나의 정보를 찾을 때 사용, 객체 반환
    //where 는 객체형태로 찾을 정보를 입력
    User.findOne({
        where: { id: req.params.init },
    }).then((result) => {
        res.render('profile', { data: result });
    });
};
const buy = () => {};

////////////////////////////////////////////////
//POST
//회원가입
const post_signup = async (req, res) => {
    // model.db_signup(req.body, () => {
    //     res.json({ result: true });
    // });
    const { userid, name, pw } = req.body;


    //create 데이터 생성
    //실습과제 - 비밀번호 암호화하여 저장
    const hash = await bcryptPassword(pw)
    User.create({
        userid,
        name,
        //왜 여기 hash 넣어야하지?
        pw:hash,
    }).then(() => {
        res.json({ result: true });
    });
};

const post_signin = async (req, res) => {
    // model.db_signin(req.body, (result) => {
    //     if (result.length > 0) {
    //         res.json({ result: true, data: result[0] });
    //     } else {
    //         res.json({ result: false });
    //     }
    // });


    //실습과제 - 로그인
    const {userid, pw} = req.body;
    //step1 아이디를 찾아서 사용자 존재 유/무 체크
    //왜 여기 User 앞에 U는 대문자로 될까??????????????
    const user = await User.findOne({
        //앞에 키 값은 squeliez에서 정의한 함수, 뒤는 변수 
        where : {userid : userid}
    });
    // user안에는 이런 식으로 들어옴
    // const user = {
    //     id: 1,
    //     userid: 'asdf',
    //     name: '김종현',
    //     pw: '@@@@@@@@@22'
    // }


    if(user){
        //step2 입력된 비밀번호와 기존 데이터와 비교
        //사용자가 존재함
        const result = await compareFunc(pw, user.pw);
        if(result) {
            //비밀번호 일치
            //여기선 객체 하나만 와서 [0] 이런식으로 써줄 필요가 없음
            res.json({result:true, data: user});
        } else{
            //비밀번호 불일치
            res.json({result: false, message: '비밀번호가 틀렸습니다.'});
        }

    } else {
        //사용자가 존재하지 않을때
        res.json({result:false, message: '존재하는 사용자가 없습니다.'})
    }
};
///////////////////////////////////////////
//PATCH
const edit_profile = (req, res) => {
    // model.db_profile_edit(req.body, () => {
    //     res.json({ result: true });
    // });
    //update( 수정될 정보를 객체형태로 입력, 수정될 곳 객체 입력  )
    const { name, pw, id } = req.body;
    User.update({ name, pw }, { where: { id } }).then(() => {
        res.json({ result: true });
    });
};

/////////////////////////////////////////////
//DELETE
//회원탈퇴 destory()
const destroy = (req,res) => {
    const {id} = req.body;
    User.destory({
        where: {id},
    }).then(() => {
        res.json({result:true})
    })
};

module.exports = {
    main,
    signup,
    signin,
    profile,
    buy,
    post_signup,
    post_signin,
    edit_profile,
    destroy,
};

/////////////////////function
//암호화
//화살표 함수 축약형{} 삭제, retrun 삭제
// const bcryptPassword = (password) => {
//     return bcryptPassword.hash(password, 11);
// };
//한줄 일때만 사용 가능 (아래와 같은 방식으로)
//아래꺼를 비동기로 적었기 때문에 이 함수를 쓰는 곳도 비동기 처리 해야 함
const bcryptPassword = (password) => bcrypt.hash(password, 11)

//비교
//t or f
const compareFunc = (password, dbpassword) => bcrypt.compare(password, dbpassword);