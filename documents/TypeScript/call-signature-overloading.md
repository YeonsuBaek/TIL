타입스크립트의 Call Signatures와 Overloading에 대해 공부해보았다.

## Call Signatures

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

두 수를 합하는 `add` 함수가 있다.

위 코드는 함수 안에 직접적으로 인수 타입과 반환 타입을 지정하였다.

호출 시그니처(call signature)를 사용하면 함수를 사용하기 전에 먼저 타입을 지정할 수 있다.

```ts
type Add = (a: number, b: number) => number;

function add(a, b): Add {
  return a + b;
}
```

## Overloading

오버로딩(overloading)은 함수가 서로 다른 여러 개의 호출 시그니처를 가지고 있을 때 발생한다.

```ts
type Add = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};
```

매개변수 a와 b가 모두 숫자일 수도 있고, b는 문자열일 수도 있는 `Add` 타입이 있다.

```ts
const add: Add = (a, b) => {
  return a + b;
};
```

b가 숫자라면 반환 가능하지만, b가 문자열이라면 해당 식을 반환할 수 없다.

```ts
const add: Add = (a, b) => {
  if (typeof b === 'string') return a;
  return a + b;
};
```

b가 문자열인 조건문을 추가하여 에러를 피할 수 있다.

### Overloading 예시 1

이러한 오버로드는 외부 패키지나 라이브러리에서 많이 사용된다.

대표적인 예시는 Next.js의 Router 기능이다.

```ts
// 페이지를 추가하는 방식 1
Router.push('/home');

// 페이지를 추가하는 방식 2
Router.push({
  path: '/home',
  state: 1,
});
```

`Router` 내 `push` 함수는 문자열과 객체 값을 모두 받을 수 있다.

즉, 호출 시그니처의 매개변수 타입이 다른 경우이다.

```ts
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === 'string') {
    console.log(config);
  } else {
    console.log(config.path, config.state);
  }
};
```

`push` 함수는 아마 이렇게 타입이 지정되어 있을 것이다.

### Overloading 예시 2

호출 시그니처의 매개변수 개수가 다른 경우는 어떻게 해야할까?

```ts
type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add(1, 2);
add(1, 2, 3);
```

매개변수 a와 b는 필수이고 c는 옵션이다.

매개변수 뒤에 ? 표기를 넣으면 옵션이라는 뜻이다.  
중요한 점은 옵션인 매개변수에는 반드시 타입을 또 작성해야 한다.
