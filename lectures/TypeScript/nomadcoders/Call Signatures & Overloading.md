## Call Signatures

- 함수 위에 마우스를 올렸을 때 보게 되는 것
- 함수의 인자 타입과 반환 타입 알려줌
- 함수가 어떻게 구현되는지 알려주는 것 X

## Overloading

- 함수가 서로 다른 여러 개의 Call Signatures를 가지고 있을 때 발생
- 외부 패키지나 라이브러리 사용 시 많이 사용됨

```ts
type Add = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const add: Add = (a, b) => {
  a + b;
}; // error

const add: Add = (a, b) => {
  if (typeof b === 'string') return a;
  return a + b;
};
```

Overloading의 예시는 Next.js의 Router 기능에서 살펴볼 수 있음

```ts
Router.push({
  path: '/home',
  state: 1,
});

Router.push('/home');
```

`push` 함수가 string과 object 값을 모두 받을 수 있음

위 함수는 아마 이렇게 타입이 지정되어 있을 거임

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

만약 매개변수 개수가 다른 Call Signatures라면?

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
