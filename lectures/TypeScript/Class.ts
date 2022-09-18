// 방법1. 멤버 변수 미리 선언

class Car1 {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
  }
}

// 방법2. 접근제한자

class Car2 {
  constructor(public color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
  }
}

// 방법3. read only

class Car3 {
  constructor(readonly color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
  }
}

//
// 접근 제한자(Access modifier) - public, private, protected

class Car4 {
  name: string = "car"; // default: public
  // private name: string = "car"; // Car4 클래스 내부에서만 사용 가능
  // #name: string = "car"; // private와 동일
  // protected name: string = "car"; // 자식 클래스 내부에서 통제 가능 (클래스 인스턴스X)
  // readonly name: string = "car"; // name 변경 불가능 => 바꾸고 싶다면? constructor에서
  color: string;
  static wheels = 4;
  constructor(color: string) {
    this.color = color;
  }
  // constructor(color: string, name) {
  //     this.color = color;
  // this.name = name;
  // }

  start() {
    console.log("start");
    // console.log("this.name")
    console.log(Car4.wheels); // 정적 멤버 선언: 앞에 this가 아닌 클래스명 붙임
  }
}

class Bmw extends Car4 {
  constructor(color: string) {
    super(color);
  }
  //   constructor(color: string, name) {
  // super(color, name);
  //   }
  showName() {
    console.log(super.name);
  }
}

const z4 = new Bmw("black");
// const z4 = new Bmw("black", "zzz4");
console.log(z4.name);

//
// 추상 Class
abstract class Car {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
  }
  abstract dosomething(): void; // 상속 받는 클래스에 반드시 존재해야함
}

// const car = new Car("red"); // error: new로 생성X

// 오직 상속으로 생성O
class Benz extends Car {
  constructor(color: string) {
    super(color);
  }
  dosomething() {
    alert(3);
  }
}

const z5 = new Benz("black");
