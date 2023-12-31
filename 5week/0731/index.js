const express = require("express");
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//router
app.get("/", (req, res) => {
  // res.send("hello");
  res.render("index", { title: "실습 2. post으로 정보 받기" });
});

// app.get("/getForm", (req, res) => {
//   console.log(req.query);
//   res.render("result", {
//     title: "GET요청 폼 결과 확인하기",
//     userInfo: req.query,
//     //userInfo: {id : '', pw: ''}
//   });
// });

app.post("/postForm", (req, res) => {
  console.log(req.body);
  res.render("result2", {
    title: "POST요청 폼 결과 확인하기",
    userInfo: req.body,
    //userInfo: {id : '', pw: ''}
  });
});

// app.put("/", (req, res) => {
//   console.log(req.body);
// });
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
