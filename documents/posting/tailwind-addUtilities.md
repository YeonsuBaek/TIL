# [Tailwind CSS] 플러그인으로 유틸리티 추가하기

나는 사이드 프로젝트를 진행하면서 tailwind를 사용하게 되었다.

클래스 이름을 고려하지 않고 css파일도 관리할 필요가 없어서 정말 편리한 css 프레임워크라고 생각한다.

하지만 Sass를 사용하던 내가 tailwind를 사용하면서 한 가지 불편함을 겪게 되었다.  
그것은 바로 **모듈화**이다.

Sass에서는 클래스별로 모듈화를 할 수 있지만 tailwind에서는 클래스를 사용하지 않기 때문에 다른 방식을 사용한다.

## 1. Plugins

tailwind는 기본적으로 `w-`, `rounded-`, `text-` 등과 같은 많은 유틸리티를 제공한다. 하지만 스타일링이 복잡해질수록 사용되는 유틸리티가 많아져 코드가 복잡해질 수 있다.

플러그인은 자바스크립트를 사용해 tailwind가 커스텀 스타일을 등록할 수 있도록 하는 것이다.

## 2. 사용 방법

사용하는 과정을 알아보기 위해 다음과 같은 버튼 2개를 예시로 만들어보았다.

![](https://velog.velcdn.com/images/yeonsubaek/post/6835162b-94c9-4991-bfc8-99f026eae145/image.png)

```html
<!-- index.html -->
<body class="p-10">
  <button class="px-4 py-2 text-white bg-blue-600 rounded-lg">BUTTON</button>
  <button class="px-4 py-2 text-white bg-blue-600 rounded-lg">BUTTON</button>
</body>
```

두 버튼은 동일한 스타일을 가지고 있기 때문에 중복된 tailwind의 class를 가지고 있다.

이렇게 반복되는 코드를 간결하게 만들어보자.

```js
// plugins/button.js
const plugin = require('tailwindcss/plugin');

const button = plugin(function ({ addUtilities }) {
  addUtilities({
    '.button': {
      padding: '8px 16px',
      color: 'white',
      background: 'rgb(37, 99, 235)',
      borderRadius: '8px',
    },
  });
});

module.exports = button;
```

최상단에 `tailwindcss/plugin` 함수를 임포트한다.  
`plugin` 함수는 유틸리티를 추가하는 `addUtilities` 함수를 제공한다.

`addUtilities` 함수 안에 **유틸리티명: CSS**와 같은 객체를 넣는다.  
이때 주의할 점은 유틸리티명 앞에 `.`을 붙여 클래스임을 알린다.

CSS 속성값을 입력할 땐 tailwind에서만 특별하게 사용되는 값은 사용할 수 없다.  
예를 들어, `bg-blue-600`는 `background: "rgb(37, 99, 235)"`로 사용해야 한다.

```js
// tailwind.config.js
...
plugins: [require("./plugins/button")],
```

tailwind 설정 파일에 `button`함수를 `plugin`의 속성 값으로 넣어준다.

```html
<!-- index.html -->
<button class="button">BUTTON</button>
<button class="px-4 py-2 text-white bg-blue-600 rounded-lg">BUTTON</button>
```

기존에 있던 클래스들 대신 `button` 하나만 입력해도 같은 결과를 볼 수 있다.

---

참고 링크
https://fe-developers.kakaoent.com/2022/221013-tailwind-and-design-system
