let car: string = "bmw";

// car = 3; // error

let age: number = 30;
let isAdult: boolean = true;
let a: number[] = [1, 2, 3];
let a2: Array<number> = [1, 2, 3];

let week1: string[] = ["mon", "tue", "wed"];
let week2: Array<string> = ["mon", "tue", "wed"];

// week1.push(3) // error

//
// 튜플 (Tuple)

let b: [string, number];

b = ["z", 1];

// b = [1, 'z'] // error

b[0].toLowerCase();
// b[1].toLowerCase(); // error

//
// void, never(에러반환, 무한루프)

function sayHello(): void {
  console.log("hello");
}

function showError(): never {
  throw new Error();
}

function infLoop(): never {
  while (true) {
    // do something...
  }
}

//
// enum(특정 값만 사용하고 싶고 값들이 공통될 때 사용)

enum Os {
  Window,
  Ios,
  Android,
}

let myOs: Os;

myOs = Os.Window;

//
// null, undefined

let c: null = null;
let d: undefined = undefined;
