const http = require("http");
const fs = require("fs");

const server = http.creatserver((request, response) => {
  // response.writeHead(200); // 성공하면 보통 200을 보내줌
  // response.write("<h1>hello world</h1>");
  // response.end("<p>end</p>");

  //파일전송
  // try catch 정상은 try에서 실행, 오류가 나면 catch에서 실행
  try {
    const date = fs.readFileSyne("./index.html");
    response.writeHead(200);
    response.end(data);
  } catch (error) {
    console.log(error);
    response.writeHead(404);
    response.end(error.message);
  }
});

server.listen(8000, function () {
  console.log("localhost:8000포트로 실행");
});
//실행되고 나서 command c 로 종료
// 개발자 모드에서 network 눌러서 확인 가능
