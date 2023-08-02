// promise 객채를 반호나하는 promise 함수 정의
// function promise1(flag) {
//   return new promise1(function (reslove, reject) {
//     if (flag) {
//       reslove("promise 상태는 fulfilled, then으로 연결, 이때 flag 값은 true");
//     } else {
//       reject("promise 상태는 rejected, catch로 연걸, 이때 flag 값은 false");
//     }
//   });
// }
// console.log(promise1(false));

// promise1(false)
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (err) {
//     // error 처리
//     console.log(err);
//   });

//##################################
//콜백함수 인거 promise로 바꾸기
// let product;
// let price;
// goMart();
// pickDrink()
//   .then(pay)
//   .catch((err) => {
//     console.log(err);
//   });
// pay(product, price);

// function goMart() {
//   console.log("마트에 와서 어떤 음료 마실까??");
// }

// function pickDrink() {
//   return new Promise(function (reslove, reject) {
//     setTimeout(function () {
//       console.log("고민 끝");
//       product = "제로 콜라";
//       price = 3000;
//       if (price <= 2000) {
//         reslove();
//       } else {
//         reject("돈이 부족해요.");
//       }
//     }, 2000);
//   });
// }

// function pay() {
//   console.log(`상품명: ${product}, 가격: ${price}`);
// }

//######################################
//promise 체이닝

// 체이닝 사용 안한 경우
//(4+3) *2 -1

// function add(n1, n2, callback) {
//   setTimeout(function () {
//     let result = n1 + n2;
//     callback(result);
//   }, 1000);
// }

// function mul(n, callback) {
//   setTimeout(function () {
//     let result = n * 2;
//     callback(result);
//   }, 700);
// }

// function sub(n, callback) {
//   setTimeout(function () {
//     let result = n - 1;
//     callback(result);
//   }, 500);
// }

// //add -> mul -> sub

// add(4, 3, function (x) {
//   console.log("1 : ", x);
//   mul(x, function (y) {
//     console.log("2 : ", y);
//     sub(y, function (z) {
//       console.log("3 :", z);
//     });
//   });
// });

// prrmise 체이닝 사용한 경우
// 장점 : then 메서드 연속해서 사용 가능 -> 순차적으로 작업 가능
// 예외처리 간편 -> 마지막에 catch 구문으로 한 번에 처리

function add(n1, n2) {
  return new Promise(function (reslove, reject) {
    setTimeout(function () {
      let result = n1 + n2;
      reslove(result);
    }, 1000);
  });
}

function mul(n) {
  return new Promise(function (reslove, reject) {
    setTimeout(function () {
      let result = n * 2;
      reslove(result);
    }, 700);
  });
}

function sub(n) {
  return new Promise(function (reslove, reject) {
    setTimeout(function () {
      let result = n - 1;
      // reslove(result);
      reject(new Error("에러 처리"));
    }, 500);
  });
}

add(4, 3)
  .then(function (result) {
    console.log("1 : ", result);
    return mul(result);
  })
  .then(function (result) {
    console.log("2 : ", result);
    return sub(result);
  })
  .then(function (result) {
    console.log("3 : ", result);
  })
  .catch(function (err) {
    console.log("실패");
    console.log(err);
  });