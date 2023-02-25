# 일요일

### 1. 오늘 도전한 분량

Tic-Tac-Toe의

~ \***\*Showing the past moves\*\***

### 2. 새롭게 알게 된 것

- 배열의 불변성
  - 기존 배열을 변경하지 않고 새로운 배열로 복사하고 그 배열을 변경한다
  - `slice()` 함수를 사용해 복사한다
  - 모든 자식 컴포넌트는 부모 컴포넌트의 상태가 변경되면 자동으로 리렌더링된다. (변경의 영향을 받지 않은 자식 컴포넌트 포함)
  - 하지만 불변성을 이용하면 영향을 받지 않는 부분은 리렌더링되지 않는다
  - [컴포넌트를 다시 렌더링할 시점을 선택하는 방법](https://beta.reactjs.org/reference/react/memo)
- 스프레드 함수
  - 배열 내 모든 항목을 열거한다
  ```jsx
  const history = [
    [null, null, null],
    ['X', null, null],
  ];
  const nextSquares = ['X', null, 'O'];
  console.log([...history, nextSquares]);
  // [[null,null,null], ["X",null,null], ["X",null,"O"]]
  ```
  - 2차원 배열을 1차원 배열과 합칠 수 있다

### 3. 영단어

- immutability? 불변성
- approach? 접근 방식
- mutate? 변화하다
- undo and redo? 실행 취소 및 재실행
- stick to? ~을 굳게 지키다
- enumerate? 열거하다

# 월요일

### 1. 오늘 도전한 분량

Thinking in React 끝!

### 2. 새롭게 알게 된 것

- UI를 컴포넌트 계층 구조로 나누기
  - 프로그래밍 - **단일 책임 원칙**을 사용해 컴포넌트 하나 당 한 가지 일만 수행하도록 한다. 만약 컴포넌트가 늘어나면 더 작은 하위 컴포넌트로 분해한다.
  - CSS - 클래스 선택자를 만들 때 무엇을 만들지 생각한다.
  - 디자인 - 디자인의 레이어 구성을 생각한다.
- State가 될 수 없는 것은?
  - 시간이 지나도 변하지 않는 것
  - props를 통해 부모로부터 전달된 것
  - 컴포넌트의 기존 state나 props를 기반으로 계산할 수 있는 것
- Props VS State
  - Props - 함수에 인수를 전달하는 것과 같다. 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달한다.
  - State - 컴포넌트의 메모리와 같다. 컴포넌트가 일부 정보를 추적하고 이벤트를 일으켜 값을 변경할 수 있다.

### 3. 영단어

- redundant? 중복
- hierarchy? 계층 구조
- split up? 분할하다
- be decomposed into? ~로 분해되다
- granular? 세분화
- straightforward approach? 간단한 접근 방식
- representation? 표현
- underlying? 기본/기초/기반
- \***\*Identify? 파악하다\*\***
- solely? 단독으로

### 4. 반가운 것

- 애플 클론코딩을 하면서 자식 컴포넌트에서 부모 컴포넌트로 state를 전달하는 방법을 구글링해서 찾아보았는데 그 내용이 문서에도 그대로 설명되어 있었다.

# 화요일

### 1. 오늘 도전한 분량

~ Your First Component

### 2. 새롭게 알게 된 것

- [html ↔ jsx 변환기](https://transform.tools/html-to-jsx)
- props.children

  - props.children을 사용해 자식 컴포넌트를 가져올 수 있다.
  - `Card` 와 같이 특정 형태를 가진 반복되는 컴포넌트를 따로 관리할 수 있다.

  ```jsx
  import { getImageUrl } from './utils.js';

  export default function Profile() {
    return (
      <Card>
        <Avatar
          size={100}
          person={{
            name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2',
          }}
        />
      </Card>
    );
  }

  function Avatar({ person, size }) {
    return (
      <img
        className='avatar'
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    );
  }

  function Card({ children }) {
    return <div className='card'>{children}</div>;
  }
  ```

- 컴포넌트 순수성 유지

  - 이미 존재하는 값을 변경하지 않는다.
  - 동일한 입력이 주어지면 동일한 결과를 반환해야 한다.

  ```jsx
  // Bad
  // 이미 존재하는 값을 변경하였기 때문에 동일한 컴포넌트를 불러도 다른 결과를 반환한다.
  // 또한 1, 2, 3이 아닌 2, 4, 6과 같은 의도와 다른 결과를 도출한다.
  let guest = 0;

  function Cup() {
    // Bad: changing a preexisting variable!
    guest = guest + 1;
    return <h2>Tea cup for guest #{guest}</h2>;
  }

  export default function TeaSet() {
    return (
      <>
        <Cup />
        <Cup />
        <Cup />
      </>
    );
  }

  // Good
  // props로 값을 전달해 의도와 같은 결과를 도출한다.
  function Cup({ guest }) {
    return <h2>Tea cup for guest #{guest}</h2>;
  }

  export default function TeaSet() {
    return (
      <>
        <Cup guest={1} />
        <Cup guest={2} />
        <Cup guest={3} />
      </>
    );
  }
  ```

- UI 오픈소스 커뮤니티
  - [Chakra UI](https://chakra-ui.com/)
  - [Material UI](https://mui.com/core/)
- 컴포넌트 안에 다른 컴포넌트 렌더링하기

  - 다만, 컴포넌트 안에 다른 컴포넌트를 정의할 순 없다.

  ```jsx
  // Bad
  export default function Gallery() {
    // 🔴 Never define a component inside another component!
    function Profile() {
      // ...
    }
    // ...
  }

  // Good
  export default function Gallery() {
    // ...
  }

  // ✅ Declare components at the top level
  function Profile() {
    // ...
  }
  ```

### 3. 영단어

- nestable? 중첩할 수 있는
- configure? 구성
- sprinkle? 뿌리다 ~~(뿌링클🍗)~~
- reference? 참조하다
- baffling? 당황스러운
- abbreviated? 약어
- Under the hood? 내부적으로
- nice-to-have? 유용한 기능
- parentheses? 괄호
- snippet? 코드 조각
- handy? 편리한

### 4. 반가운 것

### 5. 궁금한 점

- 다음 코드에서 왜 guest가 1, 2, 3이 아닌 2, 4, 6이 도출되는 걸까?

# 수요일

### 1. 오늘 도전한 분량

Importing and Exporting Components

### 2. 새롭게 알게 된 것

- Default vs named exports
  - default - 파일에서 하나의 컴포넌트만 내보내는 경우
  - named - 여러 컴포넌트와 값을 내보내는 경우
  - 혼동을 위해 한 프로젝트에서 둘 중 하나만 사용하도록 한다.

### 3. 영단어

- landing screen? 시작 화면
- What if~? ~하려면 어떻게 해야할까?
- encounter? 발생하다
- dictate? 결정하다
- regardless of? ~에 관계 없이
- confusion? 혼동
