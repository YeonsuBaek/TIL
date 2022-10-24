// Computed property

let a = "age";

const user3 = {
  name: "Mike",
  [a]: 30, // age: 30
};

const user4 = {
  [1 + 4]: 5,
  ["안녕" + "하세요"]: "Hello",
};

// Mothods
// 예시 객체
const user5 = {
  name: "Mike",
  age: 30,
  gender: "male",
};

// 1. Object.assign(): 객체 복제

// const cloneUser = user;  // Error: 객체가 아닌 참조값만 복제됨
const newUser = Object.assign({}, user); // {}: 초기값
newUser.name = "Tom";
console.log(user.name); // 'Mike'
// newUser != user

Object.assign({ gender: "male" }, user); // gender 포함된 객체 생성
Object.assign({ name: "Tom" }, user); // 'Tom'이 아닌 'Mike'로 덮어씀

// 둘 이상 객체 복제
const user6 = {
  name: "Mike",
};
const info1 = {
  age: 30,
};
const info2 = {
  gender: "male",
};

Object.assign(user6, info1, info2);

// 2. Object.keys(): 키 배열 반환

Object.keys(user5); // ["name", "age", "gender"]

// 3. Object.values(): 값 배열 변환

Object.values(user5); // ["Mike", 30, "male"]

// 4. Object.entries(): 키/값 배열 반환

Object.entries(user5); // [["name", "Mike"], ["age", 30], ["gender", "male"]]

// 5. Object.fromEntries(): 키/값 배열을 객체로

const arr = [
  ["name", "Mike"],
  ["age", 30],
  ["gender", "male"],
];

Object.fromEntries(arr); // { name: 'Mike', age: 30, gender: 'male', }
