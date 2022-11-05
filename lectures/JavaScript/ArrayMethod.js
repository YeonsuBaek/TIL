// Array Methods

// push(): 뒤에 삽입
// pop(): 뒤에 삭제
// unshift(): 앞에 삽입
// shift(): 앞에 삭제

// arr.splice(시작인덱스, 개수): 특정 요소 지움
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr); // [1, 4, 5]

// arr.splice(시작인덱스, 개수, 추가할요소): 특정 요소 지우고 추가
let arr2 = [1, 2, 3, 4, 5];
arr2.splice(1, 3, 100, 200);
console.log(arr2); // [1, 100, 200, 5]

let arr3 = ["나는", "철수", "입니다"];
arr3.splice(1, 0, "대한민국", "소방관");
console.log(arr3); // ["나는", "대한민국", "소방관", "철수", "입니다"]

// arr.splice(): 삭제된 요소 반환
let arr4 = [1, 2, 3, 4, 5];
result = arr4.splice(1, 2);
console.log(arr4); // [1, 4, 5]
console.log(result); // [2, 3]

// arr.slice(시작인덱스, 끝인덱스 + 1): 시작인덱스부터 끝인덱스까지 반환
let arr5 = [1, 2, 3, 4, 5];

let result2 = arr5.slice(1, 4);
console.log(result2); // [2, 3, 4]

let result3 = arr5.slice();
console.log(result3); // [1, 2, 3, 4, 5]

// arr.concat(arr2, arr3 ..): 합쳐서 새배열 반환
let arr6 = [1, 2];

let result4 = arr6.concat([3, 4], [5, 6], 7);
console.log(result4); // [1, 2, 3, 4, 5, 6, 7]

// arr.forEach(fn): 배열 반복
let users = ["Mike", "Tom", "Jane"];

users.forEach((item, index, arr) => {
  // arr는 잘 사용하지 않음
  console.log(item, index);
});
// Mike 0
// Tom 1
// Jane 2

// arr.indexOf(), arr.lastIndexOf()
let arr7 = [1, 2, 3, 4, 5, 1, 2, 3];

console.log(arr7.indexOf(3)); // 2
console.log(arr7.indexOf(3, 3)); // 7
console.log(arr7.lastIndexOf(3)); // 7

// arr.includes(): 포함하는지 확인
console.log(arr7.includes(2)); // true
console.log(arr7.includes(8)); // false

// arr.find(fn), arr.findIndex(fn)
// 첫번째 true 값만 반환하고 끝, 만약 없으면 undefined를 반환
let arr8 = [1, 2, 3, 4, 5];

const result5 = arr8.find((item) => {
  return item % 2 === 0;
});
console.log(result5); // 2

// arr.filter(fn): 만족하는 모든 요소를 배열로 전환
let arr9 = [1, 2, 3, 4, 5];

const result6 = arr9.filter((item) => {
  return item % 2 === 0;
});
console.log(result6); // [2, 4]

// arr.reverse(): 역순으로 재정렬
let arr10 = [1, 2, 3, 4, 5];

console.log(arr10.reverse()); // [ 5, 4, 3, 2, 1 ]

// arr.map(fn): 함수를 받아 특정 기능을 시행하고 새로운 배열 반환
let userList = [
  { name: "Mike", age: 30 },
  { name: "Jane", age: 27 },
  { name: "Tom", age: 10 },
];

let newUserList = userList.map((user, index) => {
  return Object.assign({}, user, {
    id: index + 1,
    isAdult: user.age > 19,
  });
});
console.log(newUserList);
// [
//   { name: "Mike", age: 30, id: 1, isAdult: true },
//   { name: "Jane", age: 27, id: 2, isAdult: true },
//   { name: "Tom", age: 10, id: 3, isAdult: false },
// ]

// join(): 배열을 합쳐 문자열로 변환
let arr11 = ["안녕", "나는", "철수야"];

console.log(arr11.join()); // 안녕,나는,철수야
console.log(arr11.join(" ")); // 안녕 나는 철수야

// split(): 문자열을 나눠 배열로 변환
const users = "Mike, Jane, Tom, Tony";
console.log(users.split(", ")); // [ 'Mike', 'Jane', 'Tom', 'Tony' ]

const str = "Hello, I'm yeonsu";
console.log(str.split("")); // ['H', 'e', 'l', 'l', 'o', ',', ' ', 'I', "'", 'm', ' ', 'y', 'e', 'o', 'n', 's', 'u']

// Array.isArray(): 배열인지 아닌지
let user = {
  name: "Mike",
  age: 30,
};
let userList = ["Mike", "Tom", "Jane"];

console.log(typeof user); // object
console.log(typeof userList); //object
console.log(Array.isArray(user)); // false
console.log(Array.isArray(userList)); // true

// arr.sort(): 배열 재정렬, 배열 자체가 변경되니 주의
let arr = [1, 2, 3, 4, 5];
let arr2 = ["a", "c", "d", "e", "b"];

console.log(arr.sort()); // [ 1, 2, 3, 4, 5 ]
console.log(arr2.sort()); // [ 'a', 'b', 'c', 'd', 'e' ]

let arr3 = [27, 8, 5, 13];
// console.log(arr3.sort()); // [ 13, 27, 5, 8 ] (문자열로 취급하기 때문에)

arr3.sort((a, b) => {
  return a - b;
  // [8, 27, 5, 13] -> [5, 8, 27, 13] -> [5, 8, 13, 27]
});
console.log(arr3); // [ 5, 8, 13, 27 ]

// Lodash 라이브러리 => .sortBy(arr)는 위와 같음

// arr.reduce(): 배열을 돌고 원하는 작업을 하고 최종 값을 반환
let arr = [1, 2, 3, 4, 5];

let result = 0;
arr.forEach((num) => {
  result += num;
});
console.log(result);

const result2 = arr.reduce((prev, cur) => {
  // prev: 누적 계산값, cur: 현재값
  return (prev += cur);
}, 0); // 0: 초기값 - 굳이 안써도 됨
console.log(result2);

let userList = [
  { name: "Mike", age: 30 },
  { name: "Jane", age: 27 },
  { name: "Tom", age: 10 },
  { name: "Sue", age: 26 },
  { name: "Harry", age: 3 },
  { name: "Steve", age: 60 },
];

let result = userList.reduce((prev, cur) => {
  if (cur.age > 19) {
    prev.push(cur.name);
  }
  return prev;
}, []);
console.log(result); // [ 'Mike', 'Jane', 'Sue', 'Steve' ]
