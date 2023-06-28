// 숫자, 수학 method

// 10진수 -> 2진수/16진수
let num = 10;

num.toString(); // "10"
num.toString(2); // "1010"

let num2 = 255;

num2.toString(16); // "ff"

// Math 내장객체

// Math.ceil(): 올림
let num3 = 5.1;
let num4 = 5.7;

Math.ceil(num3); // 6
Math.ceil(num4); // 6

// Math.floor(): 내림
Math.floor(num3); // 5
Math.floor(num4); // 5

// Math.round(): 반올림
Math.round(num3); // 5
Math.round(num4); // 6

// toFixed(): 소수점 자릿수
// ex) 소수점 둘째 자리까지 표현 (셋째 자리에서 반올림)
let userRate = 30.1234;

Math.round(userRate * 100) / 100; // "30.12"
userRate.toFixed(2); // "30.12"

userRate.toFixed(0); // "30"
userRate.toFixed(6); // "30.123400"

Number(userRate.toFixed(2)); // 30.12 (문자열로 반환되므로 숫자로 다시 변경)

// isNaN(): 숫자인지 아닌지 판별
let x = Number("x"); // NaN

x == NaN; // false
x === NaN; // false
NaN == NaN; // false

isNaN(x); // true
isNaN(3); // false

// parselnt(): 문자열 -> 숫자
let margin = "10px";

parseInt(margin); // 10
Number(maring); // NaN

let redColor = "f3";
parseInt(redColor); // NaN (문자열로 시작하면 변환X)

parseInt(redColor, 16); // 243 (16진수로 변환)
parseInt("11", 2); // 3 (2진수로 변환)

// parseFloat(): 부동소수점 반환
let padding = "18.5%";

parseInt(padding); // 18
parseFloat(padding); // 18.5

// Math.random(): 0~1 사이 무작위 숫자 생성
Math.random(); // 0.260...
Math.random(); // 0.63164...

// ex) 1~100 사이 임의의 숫자를 뽑고 싶다면?
Math.floor(Math.random() * 100) + 1;

// Math.max(), Math.min()
Math.max(1, 4, -1, 5, 10, 9, 5.54); // 10
Math.min(1, 4, -1, 5, 10, 9, 5.54); // -1

// Math.abs(): 절대값
Math.abs(-1); // 1

// Math.pow(n, m): 제곱
Math.pow(2, 10); // 1024

// Math.sqrt(): 제곱근
Math.sqrt(16); // 4
