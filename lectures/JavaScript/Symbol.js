// property key: 문자형으로 반환
const obj = {
  1: "1입니다",
  false: "거짓",
};

Object.keys(obj); // ["1", "false"]

// Symbol: 유일한 식별자를 만들 때 사용 => 유일성 보장!
const a = Symbol();
const b = Symbol();

a === b; // false
a == b; // false

const id = Symbol("id"); // 설명을 붙이면 디버깅할 때 편함, 심볼 생성에 영향X
const id2 = Symbol("id");

id === id2; // false
id == id2; // false

// property key: 심볼형
const id3 = Symbol("id");
const user = {
  name: "Mike",
  age: 30,
  [id]: "myid",
};

// Object Methods에서는 심볼 건너뜀
Object.keys(user); // ["name", "age"]

// Symbol은 왜 사용해야할까?
// 특정 객체에 원본은 건드리지 않고 속성을 추가할 수 있다!
const user2 = {
  name: "Mike",
  age: 30,
};

const id4 = Symbol("id");
user[id4] = "myid";

// user.name = 'myname'; // Error: 다른 사람의 객체에 덮어 씌우면 안되지~
// user.a_key_no_one_used = 'hahaha'; // Error: 내가 넣은 속성이 다른 곳에서도 쓰여지면 안되지

// Symbol.for(): 전역 심볼
// - 하나의 심볼만 보장 받을 수 있음
// - 없으면 만들고, 있으면 가져오기 때문에
// - Symbol 함수는 매번 다른 Symbol 값을 생성하지만,
// - Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol 공유

const id5 = Symbol.for("id");
const id6 = Symbol.for("id");

id5 === id6; // true

// 생성된 심볼 이름 알고 싶어
Symbol.keyFor(id5); // "id"

// description: 전역 심볼이 아닐 때 이름 알고 싶어
const id7 = Symbol("description");

id.description; // 'description'

// 숨겨진 Symbol key를 보는 법
Object.getOwnPropertySymbols(user); // [Symbol(id)]
Reflect.ownKeys(user); // ["name", "age", "Symbol(id)"]

// 예시
// 개발자가 만들어 놓은 객체
const user3 = {
  name: "Mike",
  age: 30,
};

// 내가 작업
// user.showName = function () {};  // Error
const showName = Symbol("show name");
user3[showName] = function () {
  console.log(this.name);
};

user[showName]();

// 사용자가 접속하면 보이는 메세지
for (let key in user3) {
  console.log(`His ${key} is ${user[key]}.`);
}
