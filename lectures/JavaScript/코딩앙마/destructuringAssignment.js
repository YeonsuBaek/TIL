// 구조 분해 할당
// 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식

let [x, y] = [1, 2];
console.log(x); // 1
console.log(y); // 2

let users = ["Mike", "Tom", "Jane"];
let [user1, user2, user3] = users;
console.log(user1); // Mike
console.log(user2); // Tom
console.log(user3); // Jane

let str = "Mike-Tom-Jane";
let [user1, user2, user3] = str.split("-");
console.log(user1); // Mike
console.log(user2); // Tom
console.log(user3); // Jane

let [a, b, c] = [1, 2];
console.log(c); // undefined

let [a = 3, b = 4, c = 5] = [1, 2];
console.log(c); // 5

// 일부 반환값 무시
let [user1, , user2] = ["Mike", "Tom", "Jane", "Tony"];
console.log(user1); // Mike
console.log(user2); // Jane

// 바꿔치기
let a = 1;
let b = 2;

// 기존 바꿔치기
let c = a;
a = b;
b = c;

// 간단한 바꿔치기
[a, b] = [b, a];

// 객체 구조 분해
let user = { name: "Mike", age: 30 };
let { name, age } = user; // key 순서 상관 X
// let name = user.name;
// let age = user.age; 와 같음

console.log(name); // Mike
console.log(age); // 30

let { name: userName, age: userAge } = user;
console.log(userName); // Mike
console.log(userAge); // 30

let { name, age, gender } = user;
console.log(gender); // undefined

let { name, age, gender = "male" } = user;
console.log(gender); // male
