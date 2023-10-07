const mysql = require('mysql2');//mysql 모듈 로드

// const connection = mysql.createConnection({
//   host: '127.0.0.1',
//   port: '3306',
//   user: 'root',
//   password: 'Woawhd33$!m',
//   database: 'kdt8'
// });//DB 커넥션 생성

// connection.connect();//DB 접속

// connection.query('SELECT 1 + 1 AS solution', function(error, results, fields) {
//   if (err) throw err;
//   console.log('the solution is:', results[0].solution);
// });

// connection.end()

const pool = mysql.createPool
({
  host: 'localhost',
  user: 'root',
  database: 'kdt8',
  password: 'Woawhd33$!m',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const getUsers = async ()=>
{
    const promisePool = pool.promise();
    const [rows] = await promisePool.query('select * from users;');
    console.log(rows);
    return rows;
};

module.exports = 
{
    getUsers
};