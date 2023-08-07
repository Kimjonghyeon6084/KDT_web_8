const express = require("express");
const mywql = require("mysql");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
//폼 만들어야 하니 body-parser 필수
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router 분리
app.get("/", (req, res) => {
  res.render("index");
});
const router = require("./routes");
app.use("/visitor", router);

//오류처리
app.use("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
