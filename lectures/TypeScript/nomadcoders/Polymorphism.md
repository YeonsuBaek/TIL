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

그렇다면 왜 굳이 Generic을 사용해야 할까?  
any를 사용하면 어차피 에러도 안날텐데?

```ts
const b = superPrint([1, 2, 3, 4]);
b.toUpperCase();
```

any 타입이라면 `toUpperCase` 함수를 실행할 때 에러가 발생하지 않음  
Generic 타입이라면 에러를 발생시킴

제너릭을 두 개 사용하고 싶다면?

```ts
type SuperPrint = <T, M>(a: T[] b: M>) => T

const superPrint: SuperPrint = (a) => a[0]

const a = superPrint([1, 2, 3, 4], "x")
const b = superPrint([1, 2, true, false], [])
```

타입스크립트는 제너릭이 처음 사용되는 지점을 기반으로 이 탑이 무엇인지 알게 됨  
꺽쇠 안에는 제너릭 이름만 지정해주면 됨  
_제너릭 이름은 대문자로 시작하는 어떤 영문이든 가능_

## Conclusions

```ts
function superPrint<V>(a: V[]) {
  return a[0];
}
```

좀 덜 무섭게 생긴 제네릭도 생성 가능

```ts
const a = superPrint<boolean>([1, 2, 3, 4]); //error
```

boolean으로 덮어썼기 때문에 에러 발생  
하지만 이 방식보다는 기존처럼 스스로 타입을 유추하는 것이 더 좋음

제네릭은 타입 생성 뿐만 아니라 타입 확장도 가능

```ts
type Player<E> = {
  name: string;
  extraInfo: E;
};

type NicoExtra = {
  favFood: string;
};

type NicoPlayer = Player<NicoExtra>;

const nico: NicoPlayer = {
  name: 'nico',
  extraInfo: {
    favFood: 'pizza',
  },
};

const lynn: Player<null> = {
    name: "lynn"
    extraInfo: null
}
```

이 외에도 제네릭은 많은 곳에 쓰임  
예를 들어 대부분의 기본적인 타입스크립트의 타입은 제네릭으로 만들어짐

```ts
type A = Array<number>;

let a: A = [1, 2, 3, 4];
```

`Array` 내장 함수는 `interface Array<T>var Array: ...` 로 이루어짐

```ts
function printAllNumbers(arr: Array<number>) {
  //
}

useState<number>();
```
