// call, apply, bind
// 함수 호출 방식과 관계없이 this를 지정할 수 있음

const mike = {
  name: "Mike",
};
const tom = {
  name: "Tom",
};
function showThisName() {
  console.log(this.name);
}
showThisName(); // undefined
showThisName.call(mike); // Mike
showThisName.call(tom); // tom

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}
update.call(mike, 1999, "singer");
console.log(mike); // { name: 'Mike', birthYear: 1999, occupation: 'singer' }
update.call(tom, 2002, "teacher");
console.log(tom); // { name: 'Mike', birthYear: 1999, occupation: 'singer' }

// apply: 배열을 매개변수로 사용
update.apply(mike, [1999, "singer"]);
console.log(mike); // { name: 'Mike', birthYear: 1999, occupation: 'singer' }
update.apply(tom, [2002, "teacher"]);
console.log(tom); // { name: 'Mike', birthYear: 1999, occupation: 'singer' }

const nums = [3, 10, 1, 6, 4];
// apply를 사용하지 않은 경우
// const minNum = Math.min(...nums);
// const maxNum = Math.max(...nums);
// apply를 사용한 경우 (null, [3, 10, 1, 6, 4])
const minNum = Math.min.apply(null, nums); // this가 필요 없기 때문에 아무런 값(null) 넣은거임
// call을 사용한 경우 (null, 3, 10, 1, 6, 4)
const maxNum = Math.max.call(null, ...nums);
console.log(minNum); // 1
console.log(maxNum); // 10

// bind: this 값 영구히 바꿀 수 있음
const mike = {
  name: "Mike",
};
function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}
const updateMike = update.bind(mike);
updateMike(1980, "police");
console.log(mike); // { name: 'Mike', birthYear: 1980, occupation: 'police' }

const user = {
  name: "Mike",
  showName: function () {
    console.log(`hello, ${this.name}`);
  },
};
user.showName(); // hello, Mike
let fn = user.showName;
fn.call(user); // hello, Mike
fn.apply(user); // hello, Mike
let boundFn = fn.bind(user);
boundFn(); // hello, Mike
