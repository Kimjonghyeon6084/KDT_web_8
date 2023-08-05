const express = require("express");
const app = express();
const PORT = 8000;

// 뷰엔진
app.set("view engine", "ejs");
app.set("/views", express.static(__dirname + "/views"));
app.set("/static", express.static(__dirname + "/static"));
// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require("./routes"); // index.js 생략
app.use("/", indexRouter); // localhost:PORT/ 경로를 기본으로 ./router/index.js 파일에 선언한 대로 동작

// GET
app.get("/", (req, res) => {
  res.render("index");
});

//404 에러 처리
app.get("*", (req, res) => {
  // console.log('404 error! 잘못된 주소 형식입니다.')
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
