//promise - async/await
//실습1에서 promise로 바꾼 코드를 exec 함수를 만들어 실행하게 하기
//(이때, exec는 async 함수이다.)

function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name); // 작업 성공시 then(name)
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("back"); // 작업 성공시 then('back')
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

// promise -> async/await
async function exec() {
  const name = await call("kim");
  console.log(`${name} 반가워`);

  const result = await back();
  console.log(`${result}을 실행했구나`);

  const msg = await hell();
  console.log(`여기는 ${msg}`);
}

exec();
