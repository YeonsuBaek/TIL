## Classes

```ts
class Player {
  constructor(private firstName: string, private lastName: string) {}
}
```

TS를 JS로 컴파일한다면 다음과 같음

```js
class Player {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
```

TS와 JS의 차이점

- 귀찮은 `this`를 작성할 필요 없음
- private, protected, public 사용: 오로지 TS가 보호해주기 위해 사용

```ts
class Player {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickName: string
  ) {}
}

const nico = new Player('nico', 'las', '니꼬');
nico.firstName; // error: 'firstName' is private
nico.nickname; // OK
```

### 추상클래스

추상클래스란 다른 클래스가 상속 받을 수 있는 클래스  
직접 새로운 인스턴스 생성 불가능

```ts
abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickName: string
  ) {}
  private getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {}

const nico = new User('nico', 'las', '니꼬'); // Error
const nico = new Player('nico', 'las', '니꼬');
nico.getFullName();
```

private/protected/public은 property 뿐만 아니라 method에서도 동작

### 추상메소드

추상메소드란 추상클래스를 상속 받는 모든 것들이 구현을 해야하는 메소드

```ts
abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    protedted nickName: string
  ) {}
  abstract getNickName(): void;

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {
  getNickName() {
    console.log(this.nickname); // (private) Error
  }
}

nico.firstName // (protected & private) Error: 클래스 밖이니까
```

property를 private로 만든다면, 클래스를 상속했을지라도 그 property에 접근 불가
즉, private는 User 클래스의 인스턴스나 메소드에서 접근할 수 있으나 추상클래스이기 때문에 인스턴스화 불가능

필드 외부로부터 보호되지만 다른 자식 클래스에서 사용되길 원하면 protected 사용

`getNickName` 함수 앞에 public은 기본적으로 생략되어 있지만, private나 protected를 추가하여 사용 가능

## 해시맵 만들기

```ts
type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(public readonly term: string, public def: string) {}
}

const kimchi = new Word('kimchi', '한국의 음식');

kimchi.term = 'xxxx'; // Error: readonly property

const dict = new Dict();
dict.add(kimchi);
dict.def('kimchi');
```

public 뒤에 readonly를 추가하면 읽기만 가능.  
주로 누군가가 데이터를 덮어쓰는 것을 방지하기 위해 사용.
