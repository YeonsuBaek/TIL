// 전개 구문: 배열
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let result = [...arr1, ...arr2];
console.log(result); // [ 1, 2, 3, 4, 5, 6 ]

let result2 = [0, ...arr1, ...arr2, 7, 8, 9];
console.log(result2); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// push(), splice(), concat()보다 간단히 사용 가능

// 전개 구문: 객체
let user = { name: "Mike" };
let mike = { ...user, age: 30 };
console.log(mike); // { name: 'Mike', age: 30 }

// 전개 구문: 복제
let arr = [1, 2, 3];
let arr2 = [...arr];
console.log(arr2); // [ 1, 2, 3 ]

let user = { name: "Mike", age: 30 };
let user2 = { ...user };
user2.name = "Tom";
console.log(user.name); // 'Mike'
console.log(user2.name); // 'Tom'

// ex) arr1을 [4, 5, 6, 1, 2, 3]으로
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// 오답
// arr2.forEach((num) => {
//   arr1.unshift(num);
// });
// console.log(arr1); // [ 6, 5, 4, 1, 2, 3 ]

// Bad
// arr2.reverse().forEach((num) => {
//   arr1.unshift(num);
// });
// console.log(arr1); // [ 4, 5, 6, 1, 2, 3 ]

// Good
arr1 = [...arr2, ...arr1];
console.log(arr1); // [ 4, 5, 6, 1, 2, 3 ]

// ex)
let user = { name: "Mike" };
let info = { age: 30 };
let fe = ["JS", "React"];
let lang = ["Korean", "English"];

// Bad
// user = Object.assign({}, user, info, {
//   skills: [],
// });
// fe.forEach((item) => {
//   user.skills.push(item);
// });
// lang.forEach((item) => {
//   user.skills.push(item);
// });

// Good
user = {
  ...user,
  ...info,
  skills: [...fe, ...lang],
};

console.log(user);
// {
//     name: 'Mike',
//     age: 30,
//     skills: [ 'JS', 'React', 'Korean', 'English' ]
// }
