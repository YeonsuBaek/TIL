// 상속, 프로토타입

// 프로토타입 유무 확인
const user = {
  name: "Mike",
};
console.log(user.name); // Mike
console.log(user.hasOwnProperty("name")); // true
console.log(user.hasOwnProperty("age")); // false

// 상속
const car = {
  wheels: 4,
  drive() {
    console.log("drive..");
  },
};
const bmw = {
  color: "red",

  navigation: 1,
};
const benz = {
  color: "black",
};
const audi = {
  color: "blue",
};
bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;
console.log(bmw.wheels); // 4
const x5 = {
  color: "white",
  name: "x5",
};
x5.__proto__ = bmw;
console.log(x5.color); // white (x5에 있음)
console.log(x5.navigation); // 1(x5에 없으므로 bmw에서 상속)
for (p in x5) {
  console.log(p);
  // color
  // name
  // navigation
  // wheels
  // drive
}
console.log(Object.keys(x5)); // [ 'color', 'name' ]
console.log(Object.values(x5)); // [ 'white', 'x5' ]

// Prototype Chain
// 자신에게 있으면 그대로 갖다 쓰고, 없으면 상속된 객체에서 가져옴

// 생성자 함수 활용
const Bmw = function (color) {
  this.color = color;
};
Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function () {
  console.log("drive...");
};
const x5 = new Bmw("red");
const x4 = new Bmw("blue");
console.log(x5);
console.log(x4);
