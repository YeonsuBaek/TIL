## Interfaces

타입스크립트에게 오브젝트의 모양을 알려주는 방법은 총 2가지

1. type 사용

```ts
type Team = 'red' | 'blue' | 'yellow';
type Health = 1 | 5 | 10;

type Player = {
  nickname: string;
  team: Team;
  health: Health;
};

const nico: Player = {
  nickname: 'nico',
  // team: 'pink', // Error
  team: 'red',
  // health: 3, // Error
  health: 10,
};
```

2. interface 사용

```ts
type Team = 'red' | 'blue' | 'yellow';
type Health = 1 | 5 | 10;

interface Player {
  nickname: string;
  team: Team;
  health: Health;
}

const nico: Player = {
  nickname: 'nico',
  // team: 'pink', // Error
  team: 'red',
  // health: 3, // Error
  health: 10,
};
```

### 둘의 차이점

- interface는 오직 객체 모양을 타입스크립트에게 설명해주기 위해서만 사용됨
  - 클래스를 다루는 느낌이라 더 쉬울 수 있음
- type은 다양한 목적으로 사용 가능
  - 객체 모양 정해줄 수 있음
  - 특정 값들로만 제한 가능
  - 타입 alias 만들 수 있음

또한 상속 방식이 다름

```ts
// interface 사용
interface User {
  name: string;
}
interface Player extends User {}

const nico: Player = {
  name: 'nico',
};

// type 사용
type User = {
  name: string;
};
type Player = User & {};

const nico: Player = {
  name: 'nico',`
};
```

interface에서도 readonly를 사용할 수 있음

```ts
interface User {
    readonly name: string
}

...

nico.name = 'xxxx' // Error
```

interface의 또 다른 특징은 property 축적 가능
type에서는 불가능

```ts
interface User {
  name: string;
}
interface User {
  lastName: string;
}
interface User {
  health: number;
}

const nico: User = {
  name: 'nico',
  lastName: 'n',
  health: 10,
};
```

추상 클래스를 사용해보자

```ts
abstract class User {
  constructor(protected firstName: string, protected lastName: string) {}
  abstract sayHi(name: string): string;
  abstract fullName(): string;
}

new User() // Error: 추상클래스의 인스턴스 생성 불가능

class Player extends User {
    fullName() {
        return `${this.firstName} ${this.lastName}`
        }
    sayHi(name: string) {
        return `Hello ${name}. My name is ${this.fullName()}
    }
}
```

인터페이스는 컴파일하면 JS로 바뀌지 않고 사라짐

```ts
interface User {
  firstName: string,
  lastName: string,
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
    health: number
}

class Player implements User, Human {
    constructor(
        public firstName: string,
        public lastName: string,
        public health: number
    ) {
       fullName() {
            return `${this.firstName} ${this.lastName}`
            }
        sayHi(name: string) {
            return `Hello ${name}. My name is ${this.fullName()}
        }
    }
}
```

이렇게 하면 추상클래스를 사용하지 않아 JS 파일 사이즈가 줄어듦
여러 Interface 상속도 가능

Interface를 타입으로도 지정 가능

```ts
function makeUser(user: User): User {
  return {
    firstName: 'nico',
    lastName: 'las',
    fullName: () => 'xx',
    sayHi: (name) => 'string',
  };
}
```

인터페이스 내용물만 넣어준다면 `new User()`는 필요 없음
