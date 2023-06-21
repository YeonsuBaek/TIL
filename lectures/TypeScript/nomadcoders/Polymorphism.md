## Polymorphism

- Poly: 많은, 다수
- morphos: 형태, 구조
- 여러 가지 다른 구조

타입과 상관 없이 모든 배열을 순회하는 함수를 만듦

```ts
type SuperPrint = {
  (arr: number[]): void;
  (arr: boolean[]): void;
  (arr: string[]): void;
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint([1, 2, true, false, 'hello']); // error
```

number, boolean, string 등 모든 타입을 선언해야 할 필요가 있나?

concrete type은 버려!  
generic type만 있으면 가능함

```ts
type SuperPrint = {
  (arr: (number | boolean | string)[]): void;
};
```

위와 같은 방법도 모든 경우의 수를 다 입력해야 하기 때문에 비추

generic은 타입의 **placeholder** 같은 것  
타입스크립트가 그 타입을 유추함

왜 generic을 사용해야할까?  
call signature를 작성하는데 concrete type을 알 수 없을 때가 있음

```ts
type SuperPrint = {
  <TypePlaceholder>(arr: TypePlaceholder[]): void;
};
```

꺽쇠 안에 변수(?)를 넣고 `arr` 타입을 해당 변수로 지정

반환 타입에도 지정하려면..

```ts
type SupurPrint = {
  <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder;
};

const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, true, false, 'hello']);
```
