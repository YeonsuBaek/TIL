# [우아한테크코스 5기] 프리코스 1주차 미션 회고 (프론트엔드)

제가 우아한테크코스 5기 프론트엔드 분야에 지원하게 되었다는 소식입니다.  

⬇️⬇️⬇️ 우아한테크코스에 대한 설명은 아래 링크에서 보실 수 있습니다.

https://woowacourse.github.io/

5기 모집하기 전에는 이런 부트캠프가 있는 줄 몰랐는데 접수 마감 3일 전에 우연히 알게 되어 부리나케 접수했습니다.  
합격하면 정말 기쁘겠지만 급하게 참여하게 되어 합격보다는 프리코스 과정을 통해 성장을 하는 것에 초점을 맞추고자 합니다.  

프론트엔드 분야는 3기부터 시작되었고, 4기까지는 프리코스 전에 온라인 코딩테스트를 진행했다고 합니다.  
5기에서는 많은 점이 바뀌었습니다.
우선, 안드로이드 앱 분야가 신설되었습니다. 뽑는 인원은 가장 적지만 안드로이드 공부하던 분들께는 정말 좋은 소식이겠죠.
그리고 온라인 코딩테스트가 폐지되고 프리코스가 3주에서 4주로 연장되었습니다. 누구나 지원하면 프리코스를 통해 성장할 수 있는 기회가 주어지게 됩니다. 사실 저도 이 부분 때문에 지원하게 되었죠😉  

지원서를 작성하고 프리코스 시작일까지 3일 정도 시간이 있었습니다. 사실 그 짧은 시간동안 마음이 좀 복잡했어요. 늘 혼자서 공부하다가 새로운 경험을 할 생각에 설레기도 했지만 잘 해낼 수 있을지 걱정이 많이 되었습니다. 프리코스 시작일에 중간고사도 겹쳐서 체력적으로 정신적으로도 부담스러웠습니다. 하굣길에 OT도 열심히 듣고 미션 공지 메일도 몇 번이고 펼쳐보고...

집에 와서 문제를 꺼내봤는데, 이거 왜 작년이랑 미션 내용이 다르죠? 한 주가 더 늘기도 하고 지원자 모두가 참여하다보니 쉬운 문제로 워밍업을 시켜주는 느낌이었습니다. 2주차부터는 작년 미션과 동일할 수도 있겠죠?

---

## 프리코스 시작 전

미션을 진행하기 전에 환경을 셋팅해야합니다.  

#### github로 과제를 제출해야하기 때문에 프로젝트 fork, 파일을 clone, branch 생성 등을 해야합니다.  
자세한 설명은 우테코 깃허브(https://github.com/woowacourse/woowacourse-docs/tree/main/precourse)에 있습니다.  
저는 개인적으로 공부하거나 공모전을 위한 팀플을 했을 때 github를 적극 활용하였기 때문에 git을 사용하는 것은 어렵지 않았습니다.  

#### 기능 구현을 테스트하기 위해서 Node.js 버전 14를 설치해야 합니다.
제 컴퓨터에는 이미 버전 14로 깔려있어서 이 과정은 넘어갔습니다. ~~하마터면 귀찮은 작업을 할 뻔~~  
![](https://velog.velcdn.com/images/yeonsubaek/post/bec8913b-450c-4b9c-91db-3f45002dd94e/image.png)  
이미 설치된 Node.js의 버전을 알고 싶다면 `node -v`를 입력하시면 됩니다.  

`npm install`을 통해 설치를 하고 `npm test`를 하면 코드가 맞게 실행되는지 테스트 할 수 있습니다.  
![](https://velog.velcdn.com/images/yeonsubaek/post/e62fb8a9-c66b-4f21-8a6c-167d18d336d3/image.png)  
이렇게 문제를 풀고 맞으면 ✅ 표시가 됩니다.  

---

## 본격적인 프리코스 시작

1주차 미션은 **온보딩**입니다.  
단어가 생소해서 제가 검색해보았는데, 온보딩은 _새로 입사하시는 분들이 회사에 최대한 빨리 적응하고 기여할 수 있게 돕기 위한 것_ 이라고 합니다.  

총 7문제로 구성되어있으며 **기능 요구 사항, 프로그래밍 요구 사항, 과제 진행 요구 사항**을 지켜서 문제를 풀면 됩니다.


### 1일차 (10월 26일)

원래 프리코스 첫 날에는 환경 셋팅만 하려고 했으나 셋팅하는데 얼마 걸리지 않아서 바로 미션을 시작했습니다.  

> #### PROBLEM 1
>
> ![](https://velog.velcdn.com/images/yeonsubaek/post/f7444282-040f-42fb-bef5-390ac03fa4f3/image.png)  


**1. 기능 구현 목록을 작성해보다.**  
혼자서 프로젝트를 진행할 때는 머릿 속에서 떠오르는 기능대로 코드를 작성하였습니다. 하지만 이번 프로젝트를 통해서 기능 구현 목록을 작성하는 시간을 갖게 되었습니다. 필요한 기능을 나열해보고 코드를 작성하는 순서로 정렬하여 기능을 완성할 때마다 체크 표시를 하였습니다. 이렇게 미리 정리를 해놓으니 필요한 기능을 잊지 않고 모두 작성을 하게 되었습니다. 또한 목록을 하나씩 해치울 때마다 성취감이 상승해 진행 과정에 재미가 더해졌습니다. 목록 순서를 따라야 한다는 강박이 생기면서 다음 단계를 위해 효율적으로 코드를 작성하게 되었습니다. 이 과정이 오래 걸리고 힘들었지만 나중에 리펙토링 하는 시간이 줄어들어 결과적으론 더 빠르게 완성할 수 있었습니다. 앞으로 어떤 프로젝트를 하더라도 기능 구현 목록을 작성하는 습관을 들이고 싶습니다.

```
### 기능 구현 목록

| no. | list                                                   | ✅  |
| --- | ------------------------------------------------------ | --- |
| 1   | 페이지 번호의 각 자리 숫자를 더하거나 곱한다.          | ✅  |
| 2   | 각 페이지별로 두 숫자 중 가장 큰 것을 구한다.          | ✅  |
| 3   | 위의 숫자 중 가장 큰 수를 본인의 점수로 한다.          | ✅  |
| 4   | 점수를 비교해 가장 높은 사람에 따라 결과를 달리 한다.  | ✅  |
| 5   | 책의 페이지 분량을 1쪽에서 400쪽으로 한정한다.         | ✅  |
| 6   | 책의 시작면이나 마지막면이 나오지 않도록 한다.         | ✅  |
| 7   | 입력 받는 배열의 개수는 2로 한정한다.                  | ✅  |
| 8   | 왼쪽 페이지가 홀수에 오도록 한다.                      | ✅  |
| 9   | 오른쪽 페이지는 왼쪽 페이지의 다음 숫자가 오도록 한다. | ✅  |

```

**2. 기능별로 함수를 분리해보다.**  
백준 알고리즘 문제를 풀었을 때 나의 문제점은 모든 기능을 한 가지 함수에 몰아 넣었다는 점입니다. 사실 쉬운 문제만 풀어서 함수 1개만 사용해도 코드가 길지 않아서 가독성이 나쁘지 않았던 것 같습니다. 하지만 프리코스에서 제시하는 문제는 기능과 조건이 많기 때문에 반드시 여러 함수로 쪼개서 관리를 할 필요가 있었습니다. 함수를 구분하는 것이 익숙하지 않아서 우선 기능 구현 목록에 따라 함수를 생성하였습니다. 그 안에서 반복하는 코드가 있다면 또 함수를 생성하고, 에러 메세지도 제한 사항에 따라 함수들을 생성하고 그것들을 한 번에 관리하는 함수를 만들었습니다.

```js
function getScore(person) {
 // 코드 생략
}

function calculatePageNumber(page) {
  // 코드 생략
}

function compareNumber(values) {
  // 코드 생략
}

function isError(person) {
  // 코드 생략
}

function isPageError(person) {
  // 코드 생략
}

function countNumberOfPages(person) {
  // 코드 생략
}

function isLeftPageNumber(person) {
  // 코드 생략
}

function orderPageNumber(person) {
  // 코드 생략
}

function getResult(score, pobi, crong) {
  // 코드 생략
}
```


### 2일차 (10월 27일)

> #### PROBLEM 2
>
> ![](https://velog.velcdn.com/images/yeonsubaek/post/c6937675-307e-4fb8-9b69-6d8509196647/image.png)
>
> #### PROBLEM 3
>
> ![](https://velog.velcdn.com/images/yeonsubaek/post/f074ad39-ea01-4e27-bbad-8afd69ce40b2/image.png)

**3. 에러를 먼저 판별하다.**  
1번 문제를 풀었을 땐 기능 구현 함수를 작동시키고 결과를 완성하기 전에 에러를 판별하였습니다. 하지만 에러가 있는 경우에 기능 구현 함수를 사용할 필요가 없다고 판단하여 2번 문제부터는 에러를 판별하는 함수를 가장 먼저 호출시켰습니다. 

```js
function problem2(cryptogram) {
  const checkedErrors = checkErrors(cryptogram);

  if (checkedErrors === "Not Error") {
    const result = removeDuplicates(cryptogram);

    return result;
  }

  return checkedErrors;
}
```

또한 `if (checkedErrors !== "Not Error")`와 같이 이중부정을 사용하면 헷갈릴 수 있으니 `if (checkedErrors === "Not Error")`와 같이 조건문을 작성하였습니다.  

**4. 상수를 적극적으로 활용하다.**  
문제에서 제시된 고정된 값들을 상수로 선언하여 활용해보았습니다. 무작정 숫자나 문자, 문자열을 사용하면 나중에 코드 리뷰를 할 때 어떤 의미를 가지고 있는지 판단하기 어려울 수 있습니다. 상수를 사용하면 의미를 명확하게 전달할 수 있습니다.

```js
const MINIMUM_LENGTH = 1;
const MAXIMUM_LENGTH = 1000;
const MINIMUM_ALPHABET = "a";
const MAXIMUM_ALPHABET = "z";
```
상수를 선언할 때는 scream snake case(스크림 스네이크 케이스)를 활용합니다.  
이 외에도 많은 네이밍 컨벤션은 여기(https://velog.io/@yeonsubaek/Naming-Convention%EB%84%A4%EC%9D%B4%EB%B0%8D-%EC%BB%A8%EB%B2%A4%EC%85%98-%EC%A2%85%EB%A5%98%EC%99%80-%EC%98%88%EC%8B%9C)서 볼 수 있습니다.

**5. includes()를 활용하다.**  
`includes()`는 문자열이나 배열에서 포함되어있는지 판단하는 함수입니다. 이 함수의 구조는 `${문자열이나 배열}.includes(${판별할 문자열이나 element})` 로 이루어져 있습니다.

```js
const singleNumber = currentString[currentStringIndex];

if (
  singleNumber.includes("3") ||
  singleNumber.includes("6") ||
  singleNumber.includes("9")
) {
  countClap++;
}
```
숫자에 3, 6, 9 중 하나가 포함되어 있는지 판단할 때 사용하였습니다. 사실 `inclues()`와 `||`를 같이 사용하는 것이 최선인지는 모르겠습니다. 제가 모르는 더 간략한 함수가 있을 수도...

### 3일차 (10월 28일)

> #### PROBLEM 4
>
> ![](https://velog.velcdn.com/images/yeonsubaek/post/bf0be59d-86cb-4d9e-ad63-485dcd6fc60e/image.png)
>
> #### PROBLEM 5
>
> ![](https://velog.velcdn.com/images/yeonsubaek/post/cac81aeb-6a9d-45f7-bbb1-a54db5cefd0e/image.png)

**6. charCodeAt()과 String.fromCharCode()을 활용하다.**
C++로 알고리즘 문제를 풀었을 땐 `index = s[i] - 'a';` 이렇게 문자를 빼면 자동으로 아스키코드 값으로 인식되어 연산이 되었습니다. 하지만 자바스크립트에서는 이렇게 사용했을 때 오류가 발생합니다. 따라서 알파벳을 아스키코드 값으로 바꾸고 다시 알파벳으로 바꾸는 과정이 필요합니다. `charCodeAt(index)`는 문자열 중 index 위치에 해당하는 문자의 아스키코드 값을 출력합니다. `String.fromCharCode(숫자)`는 숫자를 알파벳으로 바꿔 출력합니다.

```js
  const FIRST_ALPHABET = A; // 65
  const LAST_ALPHABET = Z; // 90 
  const FIRST_ALPHABET_LOWER = a; // 97
  const LAST_ALPHABET_LOWER = z; // 122

  const FIRST_ALPHABET = String.fromCharCode(65); // 'A'
  const LAST_ALPHABET = String.fromCharCode(90); // 'Z'
  const FIRST_ALPHABET_LOWER = String.fromCharCode(97); // 'a'
  const LAST_ALPHABET_LOWER = String.fromCharCode(122); // 'z'

```

**7. fill()을 활용하다.**  
C++에선 `s[100] = { 0. };` 와 같이 배열 내 element를 0으로 초기화하였습니다. 자바스크립트에서는 `fill()` 을 사용할 수 있습니다. 

```js
const BILL_UNIT_LIST = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
const listLength = BILL_UNIT_LIST.length;
let billCountList = new Array(listLength).fill(0); // [0, 0, 0, 0, 0, 0, 0, 0]
```
지폐 단위별 개수가 담길 배열을 0으로 초기화하였습니다. 그 후에 개수를 0에서 더하는 식으로 처리하였습니다.

**8. Math.floor()를 활용해보다.**  

```js
const theNumbeOfBill = Math.floor(currentMoney / bill);
```

### 4일차 (10월 29일)

> #### PROBLEM 6
>
> ![](https://velog.velcdn.com/images/yeonsubaek/post/fd65cae8-2215-4976-b714-00a369145427/image.png)

**9. 삽입정렬을 활용하다.**  
오름차순을 위해 for문으로 코드를 짜다보니 비효율적이라는 생각이 들었을 때, 자료구조 강의에서 배운 삽입정렬이 생각났습니다. C언어로는 다음과 같이 작성할 수 있습니다.

```c
void insertion_sort(int list[], int n) {
  int i, j, key;
  
  for (i = 1; i < n; i++) {
    key = list[i];
    
    for (j = i - 1; j >= 0 && list[j] > key; j--) {
      list[j + 1] = list[j];
    }
    
    list[j + 1] = key;
  }
}
```

흔히들 프론트엔드는 자료구조, 알고리즘 공부할 필요가 없다고 하신게 생각이 났습니다. 하지만 제가 자료구조를 활용해보고 깨달았습니다. 프론트든 백이든 자료구조와 알고리즘은 기본이구나! 앞으로도 자료구조와 알고리즘 공부를 소홀히 하지 말아야겠다고 생각했습니다.

```js
function arrangeInAscendingOrder(list) {
  const theNumberOfEmail = list.length;

  let comparedIndex, standardIndex, standard;
  for (standardIndex = 1; standardIndex < theNumberOfEmail; standardIndex++) {
    standard = list[standardIndex];

    for (
      comparedIndex = standardIndex - 1;
      comparedIndex >= 0 && list[comparedIndex] > standard;
      comparedIndex--
    ) {
      list[comparedIndex + 1] = list[comparedIndex];
    }

    list[comparedIndex + 1] = standard;
  }

  const deduplicatedList = removeDuplicatedEmail(list);

  return deduplicatedList;
}
```

저는 삽입정렬을 이메일에 해당하는 부분의 문자열을 오름차순으로 정렬할 때 활용해보았습니다.


### 5-6일차 (10월 30일-31일)

> #### PROBLEM 7
>
> ![](https://velog.velcdn.com/images/yeonsubaek/post/c48e26e1-d58e-40cc-85be-63b4dd16bd53/image.png)

**10. forEach()를 활용하다.**  
그동안 `for()` 반복문만을 주구장창 사용하였습니다. 하지만 for문은 코드가 길어져 가독성이 떨어지는 경향이 있습니다. 좀 더 바람직한 함수가 없나 찾아본 결과, `forEach()`라는 함수를 발견하게 되었습니다. 다음과 같이 활용할 수 있습니다.

```js
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));
// 'a'
// 'b'
// 'c'
```

저는 for문이 사용되던 곳에 모두 forEach로 바꿔보았습니다.

```js
// 변경 전
for (let visitor = 0; visitor < userVisitors.length; vistor++) {
   if (Object.values(friendsList).includes(userVisitors[visitor]) === false) {
    addInformationIntoScoreTable(scoreTable, userVisitors[visitor]);
  }
};
```

```js
// 변경 후
userVisitors.forEach((visitor) => {
  if (Object.values(friendsList).includes(visitor) === false) {
    addInformationIntoScoreTable(scoreTable, visitor);
  }
});
```
개인 프로젝트를 했을 때 forEach문을 활용해 여러 버튼의 클릭 이벤트를 만든 적이 있습니다. 그때는 함수의 동작 방법은 이해하지 못하고 예제를 복붙해서 사용했었는데, 이번에 다시 사용하게 되면서 동작 과정을 이해하게 되었습니다.

**11. sort()를 활용하다.**  
6번 문제에서는 삽입정렬을 활용해 문자열의 오름차순대로 정렬하였습니다. 7번 문제에서는 문자열이 아닌 객체의 속성값에 따라 정렬을 해야하기 때문에 삽입정렬을 활용하기 번거롭다고 판단하였습니다. 대신 `sort()` 함수를 사용하였습니다.

```js
const numbers = [3, 1, 4, 1, 5];
const sorted = numbers.sort((a, b) => a - b); // [1, 1, 3, 4, 5]
const reverseSorted = numbers.sort((a, b) => b - a); // [5, 4, 3, 1, 1]
```
`a - b` 일 땐 오름차순으로 정렬이 되고, `b - a` 일 때는 내림차순으로 정렬이 됩니다.

```js
function arrangeInAscendingOrder(table) {
  const result = table.sort(
    (firstInformation, secondInformation) =>
      secondInformation.score - firstInformation.score
  );
  const topFiveList = result.splice(0, 5);
  const nameList = new Array();

  topFiveList.forEach((topItem) => {
    nameList.push(topItem.name);
  });

  return nameList;
}
```
점수에 따라 Object를 오름차순으로 정렬하고 Object의 name만 다시 배열에 넣어 결과를 출력하였습니다.

---

11가지 외에도 많은 것들을 배운 시간을 가졌습니다. 우테코에 지원하길 정말 잘한 것 같아요😆 1주차에 배운 내용을 앞으로 있을 미션에도 잘 적용해보도록 하겠습니다.  

그리고 자바스크립트 내장함수를 더 공부해야겠어요... 처참한 내 코드를 두고 볼 수 없다!

![](https://velog.velcdn.com/images/yeonsubaek/post/e4f5a3bf-cfc3-48dc-819b-8bb0d06359e9/image.png)


![](https://velog.velcdn.com/images/yeonsubaek/post/98934b97-3340-4fca-831b-ffd90142abc1/image.png)
