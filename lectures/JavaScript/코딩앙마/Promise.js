// new Promise로 생성
// resolve: 성공했을 때 실행되는 함수, reject 실패했을 때 함수 => callback 함수
const pr = new Promise((resolve, reject) => {
  // code
});

// new Promise
// state: pending(대기), result: undefined

// resolve(value): 성공한 경우
// state: fulfilled(이행됨), result: value

// reject(error) 실패한 경우
// state: rejected(거부됨), result: error

// ex) 판매자 입장 코드
const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("OK");
  }, 3000);
});
// state: pending(대기), result: undefined
// 3초 후
// state: fulfilled(이행됨), result: 'OK'

const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("error.."));
  }, 3000);
});
// state: pending(대기), result: undefined
// 3초 후
// state: rejected(거부됨), result: error

// ex) 소비자 입장 코드
pr.then(
  function (result) {
    console.log(result + " 가지러 가자.");
  }, // resolve일 때
  function (err) {
    console.log("다시 주문해주세요..");
  } // reject일 때
);

// catch: reject인 경우에만 사용 (가독성이 좋음 + resolve인 경우에 함수 하나만 사용 가능)
pr.then(function (result) {
  console.log(result + " 가지러 가자."); // resolve일 때
}).catch(function (err) {
  console.log("다시 주문해주세요.."); // reject일 때
});

// finally: 처리 완료되면 항상 사용
pr.then(function (result) {
  console.log(result + " 가지러 가자."); // resolve일 때
})
  .catch(function (err) {
    console.log("다시 주문해주세요.."); // reject일 때
  })
  .finally(function () {
    console.log("---주문 끝---"); // the end
  });

// ex)
// Promise 사용 X
const f1 = (callback) => {
  setTimeout(function () {
    console.log("1번 주문 완료");
    callback();
  }, 1000);
};
const f2 = (callback) => {
  setTimeout(function () {
    console.log("2번 주문 완료");
    callback();
  }, 3000);
};
const f3 = (callback) => {
  setTimeout(function () {
    console.log("3번 주문 완료");
    callback();
  }, 2000);
};
console.log("시작");
f1(function () {
  f2(function () {
    f3(function () {
      console.log("끝");
    });
  });
});

// Promise 사용 O
const f1 = () => {
  return new Promise((res, rej) => {
    setTimeout(function () {
      res("1번 주문 완료");
    }, 1000);
  });
};
const f2 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(function () {
      res("2번 주문 완료");
    }, 3000);
  });
};
const error = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(function () {
      rej("xxx");
    }, 3000);
  });
};
const f3 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(function () {
      res("3번 주문 완료");
    }, 2000);
  });
};
console.log("시작");
// 프로미스 체이닝 (Primises chaning)
// f1()
//   .then((res) => f2(res))
//   .then((res) => f3(res))
//   .then((res) => console.log(res))
//   .finally(() => {
//     console.log("끝");
//   });

// f1()
//   .then((res) => error(res))
//   .then((res) => f3(res))
//   .then((res) => console.log(res))
//   .finally(() => {
//     console.log("끝");
//   });

// Promise.all: 동시 실행
// reject인 경우 아예 실행 X 성공한 값도 보여주지 않음
// console.time("x");
// Promise.all([f1(), f2(), f3()]).then((res) => {
//   console.log(res);
//   console.timeEnd("x"); // 3초 정도 걸림
// });

// Promise.race: 하나라도 먼저 끝나면 끝
console.time("x");
Promise.race([f1(), f2(), f3()]).then((res) => {
  console.log(res);
  console.timeEnd("x"); // 1초 정도 걸림
});
