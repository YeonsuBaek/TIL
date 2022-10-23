// TDZ(Temporal Dead Zone): 코드 예측과 버그 줄일 수 있음

console.log(name); // TDZ: 사용 불가
const name = "Mike"; // const 혹은 let에서
console.log(name); // 이것만 사용 가능

// 호이스팅: scoped 단위로 일어남

let age = 30;

function showAge() {
  console.log(age);

  // let age = 20; // TDZ
}

showAge();

// 변수의 생성과정: 선언-초기화-할당
// var: 선언&초기화 동시
// let: 선언-초기화 분리
// const: 선언&초기화&할당

var age2;
age2 = 30;

let name2;
name2 = "Mike";

// const gender; // 할당하지 않아 오류
gender = "male";

// var: function-scoped => 함수 내에서 선언하면 함수 밖에서 사용 불가능
// let, const: block-scoped => 블록(for, while, if...) 내에서 선언하면 블록 밖에서 사용 불가능
