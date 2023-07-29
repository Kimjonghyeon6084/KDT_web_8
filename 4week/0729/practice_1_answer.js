function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}
function back(callback) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}
function hell(callback) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

call("kim")
  .then(function (name) {
    console.log(name + "반가워");
    return back("back");
  })
  .then(function (result) {
    console.log(result + "을 실행했구나");
    return hell("callback hell");
  })
  .then(function (result) {
    console.log("여기는" + result);
  });
