const User = function (name, age) {
  this.name = name;
  this.age = age;
  //   this.showName = function () {
  //     console.log(this.name);
  //   };
};
User.prototype.showName = function () {
  console.log(this.name);
};
const mike = new User("Mike", 30);
// const mike = User("mike", 30); // undefined (실수한 코드지만 에러는 아님)
for (const p in mike) {
  console.log(p);
  //name
  // age
  // showName
}

// 클래스
class User2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showName() {
    console.log(this.name);
  }
}
const tom = new User2("Tom", 19);
// const tom = User2("Tom", 19); // 클래스는 new 없이 실행 불가
for (const p in tom) {
  console.log(p);
  //name
  // age
}

// extends: 상속
class Car {
  constructor(color) {
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log("drive..");
  }
  stop() {
    console.log("STOP");
  }
}
class Bmw extends Car {
  park() {
    console.log("PART");
  }
}
const z4 = new Bmw("blue");

// 메소드 오버라이딩(method overriding)
class Audi extends Car {
  park() {
    console.log("PART");
  }
  // 동일한 이름 메소드는 덮어 씀
  stop() {
    super.stop();
    // super: Car의 stop도 쓸 수 있음
    console.log("OFF");
  }
}

// 오버라이딩 (Overriding)
class Benz extends Car {
  constructor(color) {
    // 냅다 선언하기 전에 부모 constructor 실행해줘야함
    super(color);
    this.navigation = 1;
  }
  // constructor가 없을 땐 이렇게 동작함 (눈에는 안보이지만...)
  //   constructor(...args) {
  //     super(...args);
  //   }
  park() {
    console.log("PARK");
  }
}
