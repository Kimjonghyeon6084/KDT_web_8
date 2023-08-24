const mysql = require('mysql');

//mysql연결
//createConnection : 단일연결 / 요청할 때 마다 새로운 연결 생성, 적은 수의 동시연결이나 단순한 데이터베이스 쿼리일 때 사용함.
//creatPool
//연결 풀을 생성 / 연결된 풀은 미리 정의된 수의 연결을 생성하고 관리 / 요청이 들어오면 연결 풀에서 사용 가능한 연결을 제공 / 작업완료 후 해당 연결 반환. / 연결이 필요하지 않을 경우 자동으로 반환 / 풀의 연결 수를 제한하고 관리를 최적화함 / 다중 연결 서비스에 적합

//createConnection
// const conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'kdt',
//     password: '12345678!',
//     database: 'kdt8',
//     port: 3306,
// });
//creatPool
const conn = mysql.createPool({
    host: 'localhost',
    user: 'kdt',
    password: '12345678!',
    database: 'kdt8',
    port: 3306,
    connectionLimit: 30, // 최대 연결수 (기본값은 10)
});

//문자열 보간 방법
//`INSERT INTO user (userid, pw, name) VALUES ('${data.userid}
//단점1 : sql 인젝션 공격 취약
//단점2 : 문자열에 특수문자가 포함될 경우 오류가 발생할 수도 있음.
//대체하기 위해선 Prepared Statement 라는 방법이 있다
//INSERT INTO user (userid, pw, name) VALUES (?,?,?)

//회원가입 정보 데이터베이스 저장
//data >> controller에서 보내는 req.body의 정보
//${}는 문자로 보내야 하기 때문에 꼭 '' 안에 보내기
const db_signup = (data, cb) => {
    //문자열 보간방법
    // const query = `INSERT INTO user (userid, pw, name) VALUES ('${data.userid}', '${data.pw}', '${data.name}')`;
    // conn.query(query, (err, rows) => {
    //     if(err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log('db_signup', rows);
    //     //이제 결과값을 controller 로 보내주면 됨
    //     //여기서 cb는 controller에 signup req.body 옆에 있는 콜백함수
    //     cb();
    // });
    //Prepared Statement 방법
    const query = 'INSERT INTO user (userid, pw, name) VALUES (?,?,?)';
    conn.query(query, [data.userid, data.pw, data.name], (err,rows) => {
        if(err) {
                    console.log(err);
                    return;
                }
                console.log('db_signup', rows);
                //이제 결과값을 controller 로 보내주면 됨
                //여기서 cb는 controller에 signup req.body 옆에 있는 콜백함수
                cb();
    })
};

const db_signin = (data, cb) => {
    // const query = `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}'`;
    // conn.query(query, (err,rows) => {
    //     if(err){
    //         console.log(err)
    //         return;
    //     };
    //     console.log('db_signin', rows)
    //     cb(rows);
    //     // (rows) => {
    //     //  if(rows.length > 0) {
    //     // res.json({result:true, data: rows})};
    //     // }
    // });
    //Prepared Statement 방법
    const query = 'SELECT * FROM user WHERE userid = ? AND pw = ?'
    conn.query(query, [data.userid, data.pw, data.name], (err, rows) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log('db_signin', rows);
        //이제 결과값을 controller 로 보내주면 됨
        //여기서 cb는 controller에 signup req.body 옆에 있는 콜백함수
        cb();
    })
};
//사용자 정보 조회
const db_profile = (cb) => {
    const query = `SELECT * FROM user WHERE id = ?`;
    conn.query(query, [data.init], (err,rows) => {
        if(err){
            console.log(err);
            return;
        }
        console.log('db_profile', rows);
        //select문은 배열을 반환
        cb(rows);
    })
};

//프로필 수정
const db_profile_edit = (data, cb) => {
    const query = `UPDATE user SET userid=?, name=?, pw=? WHERE id=?`;
    conn.query(query, [data.userid, data.name, data.pw, data.id], (err,rows) => {
        if(err){
            console.log(err)
            return;
        }
        console.log('db_profile_edit', rows);
        cb();
    });

}

module.exports = {
    db_signup,
    db_signin,
    db_profile,
    db_profile_edit,
};