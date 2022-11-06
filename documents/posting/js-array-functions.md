# [JavaScript] Array(배열) 내장함수

오늘은 배열 객체에 대해 정리해보았습니다. 배열 객체는 종류가 많지만 많이 활용되기 때문에 잘 알아두면 좋습니다.  
특히 **배열 순회**를 잘 이용하면 짧지만 가독성 있는 코드를 작성할 수 있습니다.

## 인덱스 값 활용하기

### 배열.indexOf(검색요소)

`indexOf()`는 검색할 요소 중 **첫번째 인덱스**를 구하는 것입니다.

```js
const arr = [1, 2, 3, 1, 2, 3];

console.log(arr.indexOf(2)); // 1
console.log(arr.indexOf(5)); // -1 (검색 실패)
```

### 배열.lastIndexOf(검색요소)

`lastIndexOf()`는 검색할 요소 중 **마지막 인덱스**를 구하는것 입니다.

```js
const arr = [1, 2, 3, 1, 2, 3];

console.log(arr.lastIndexOf(2)); // 4
console.log(arr.lastIndexOf(5)); // -1 (검색 실패)
```

### 배열.findIndex(함수)

`findIndex()`는 함수내 해당 조건에서 첫번째 true 값의 인덱스를 구하는 것입니다.

```js
const arr = [1, 2, 3, 4, 5];

const result = arr.findIndex((item) => {
  return item % 2 === 0;
});
console.log(result); // 1

const result2 = arr.findIndex((item) => {
  return item > 10;
});
console.log(result2); // -1 (존재하지 않을 때)
```

## 일부 요소 구하기

### 배열.pop()

`pop()`는 배열의 마지막 요소를 제거하고 반환하는 것입니다.  
**주의) 기존 배열이 변경됨**

```js
const arr = [1, 2, 3, 4, 5];

console.log(arr.pop()); // 5
console.log(arr); // [ 1, 2, 3, 4 ]
```

### 배열.push(추가요소)

`push()`는 배열의 마지막 요소에 새로운 요소를 추가하고 배열의 길이를 반환하는 것입니다.  
**주의) 기존 배열이 변경됨**

```js
const arr = [1, 2, 3, 4, 5];

console.log(arr.push(6)); // 6
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]
```

### 배열.shift()

`shift()`는 배열의 첫번째 요소를 제거하고 반환하는 것입니다.  
**주의) 기존 배열이 변경됨**

```js
const arr = [1, 2, 3, 4, 5];

console.log(arr.shift()); // 1
console.log(arr); // [ 2, 3, 4, 5 ]
```

### 배열.unshift(추가요소)

`unshift()`는 배열의 첫번째 요소에 새로운 요소를 추가하고 배열의 길이를 반환하는 것입니다.  
**주의) 기존 배열이 변경됨**

```js
const arr = [1, 2, 3, 4, 5];

console.log(arr.unshift(0)); // 6
console.log(arr); // [ 0, 1, 2, 3, 4, 5 ]
```

### 배열.slice(시작인덱스, 종료인덱스)

`slice()`는 시작인덱스 이상 종료인덱스 미만까지 배열을 구하는 것입니다.

```js
const arr = [1, 2, 3, 4, 5];

console.log(arr.slice(2, 3)); // [ 3 ]
console.log(arr.slice(0, 4)); // [ 1, 2, 3, 4 ]
```

## 배열 ↔️ 문자열 변경하기

### 배열.toString()

`toString()`은 배열을 통째로 문자열로 바꾸는 것입니다.

```js
const arr = [1, 2, 3, 4, 5];

console.log(arr.toString()); // "1,2,3,4,5"
```

### 배열.join(지정문자)

`join()`은 지정 문자를 이용해 배열 안의 문자를 모두 결합해 문자열로 바꾸는 것입니다.

```js
const arr = [1, 2, 3, 4, 5];

console.log(arr.join(" ")); // "1 2 3 4 5"
console.log(arr.join("-")); // "1-2-3-4-5"
console.log(arr.join("")); // "12345"
```

### 배열.split(지정문자)

`split()`은 지정문자를 기준으로 문자열을 나눠 배열로 바꾸는 것입니다.

```js
const arr = "1, 2, 3, 4, 5";
console.log(arr.split(", ")); // [ '1', '2', '3', '4', '5' ]

const str = "Hello, I'm yeonsu";
console.log(str.split("")); // ['H', 'e', 'l', 'l', 'o', ',', ' ', 'I', "'", 'm', ' ', 'y', 'e', 'o', 'n', 's', 'u']
```

## 배열에 추가하고 삭제하기

### 배열.concat(합칠배열)

`concat()`은 여러 배열을 하나로 합치는 것입니다.

```js
const arr = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8];
const arr3 = [9, 10];
const num = 11;

console.log(arr.concat(arr2)); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr.concat(arr2, arr3, num)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
```

### 배열.splice(시작인덱스, 개수, 추가요소)

`splice()`은 시작인덱스부터 개수만큼 요소를 삭제하고 반환하는 것입니다. 추가요소 매개변수를 넣으면 삭제된 인덱스에 새로운 요소가 추가됩니다.  
**주의) 기존 배열이 변경됨**

```js
const arr = [1, 2, 3, 4, 5];

console.log(arr.splice(2, 3)); // [ 3, 4, 5 ]
console.log(arr); // [ 1, 2 ]
```

```js
const arr = [1, 2, 3, 4, 5];

console.log(arr.splice(1, 3, 100, 200)); // [ 2, 3, 4 ]
console.log(arr); // [1, 100, 200, 5] // [ 1, 100, 200, 5 ]
```

## 배열 판별하기

### 배열.includes(검색요소)

`includes()`는 해당 요소가 존재하는지 판별하는 것 입니다.

```js
const arr = "1, 2, 3, 4, 5";

console.log(arr.includes(1)); // true
console.log(arr.includes(10)); // false
```

### 배열.find(함수)

`find()`은 함수 내 해당 조건에서 첫번째로 true를 가지는 요소를 반환하는 것입니다.

```js
const arr = [1, 2, 3, 4, 5];

const result = arr.find((item) => {
  return item % 2 === 0;
});
console.log(result); // 2

const result2 = arr.find((item) => {
  return item > 10;
});
console.log(result2); // undefined (검색 실패)
```

### Array.isArray(배열)

`Array.isArray()`은 배열인지 아닌지 판별하는 것입니다. `typeof`을 사용하면 배열도 `Object`로 반환하기 때문에 `Array.isArray()`를 사용하면 됩니다.

```js
const user = {
  name: "yeonsu",
  age: 23,
};
const userList = ["yeonsu", "summer"];

console.log(typeof user); // object
console.log(typeof userList); //object
console.log(Array.isArray(user)); // false
console.log(Array.isArray(userList)); // true
```

## 배열 재정렬

### 배열.reverse()

`reverse()`는 배열을 역순으로 재정렬하는 것입니다.  
**주의) 기존 배열이 변경됨**

```js
const arr = [1, 2, 3, 4, 5];

console.log(arr.reverse()); // [ 5, 4, 3, 2, 1 ]
```

### 배열.sort()

`sort()`는 배열을 오름차순으로 정렬하는 것입니다.  
**주의) 기존 배열이 변경됨**

```js
const arr = [5, 3, 2, 4, 1];
const arr2 = ["c", "a", "d", "e", "b"];
console.log(arr.sort()); // [ 1, 2, 3, 4, 5 ]
console.log(arr2.sort()); // [ 'a', 'b', 'c', 'd', 'e' ]

const arr3 = [27, 8, 5, 13];
console.log(arr3.sort()); // [ 13, 27, 5, 8 ] (문자열로 취급)
```

### 배열.sort(함수)

`sort()`는 요소를 문자열로 생각해 정렬하기 때문에 10의 자리 이상의 숫자는 제대로 정렬 할 수 없습니다. 이 때 함수를 사용하여 올바르게 정렬할 수 있습니다.  
**주의) 기존 배열이 변경됨**

```js
const arr3 = [27, 8, 5, 13];

// 오름차순
arr3.sort((a, b) => {
  return a - b;
  // [8, 27, 5, 13] -> [5, 8, 27, 13] -> [5, 8, 13, 27]
});
console.log(arr3); // [ 5, 8, 13, 27 ]

// 내림차순
arr3.sort((a, b) => {
  return b - a;
});
console.log(arr3); // [ 27, 13, 8, 5 ]
```

## 배열 순회

### 배열.forEach(함수)

`forEach()`는 배열의 요소를 처음부터 끝까지 반복해 함수를 수행하는 것입니다.

```js
const arr = [1, 2, 3, 4, 5];

arr.forEach((num, index, arr) => {
  // arr는 잘 사용하지 않음
  console.log(`num: ${num}, index: ${index}`);
});
// num: 1, index: 0
// num: 2, index: 1
// num: 3, index: 2
// num: 4, index: 3
// num: 5, index: 4
```

### 배열.filter(함수)

`filter()`는 함수 내 조건을 만족하는 모든 요소를 새로운 배열로 반환하는 것입니다.

```js
const arr = [1, 2, 3, 4, 5];

const newArr = arr.filter((item) => {
  return item % 2 === 0;
});
console.log(newArr); // [2, 4]
console.log(arr); // [ 1, 2, 3, 4, 5 ]
```

### 배열.map(함수)

`filter()`는 함수를 수행하고 새로운 배열로 반환하는 것입니다.

```js
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map((item, index) => {
  return (item += index);
});
console.log(newArr); // [ 1, 3, 5, 7, 9 ]
```

### 배열.reduce(함수)

`reduce()`는 배열을 돌아 원하는 작업을 하고 최종 값을 반환하는 것입니다.

```js
const arr = [1, 2, 3, 4, 5];

// forEach 활용
let result = 0;
arr.forEach((num) => {
  result += num;
});
console.log(result); // 15

// reduce 활용 => 더욱 간결함
const result2 = arr.reduce((prev, cur) => {
  // prev: 누적 계산값, cur: 현재값
  return (prev += cur);
}, 0); // 0: 초기값 - 굳이 안써도 됨
console.log(result2); // 15
```
