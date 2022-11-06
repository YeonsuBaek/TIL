// 나머지 매개변수: ...

// 인수전달
function showName(name) {
  // name(인자)의 개수 제한 없음
  console.log(name);
}

showName(); // undefined
showName("Mike"); // 'Mike'
showName("Mike", "Tom"); // 'Mike'

// arguments
// 함수로 넘어온 모든 인수에 접근
// 함수 내에서 이용 가능한 지역 변수
// Array 형태의 객체
// length, index 존재
// 배열의 내장 메서드 없음 (forEach, map)
function showName(name) {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
}

showName("Mike", "Tom");
// 2
// 'Mike'
// 'Tom'

// 나머지 매개변수
// 배열의 내장 메서드 사용가능!
function showName(...names) {
  // name(인자)의 개수 제한 없음
  console.log(names);
}

showName(); // []
showName("Mike"); // ['Mike']
showName("Mike", "Tom"); // ['Mike', 'Tom']

// ex) 전달 받은 모든 수 더하기
function add(...numbers) {
  let result = numbers.reduce((prev, cur) => prev + cur);
  console.log(result);
}

add(1, 2, 3); // 6
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55

// ex) user 객체를 만들어 주는 생성자 함수 만들기
function User(name, age, ...skills) {
  // 나머지 매개변수는 항상 마지막에 위치
  this.name = name;
  this.age = age;
  this.skills = skills;
}

const user1 = new User("Mike", 30, "html", "css");
const user2 = new User("Tom", 20, "JS", "React");
const user3 = new User("Jane", 10, "English");

console.log(user1); // User { name: 'Mike', age: 30, skills: [ 'html', 'css' ] }
console.log(user2); // User { name: 'Tom', age: 20, skills: [ 'JS', 'React' ] }
console.log(user3); // User { name: 'Jane', age: 10, skills: [ 'English' ] }
