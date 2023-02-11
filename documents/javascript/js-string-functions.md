# [JavaScript] String(문자열) 내장함수

우테코 프리코스 1주차 미션을 수행하고 다른 참여자들의 코드를 둘러보았습니다. 제 실력이 아직은 많이 부족하다고 반성하는 시간을 갖게 되었습니다. 특히 제가 10줄 이상으로 적어낸 코드를 5줄 이하로 깔끔하게 정리된 것을 보고 놀랐습니다.  

**for문 떡칠하기 vs 내장함수를 기깔나게 사용하기**
당연히 후자가 더 가독성이 좋겠죠... 그래서 자바스크립트 내장함수를 더 공부할 필요성을 느꼈습니다.  

우선, 가장 필요하다고 느낀 String 함수부터 정리해보겠습니다.  

## 인덱스 값 활용하기

### 문자열.indexOf(검색문자열)

`indexOf()`는 검색할 문자열 중 **첫번째 인덱스**를 구하는 것 입니다.

```js
const name = "yeonsubaek";

console.log(name.indexOf("yeon")); // 0
console.log(name.indexOf("e")); // 1
console.log(name.indexOf("z")); // -1 (검색 실패)
```

### 문자열.lastIndexOf(검색문자열)

`lastIndexOf()`는 검색할 문자열 중 **마지막 인덱스**를 구하는 것 입니다.

```js
const name = "yeonsubaek";

console.log(name.indexOf("baek")); // 6
console.log(name.indexOf("e")); // 8
```

### 문자열.search(검색정규식)

`search()`는 검색할 정규식의 첫번째 인덱스를 구하는 것 입니다.

```js
const name = "yeonsubaek";

console.log(name.search(/e/)); // 1
console.log(name.search(/z/)); // -1 (검색 실패)
```

### 문자열.charAt(인덱스)

`charAt()`은 해당 인덱스에 해당하는 문자를 구하는 것 입니다.

```js
const name = "yeonsubaek";

console.log(name.charAt(4)); // s
```

### 문자열.charCodeAt(인덱스)

`charCodeAt()`은 해당 인덱스에 해당하는 문자의 유니코드를 구하는 것 입니다.  

```js
const name = "yeonsubaek";

console.log(name.charCodeAt(4)); // 115
```

## 일부 문자열 구하기

### 문자열.slice(시작인덱스, 끝인덱스)

`slice()`는 **시작인덱스 이상 끝인덱스 미만** 문자열을 구하는 것 입니다.

```js
const name = "yeonsubaek";

console.log(name.slice(0, 4)); // yeon
console.log(name.slice(4, 6)); // su
console.log(name.slice(6)); // baek
console.log(name.slice(0, -4)); // yeonsu
```

### 문자열.substring(시작인덱스, 끝인덱스)

`substring()`은 `slice()`와 동일하지만 음수 인덱스를 사용할 수 없습니다.

```js
const name = "yeonsubaek";

console.log(name.slice(0, 4)); // yeon
console.log(name.slice(4, 6)); // su
console.log(name.slice(6)); // baek
console.log(name.slice(0, -4)); // (검색 실패)
```

### 문자열.substr(시작인덱스, 길이)

`substr()`은 시작 인덱스부터 잘라낼 문자열 길이까지의 문자열을 구하는 것 입니다.

```js
const name = "yeonsubaek";

console.log(name.substr(4, 2)); // su
console.log(name.substr(4, 6)); // subaek
```

### 문자열.match(검색문자열이나 정규식)

`match()`는 해당 문자열이나 정규식을 구하는 것 입니다.

```js
const name = "yeonsubaek";

console.log(name.match("su")); // [ 'su', index: 4, input: 'yeonsubaek', groups: undefined ]
console.log(name.match("su").index); // 4
console.log(name.match("su") === "su"); // false: match는 Object이다.
console.log(name.match("su") == "su"); // true
console.log(name.match(/z/)); // null
```

## 문자열 변경하기

### 문자열.replace(바꿀문자열, 바뀔문자열)

`replace()`은 일부 문자열을 변경하는 것 입니다.

```js
const name = "yeonsubaek";

console.log(name.replace("baek", "summer")); // yeonsusummer
```

### 문자열.toUpperCase()

`toUpperCase()`은 소문자를 대문자로 변경하는 것 입니다.

```js
const name = "yeonsubaek";

console.log(name.toUpperCase()); // YEONSUBAEK
```

### 문자열.toLowerCase()

`toLowerCase()`은 대문자를 소문자로 변경하는 것 입니다.

```js
const name = "YEONSUBAEK";

console.log(name.toLowerCase()); // yeonsubaek
```

### 문자열.repeat(횟수)

`repeat()`은 횟수만큼 문자열을 반복하는 것 입니다.

```js
const name = "yeonsubaek";

console.log(name.repeat(3)); // yeonsubaekyeonsubaekyeonsubaek
```

### 문자열.trim()

`trim()`은 문자열의 앞뒤 공백을 제거하는 것 입니다.

```js
const name = " yeonsu ";

console.log(name.trim()); // yeonsu
```

### 문자열.padStart(길이, 추가할문자)

`padStart()`는 **문자열 앞**에 해당 문자로 채우고 해당 문자열의 길이로 바뀌는 것 입니다.

```js
const month = "8";
const day = "25";

console.log(`${month.padStart(2, "0")}월 ${day.padStart(2, "0")}일`); // 08월 25일
console.log(day.padStart(1, "0")); // 25 (제시된 길이가 기존 길이보다 작으면 무시)
```

### 문자열.padEnd(길이, 추가할문자)

`padStart()`는 **문자열 뒤**에 해당 문자로 채우고 해당 문자열의 길이로 바뀌는 것 입니다.

```js
const number = "100.";

console.log(number.padEnd(5, "0")); // 100.0
console.log(number.padEnd(2, "0")); // 100. (제시된 길이가 기존 길이보다 작으면 무시)
```

## 문자열 합치고 분리하기

### 문자열.concat(합칠문자열)

`concat()`은 여러 문자열을 하나로 합치는 것 입니다.

```js
const name = "yeonsubaek";
const name2 = "summer";

console.log(name.concat(name2)); // yeonsubaeksummer
console.log(name.concat(name2, "입니다")); // yeonsubaeksummer입니다
```

### 문자열.split(구분자)

`split()`은 해당 구분자를 기준으로 문자열을 분리하는 것 입니다.

```js
const birth = "2000년 8월 25일";

console.log(birth.split(" ")); // [ '2000년', '8월', '25일' ]
```

## 문자열 판별하기

### 문자열.includes(검색문자열)

`includes()`는 해당 문자열이 존재하는지 판별하는 것 입니다.

```js
const name = "yeonsubaek";

console.log(name.includes("baek")); // true
console.log(name.includes("summer")); // false
```

### 문자열.startsWith(검색문자열)

`startsWith()`는 해당 문자열로 시작되는지 판별하는 것 입니다.

```js
const name = "yeonsubaek";

console.log(name.startsWith("yeon")); // true
console.log(name.startsWith("su")); // false
```

### 문자열.endsWith(검색문자열)

`endsWith()`는 해당 문자열로 끝나는지 판별하는 것 입니다.

```js
const name = "yeonsubaek";

console.log(name.startsWith("baek")); // true
console.log(name.startsWith("su")); // false
```

