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
  res.render("index_practice_1");
});

//axios
app.get("/axios", (req, res) => {
  console.log("back", req.query);
  res.render("get");
});

app.get("/index_practice_1", (req, res) => {
  console.log("back", req.query);
  const data = {
    ...req.query,
    interest: Array.isArray(req.query.user_interest)
      ? req.query.user_interest.join(", ")
      : req.query.user_interest,
  };
  res.send(data);
});

//fetch router
app.get("/fetch", (req, res) => {
  console.log("back", req.query);
  res.send(req.query);
});
app.post("/fetch", (req, res) => {
  console.log("back", req.query);
  res.send(req.body);
});

//server start
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
