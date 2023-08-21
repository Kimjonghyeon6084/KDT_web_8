const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8000;
const SECRET = "secretKey";
const userInfo = { id: "kdt8", pw: "1234", name: "김종현" };
require;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});
app.post("/login", (req, res) => {
  const { id, pw } = req.body;
  console.log(id, pw);
  if (userInfo.id === id && userInfo.pw === pw) {
    const token = jwt.sign({ id, pw }, SECRET);
    console.log("성공");

    res.send({ result: true, token, userInfo });
  } else {
    console.log("실패");

    res.send({ result: false, message: "로그인이 실패하였습니다" });
  }
  res.send();
});
app.post("/verify", (req, res) => {
  console.log(req.header.authorzation);
  const token = req.header.authorzation.split(" ");
  if (token[0] === Bearer) {
    jwt.verify(token[1], SECRET, (err, decoded) => {
      if (err) {
      }
    });
  }
});
// app.post("/login", (req, res) => {
//   const { id } = req.body;
//   const token = jwt.sign({ id }, SECRET);
//   //console.log(token);
//   res.send({ result: true, token });
// });

// app.post("/verify", (req, res) => {
//   console.log(req.headers.authorization);
//   const auth = req.headers.authorization;
//   const token = auth.split(" ");
//   console.log(token);
//   if (token[0] === "Bearer") {
//     jwt.verify(token[1], SECRET, (err, decoded) => {
//       if (err) {
//         return res
//           .status(403)
//           .send({ result: false, message: "검증에 실패하였습니다" });
//       }
//       res.send({ result: true, user: decoded });
//     });
//   } else {
//     res.send({ result: false, message: "올바른 인증방식 아닙니다" });
//   }
// });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
