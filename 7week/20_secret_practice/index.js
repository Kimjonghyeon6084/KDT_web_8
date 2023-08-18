const express = require("express");
const app = express();
const sequelize = require("sequelize");

const PORT = 8000;

//ejs
app.set("view engine", "ejs");
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mysql = require("mysql");
const conn = {
  host: "localhost",
  port: "3306",
  user: "user",
  password: "12345678!",
};
//router
app.get("/", (req, res) => {
  res.render("index");
});
app.post("/hash", (req, res) => {
  const { pw } = req.body;
  console.log(pw);
  const hash = bcryptoPassword();
  res.json({ hash });
});
app.post("/cipher", (req, res) => {
  const { data } = req.body;
  const encrypt = cipherEncrypt(data);
  const decrypt = decipehr(encrypt);
  res.json({ decrypt });
});

// 암호화 모듈을 사용하여 회원가입시 데이터 베이스에 비밀번호가 암호화되어 들어갈 수 있도록 함
// 로그인 시 데이터 베이스의 비밀번호와 입력한 비밀번호를 비교하여 일치 여부 확인하기

//server open
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

//bcrypt를 이용한 암호화
const bcrypt = require("bcrypt");
const salt = 10;
const bcryptId = (id) => {
  return bcrypt.hashSync(id);
};
//비교하기
const comparePassword = (password, dbPassword) => {
  return bcrypt.compareSync(password, dbPassword);
};
