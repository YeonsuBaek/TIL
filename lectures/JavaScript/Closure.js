// 클로저
// 함수와 렉시컬 환경의 조합
// 함수가 생성될 당시 외부 변수를 기억
// 생성 이후에도 계속 접근 가능

// 어휘적 환경 (Lexical Environment)

// 전역 Lexical 환경
// one: 1
// addOne: function
let one;
one = 1;
function addOne(num) {
  console.log(one + num);
}
// 내부 Lexical 환경
// num: 5
addOne(5);

// 내부->전역 순으로 검색함
// one + num은 내부에서 num 발견됨, one은 전역에서 발견됨

// 전역 Lexical 환경
// makeAdder: function
// add3: function
function makeAdder(x) {
  // makeAdder Lexical 환경
  // x: 3
  return function (y) {
    // 익명함수 Lexical 환경
    // y: 2
    return x + y;
  };
}
const add3 = makeAdder(3);
console.log(add3(2));
