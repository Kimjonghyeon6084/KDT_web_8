//실습1 Callback >> Promise
// callback 함수로 이루어진 코드를 promise로 변경하기
//객체
function call(name) {
  return new Promise(function (reslove, reject) {
    setTimeout(function () {
      console.log(name);
      reslove(name);
    }, 1000);
  });
}

function back() {
  return new Promise(function (reslove, reject) {
    setTimeout(function () {
      console.log("back");
      reslove("back");
    }, 1000);
  });
}

function hell() {
  return new Promise(function (reslove, reject) {
    setTimeout(function () {
      // console.log("callback hell");
      reslove("callback hell");
    }, 1000);
  });
}

call("kim")
  .then(function (name) {
    console.log(name + "반가워");
    return back();
  })
  .then(function (result) {
    console.log(result + "실행했구나");
    return hell();
  })
  .then(function (result) {
    console.log("여기는" + result);
  });
