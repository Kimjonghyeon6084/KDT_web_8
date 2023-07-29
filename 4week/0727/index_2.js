// const http = require("http");
// const fs = require("fs").promises;

// const server = http.createServer(async function (req, res) {
//   try {
//     const data = await fs.readFile("./0727/index.html");
//     res.writeHead(200);
//     res.end(data);
//   } catch (err) {
//     console.error(err);
//     res.writeHead(404);
//     res.end(err.message);
//   }
// });

// const server = http.createServer(function (req, res) {
//   res.writeHead("200");
//   res.write("<h1>hello world</h1>");
//   res.end("<p>end</p>");
// });
// server.listen(8000, function () {
//   console.log("8000포트로 서버 실행");
// });

const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", function (req, res) {
  res.send("hello express");
});

app.listen(PORT, function () {
  console.log("Listening on port ${PORT}! http://localhost:${PORT}");
});
