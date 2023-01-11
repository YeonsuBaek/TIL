# [React] Portal 사용하는 이유와 방법

## 1. 사용하는 이유

다음과 같이 모달을 포함한 코드가 있다.

```jsx
// App.js
const App = () => {
  return (
    <div>
      <h1>Title</h1>
      <Modal />
    </div>
  );
};

// Modal.js
const Modal = () => {
  return (
    <>
      <div id="overlay"></div>
      <aside id="modal">
        <h1>modal</h1>
        <p>contents</p>
      </aside>
    </>
  );
};
```

실제 돔으로 렌더링될 때 다음과 같은 결과를 보여준다.

![](https://velog.velcdn.com/images/yeonsubaek/post/5241c6b1-5c18-4e9e-9e4c-1674a7fb801a/image.png)

모달에 스타일링을 제대로 부여한다면 화면 상에서는 문제를 찾아볼 수 없다.

하지만 스크린리더가 렌더링되는 HTML코드를 해석할 때 모달이라는 존재를 인식할 수 없게 된다.  
또한 의미적이나 구조적인 관점에서 모달이 모든 영역 위에 깔린 것인지 알지 못한다.

이 문제는 모달 뿐만 아니라 side drawer, dialog, overlay 등에서 나타날 수 있다.

## 2. 사용 방법

```html
<!-- index.html -->
<body>
  <div id="backdrop-root"></div>
  // 1
  <div id="modal-root"></div>
  // 1
  <div id="root"></div>
  <!-- 중략 -->
</body>
```

**1. root 추가**

배경 오버레이 영역과 모달 영역을 `body` 바로 아래에 이동하기 위해 다음과 같은 위치에 `div` 요소를 추가한다.

```jsx
// Modal.js
import ReactDom from 'react-dom'; // 2

const Backdrop = () => {
  // 3
  return <div id="overlay"></div>;
};

const Modal = () => {
  // 3
  return (
    <aside id="modal">
      <h1>modal</h1>
      <p>contents</p>
    </aside>
  );
};

const Modal = () => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop />,
        document.getElementById('backdrop-root')
      )}{' '}
      // 4
      {ReactDom.createPortal(<Modal />, document.getElementById('modal-root'))}{' '}
      // 4
    </>
  );
};
```

**2. react-dom 삽입**

포털이 정의되어 있는 리액트 돔을 불러온다.

참고로 리액트 돔은 리액트에서 작업하는 로직이나 기능이 돔에서도 호환될 수 있도록 도와주는 역할을 한다.

**3. 각 root에 넣을 노드를 선언**

**4. 포털 사용**

`createPortal` 함수에서 두 가지 매개변수를 취해야 한다.

1. 렌더링되어야 하는 노드  
   주의할 점은 `JSX`에 따라서 `<Backdrop />`과 같이 선언해야 한다.  
   `Backdrop`처럼 이름만 덜렁 선언할 수 없다.

2. 포인터 (렌더링되는 실제 DOM 영역)
   주의할 점은 `DOM API`를 사용하여 `document.getElementById('backdrop-root')`와 같이 선언해야 한다.  
   `backdrop-root`처럼 이름만 선언할 수 없다.

**5. props 전달**

만약 컴포넌트가 `props`를 전달 받는다면

```jsx
// Modal.js
const Backdrop = (props) => {
  return <div id="overlay" onClick={props.onConfirm}></div>;
};

const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onClick={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
    </>
  );
};
```

위에 선언된 방식과 동일하게 작성하면 된다.

![](https://velog.velcdn.com/images/yeonsubaek/post/c39c212e-0961-4fc7-aae8-155470db93f3/image.png)
