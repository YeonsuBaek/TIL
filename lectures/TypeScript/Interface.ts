let user: object;

user = {
  name: "xx",
  age: 30,
};

// console.log(user.name); // error

// 아래처럼 작성하자

type Score = "A" | "B" | "C " | "F";

interface User {
  name: string;
  age: number;
  gender?: string; // ?: 있어도 없어도 ok
  readonly birthYear: number; // readonly: 수정 불가능
  [grade: number]: Score; // string의 범위
}

let user2: User = {
  name: "xx",
  age: 30,
  birthYear: 2000,
  2: "A",
};

user2.age = 10;
// user2.gender = "male"; // error: user2에 명시되어야 함
// user2.birthYear = 1990; // error

console.log(user2.age);

interface Add {
  (num1: number, num2: number): number;
}

const add: Add = function (x, y) {
  return x + y;
};

add(10, 20);
// add(10, 20, 30); // error
// add("hello", "world"); // error

interface IsAdult {
  (age: number): boolean;
}

const a: IsAdult = (age) => {
  return age > 19;
};

a(19);

//
// Implements(클래스), extends(확장)

interface Car {
  color: string;
  wheels: number;
  start(): void;
}

interface Toy {
  name: string;
}

// 여러개 확장 가능
interface ToyCar extends Car, Toy {
  price: number;
}

interface Benz extends Car {
  door: number;
  stop(): void;
}

const benz: Benz = {
  color: "black",
  wheels: 4,
  start() {
    console.log("Go...");
  },
  door: 5,
  stop() {
    console.log("stop");
  },
};

class Bmw implements Car {
  color;
  wheels = 4;

  constructor(c: string) {
    this.color = c;
  }

  start() {
    console.log("Go...");
  }
}

const b = new Bmw("green");
console.log(b);
b.start();
