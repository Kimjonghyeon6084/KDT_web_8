exports.getVisitor = (cb) => {
  const mysql = require("mysql");

  const conn = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "1234",
    database: "kdt8",
  });
};

//mysql 연결 후
exports.getVisitors = (callback) => {
  const sql = "SELECT * FROM visitor;";
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log("Visitor : ", rows);
    callback(rows);
  });
};
