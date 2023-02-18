# 월요일

### 1. 오늘은 어디에 도전해보셨나요?

Quick Start 섹션의

Creating and nesting components, Writing markup with JSX, Adding styles, Displaying data, Conditional rendering, Rendering lists를 읽어보았다.

### 2. 새롭게 알게 된 것이 있나요?

- nest? 중첩하다
- 리액트 컴포넌트는 대문자이고, html 요소는 소문자이다. (ex. `<MyButton>`, `<button>`)
- 무조건 닫는 태그가 있어야한다. (ex. `<h1></h1>`, `<br />`)
- embed? 포함하다
- escape back, curly braces? 중괄호
- `if-else` 문은 삼항연산자로 간단하게 표현 가능, `else` 가 필요 없다면 `[&&](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#short-circuit_evaluation)` 으로 표현
- `<li>` 태그는 반드시 key 값을 가져야 한다. 이때 key는 unique한 값이어야 한다.
-

### 3. 어떤 부분이 어렵거나 궁금증이 남았나요?

className에 일부 클래스에 대한 조건문을 부여할 땐 어떻게 해야할까?

- ex. 기본적으로 color가 white이고, isChecked가 true인 경우에 font-weight가 bold인 스타일
  - text-white가 여러 번 선언되는게 맘에 들지 않는다…

```jsx
<p className={isChecked ? 'font-bold text-white' : 'text-white'}>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
</p>
```

# 화요일

### 1. 오늘은 어디에 도전해보셨나요?

Quick Start 섹션의

Responding to events, Updating the screen, Using Hooks, Sharing data between components를 읽어보았다.

Quick Start 섹션 끝!!

### 2. 새롭게 알게 된 것이 있나요?

- `onClick={handleClick}` 과 같은 이벤트를 사용할 때 함수명 뒤에 괄호를 붙이지 않는다. 함수를 호출하는 것이 아닌 전달만 하면 되는 것이다.
  이 부분을 통해 전에 오류난 부분을 해결할 수 있었다. 매개변수를 전달해야 할 경우에는 `() =>` 로 전달만 한다.

  ```jsx
  // before
  <button onClick={handleChangeColor('Gold')}>Gold</button>

  // after
  <button onClick={() => handleChangeColor('Gold')}>Gold</button>
  ```

- useState가 가져오는 두 값의 이름은 `[something, setSomething]` 와 같은 형태로 한다.
- useState에서 동일한 컴포넌트를 여러 번 렌더링하면 각각 고유한 상태를 갖게 된다.
- restrictive? 제한적
- props? 부모 컴포넌트에서 자식 컴포넌트로 전달된 정보
- incrementing? 증가

# 수요일

### 1. 오늘은 어디에 도전해보셨나요?

Tutorial: Tic-Tac-Toe 섹션의

What are you building?, Setup for the tutorial, Overview의 Inspecting the starter code, Building the board, Passing data through props를 읽어보았다.

### 2. 새롭게 알게 된 것이 있나요?

- export하는 방법은 두 가지

```jsx
// 내가 알던 방식
function Square() {
  return <button className="square">X</button>;
}
export default Square();

// 새롭게 알게된 방식
export default function Square() {
  return <button className="square">X</button>;
}
```

- line by line? 한 줄씩
- Psssst? 잠깐만
- be up for? ~에 관심이 있다
- so far? 지금까지

# 목요일

### 1. 오늘은 어디에 도전해보셨나요?

Tutorial: Tic-Tac-Toe 섹션의

Overview의 Making an interactive component, React Developer Tools,

Completing the game의 Lifting state up를 읽어보았다.

### 2. 새롭게 알게 된 것이 있나요?

- useState는 “기억”하는 기능을 하는 함수
- set 함수를 호출하면 클릭할 때마다 다시 렌더링됨
- 매개변수를 포함하는 함수를 onClick 할 경우 주의할 점
  onClick을 할 경우 함수를 호출할 수 없다. 하지만 `handleClick(0)` 은 함수를 호출하는 것이기 때문에 사용자가 클릭하기 전에 이미 실행된다.
  이는 무한루프를 만들기 때문에 오류를 발생시킨다.
  이 경우에는 화살표 함수를 사용해 클릭할 때만 함수가 실행되도록 한다.

```jsx
// X
<Square value={squares[0]} onSquareClick={handleClick(0)} />

// O
<Square value={squares[0]} onSquareClick={() => handleClick(0)} />
```

- starts off? ~로 시작하다
- somehow? 어떻게든
- discourage? 권장하지 않다
- susceptible? 취약하다
