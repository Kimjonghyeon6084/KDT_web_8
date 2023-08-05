// 데이터 베이스 선택하는 부분
exports.commentInfos = () => {
  //  SQL로 실행되었다고 가정하고 반환
  return [
    {
      id: 1,
      userid: "hello",
      date: "2022-10-31",
      comment: "안녕하세요~",
    },
    {
      id: 2,
      userid: "happy",
      date: "2022-11-01",
      comment: "반가워유",
    },
    {
      id: 3,
      userid: "lucky",
      date: "2022-11-02",
      comment: "오 신기하군~",
    },
  ];
};

const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt8",
});

//mysql 연결 후
exports.getVisitors = (callback) => {
  const sql = "SELECT * FROM visitor;";
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log("Visitor : ", rows);
    callback(rows);
  });
};
