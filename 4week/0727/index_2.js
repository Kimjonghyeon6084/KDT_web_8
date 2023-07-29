const http = require("http");
const fs = require("fs").promises;

const server = http.createServer(async function (req, res) {
  try {
    const data = await fs.readFile("/index.html");
    res.writeHead(200);
    res.end(data);
  } catch (err) {
    console.error(err);
    res.writeHead(404);
    res.end(err.message);
  }
});

// const server = http.createServer(function (req, res) {
//   res.writeHead("200");
//   res.write("<h1>hello world</h1>");
//   res.end("<p>end</p>");
// });
// server.listen(8000, function () {
//   console.log("8000포트로 서버 실행");
// });
