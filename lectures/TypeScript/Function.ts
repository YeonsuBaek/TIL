function add(num1: number, num2: number): number {
  return num1 + num2;
}

// ?: 있든 없음 of -> 선택적 매개변수
function hello(name?: string) {
  return `Hello, ${name || "world"}`;
}

// 기본값 지정
function hello2(name = "world") {
  return `Hello, ${name}`;
}

const result = hello();
const result2 = hello("Sam");
// const result3 = hello(123); // error

// 주의: 선택적 매개변수는 필수 매개변수 뒤에 와야함
function hello3(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hello, ${name}. You are ${age}`;
  } else {
    return `Hello, ${name}`;
  }
}

console.log(hello3("Sam"));
console.log(hello3("Sam", 30));

// 나머지 매개변수: 해지지 않은 수의 매개변수를 배열로 받음
function add2(...nums: number[]): number {
  return nums.reduce((result, num) => result + num, 0);
}

add2(1, 2, 3);
add2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//
// this

interface User {
  name: string;
}

const Sam: User = { name: "Sam" };

function showName(this: User, age: number, gender: "m" | "f") {
  console.log(this.name, age, gender);
}

const a = showName.bind(Sam);
a(30, "m");

interface User2 {
  name: string;
  age: number;
}

// overload: 전달 받은 매개변수의 개수나 타입에 따라 다른 동작
function join(name: string, age: number): User2;
function join(name: string, age: string): string;
function join(name: string, age: number | string): User2 | string {
  if (typeof age === "number") {
    return {
      name,
      age,
    };
  } else {
    return "나이는 숫자로 입력해주세요";
  }
}

const sam: User2 = join("Sam", 30);
const jane: string = join("Jane", "30");
