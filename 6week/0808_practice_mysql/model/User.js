const mysql = require("mysql");
// mysql 연결하기
const conn = mysql.createConnection({
  host: "localhost",
  user: "kdt",
  password: "12345678!",
  database: "kdt8",
  port: 3306,
});
conn.connect((err) => {
  if (err) {
    console.log("error");
    return;
  }
  console.log("connect");
});

exports.post_signup = (data, callback) => {
  const query = `INSERR INTO user (userid, pw, name) VALUE('${data.userid}'), '${data.pw}', '${data.name}')`
  conn.query(query, (err, rows) => {
    if(err) {
      console.log(err)
      return
    }
    console.log('post_signup', rows);
    callback(rows);
  })
}
