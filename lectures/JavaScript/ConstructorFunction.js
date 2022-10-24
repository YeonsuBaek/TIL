// 생성자 함수: 여러 개의 객체를 만들 때 사용
// 붕어빵 틀과 같은 역할...
// 매개변수: 재료, 결과: 붕어빵

// 첫 글자는 대문자로
function User(name, age) {
  this.name = name;
  this.age = age;
}

let user1 = new User("Mike", 30);
let user2 = new User("Jane", 22);
let user3 = new User("Tom", 17);

// 알고리즘의 동작 방법

function User2(name, age) {
  // this = {};  // 2. 빈 객체 생성 - 실제 코드에는 존재하지 않음

  // 3. this에 아래 property를 추가
  this.name = name;
  this.age = age;

  // return this;  // 4. this 반환 - 실제 코드에는 존재하지 않음
}

new User2(); // 1. 함수 실행

//

function User3(name, age) {
  this.name = name;
  this.age = age;
  this.sayName = function () {
    console.log(this.name);
  };
}

let user5 = new User("Han", 40);
user5.sayName(); // 'Han'

// 상품 객체를 생성해보자

function Item(title, price) {
  // this = {};
  this.title = title;
  this.price = price;
  this.showPrice = function () {
    console.log(`가격은 ${price}원 입니다.`);
  };
  // return this;
}

const item1 = new Item("인형", 3000);
const item2 = new Item("가방", 4000);
const item3 = new Item("지갑", 5000);

console.log(item1, item2, item3);
