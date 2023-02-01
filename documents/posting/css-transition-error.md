# [CSS] 동시에 진행되는 Transition 타이밍 맞추기

Apple 공식사이트 클론코딩을 하면서 트랜지션과 관련된 문제를 겪게 되었다.

## 1. 문제

처음에 구현한 트랜지션은 다음과 같다.

```jsx
// LocalNav.jsx
...
return (
  <nav
    className={
      toggleLocalbar
        ? 'max-h-52 bg-zinc-900 ease-in-out duration-500 transition-all ...'
        : 'max-h-12 bg-transparent ease-in-out duration-500 delay-300 transition-all ...'
    }
  >
    ...

    <div
      className={
        toggleLocalbar
          ? 'translate-y-0 max-h-full opacity-100 overflow-hidden ease-in-out duration-500 delay-300 ...'
          : 'translate-y-[-30px] max-h-0 opacity-0 overflow-hidden ease-in-out duration-500 ...'
      }
    >
      ...
    </div>
  </nav>
)

```

![](https://velog.velcdn.com/images/yeonsubaek/post/31b4f3f9-767a-4c53-84d3-614504eca9d4/image.gif)

`toggleLocalbar`가 `true`, 즉 열리는 경우에는 `<nav>`의 스타일이 0.5초에 거쳐 서서히 바뀌게 된다.  
동시에 Localbar에 해당하는 `<div>`의 스타일은 0.3초 후에 0.5초에 거쳐 바뀌게 된다.

`toggleLocalbar`가 `false`인 경우에는 `<div>`의 스타일이 0.5초에 거쳐 바뀌고 0.3초 후에 `<nav>`는 0.5초에 거쳐 바뀌게 된다.

하지만 원하던 대로 동작이 되지 않고 닫히는 과정에서 `<nav>`의 트랜지션이 버벅거림을 볼 수 있다.

## 2. 해결

```jsx
// LocalNav.jsx
...
return (
  <nav
    className={
      toggleLocalbar
        ? 'max-h-52 bg-zinc-900 ease-in-out duration-500 transition-all ...'
        : 'max-h-12 bg-transparent ease-in-out duration-300 delay-500 transition-all ...'
    }
  >
    ...

    <div
      className={
        toggleLocalbar
          ? 'translate-y-0 max-h-full opacity-100 overflow-hidden ease-in-out duration-500 delay-300 ...'
          : 'translate-y-[-30px] max-h-0 opacity-0 overflow-hidden ease-in-out duration-500 delay-300 ...'
      }
    >
      ...
    </div>
  </nav>
)

```

![](https://velog.velcdn.com/images/yeonsubaek/post/c54b947b-403d-4614-ad7b-7b22607a6a04/image.gif)

트랜지션의 delay와 duration의 타이밍을 수정하였다.

![](https://velog.velcdn.com/images/yeonsubaek/post/f83eec29-aaaf-4384-bb80-0640b74a78af/image.png)

트랜지션의 진행사항을 그래프로 표현해보았다.

먼저 끝낸 트랜지션에 맞춰 아직 진행 중인 다른 트랜지션도 강제로 종료하게 된다.  
따라서 기존 트랜지션은 `<div>`의 duration인 0.5초에 끝나게 되고, `<nav>`는 0.2초만 수행되는 것이다.

트랜지션이 끝까지 수행되기 위해서 `<nav>`와 `<div>`의 종료시간을 같도록 해야한다.  
차이나는 시간만큼 `<div>`에 delay를 추가하면 해결할 수 있다.

## 3. 또 다른 방법

```jsx
// LocalNav.jsx
...
return (
  <nav
    className={
      toggleLocalbar
        ? 'h-52 bg-zinc-900 ease-in-out duration-500 transition-all ...'
        : 'h-12 bg-transparent ease-in-out duration-500 delay-300 transition-all ...'
    }
  >
    ...

    <div
      className={
        toggleLocalbar
          ? 'translate-y-0 h-full opacity-100 overflow-hidden ease-in-out duration-500 delay-300 ...'
          : 'translate-y-[-30px] h-0 opacity-0 overflow-hidden ease-in-out duration-500 ...'
      }
    >
      ...
    </div>
  </nav>
)

```

![](https://velog.velcdn.com/images/yeonsubaek/post/7bbc1083-2671-4b13-b9d2-b4a0fed625c8/image.gif)

max-height로 설정했던 높이를 height로 수정하였다.

height에 transition 효과를 설정할 때 주의할 점은 auto 속성 값을 사용할 수 없다.
명확한 수치와 full(100%)을 주었기 때문에 부드럽게 동작되었다.

왜 height를 사용할 때는 트랜지션 종료시간에 영향을 받지 않는지는 아직 잘 모르겠다.🥶

---

에러나는 부분을 찝어주신 Romuru님 감사합니다😁
