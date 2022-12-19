# [React] JSX 문법 - 컴포넌트에 여러 요소가 있을 때 하나로 감싸는 이유

```jsx
function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
```

위 코드는 최신 리액트 프로젝트에서 볼 수 있는 코드 형식이다. HTML에 기본적으로 내장되어 있는 `h2`태그와 새롭게 지정한 컴포넌트인 `Expenses`태그, 그리고 이것들을 감싸고 있는 `div`태그를 반환하고 있다.

만약 `h2`와 `Expenses`태그를 감싸지 않고 반환한다면 오류를 발생시킬 것이다. 이렇게 컴포넌트에 여러 요소가 있을 때 하나로 감싸야하는 이유에 대해 알아보자.

이유를 설명하기에 앞서, 최신 버전과 어떤 차이점에 대해 알아볼 필요가 있다.

## `ReactDOM`과 `React`

리액트 프로젝트를 생성할 경우 `package.json`에서 아래와 같은 요소를 가지고 있는 것을 볼 수 있다.

```js
"react": "^18.2.0",
"react-dom": "^18.2.0",
```

`index.js`에서 `ReactDOM`을 삽입하여 활용되는 것을 알 수 있다.

```jsx
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

**최신 리액트 프로젝트**에서 `React`구문은 어디에도 사용되지 않는다.

반면, **오래된 리액트 프로젝트**에서는 모든 컴포넌트에 `React`구문을 사용해야 한다.

```jsx
import React from 'react';

function App() {
  return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, "Let's get started!"),
    React.createElement(Expenses, { item: expenses })
  );
}

export default App;
```

## Element요소를 하나로 감싸는 이유

최신 리액트 프로젝트가 브라우저에 실행되는 과정에서 과거 리액트 프로젝트에서 사용한 방법이 적용된다.

```jsx
return (
  <div>
    <h2>Let's get started!</h2>
    <Expenses item={expenses} />
  </div>
);
```

위와 같은 반환 값이

```jsx
return React.createElement(
  'div',
  {},
  React.createElement('h2', {}, "Let's get started!"),
  React.createElement(Expenses, { item: expenses })
);
```

이렇게 바뀌는 것이다.

반환 값은 오직 하나이기 때문에 같은 선상에 있는 여러 요소들을 묶어주어야 한다. 이때 요소를 배열로 볼 수 없으니 또 다른 요소로 감싸준다.

```jsx
// 잘못된 코드
return [
  React.createElement('h2', {}, "Let's get started!"),
  React.createElement(Expenses, {item: expenses}
]
```

> ### 💡 React.createElement()
>
> #### 형식
>
> React.createElement(태그명, 속성, 내용)
>
> #### 태그명
>
> HTML 내장 태그인 경우 따옴표로 감싸서 선언한다.
> ➡️ 'div', 'h2'
> 새롭게 지정한 컴포넌트인 경우 그대로 선언한다.
> ➡️ Expenses
>
> #### 속성
>
> 속성은 객체 타입으로 선언한다.
> ➡️ {className: "expenses", item: expense}
>
> #### 내용
>
> 정적인 내용을 받아오는 경우 따옴표로 감싸서 선언한다.
> ➡️ "Let's get started!"
> 동적인 내용을 받아오는 경우 그대로 선언한다.
> ➡️ month, year, day
> 요소 안에 여러 요소가 존재하는 경우 나열하여 선언한다.
> ➡️ React.createElement(...), React.createElement(...), ...
