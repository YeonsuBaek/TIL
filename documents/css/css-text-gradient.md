# [CSS] 텍스트 그라디언트 & 애니메이션 구현하기

Apple 공식사이트 클론코딩을 하면서 텍스트에 그라데이션과 애니메이션을 구현하는 방법에 대해 공부해보았다.

![](https://velog.velcdn.com/images/yeonsubaek/post/428f61eb-4bc6-4c7e-ae73-871391223299/image.gif)

![](https://velog.velcdn.com/images/yeonsubaek/post/afc18cd4-02ed-41a1-b17e-b473aa9d807c/image.png)

## 1. HTML 작성하기

```html
<body>
  <span>
    shoot, view, edit,<br />and share in ProRes<br />or Dolby Vision HDR
  </span>
</body>
```

![](https://velog.velcdn.com/images/yeonsubaek/post/33b13fda-8852-4d48-80cb-7c9c560249b8/image.png)

`span` 안에 문장이 `br`로 줄바꿈되는 구조이다.

## 2. 그라디언트 적용하기

```css
span {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(
    180deg,
    #ffb6ff,
    #b344ff 10%,
    #ae38ff 33%,
    #ffb6ff 45%,
    #ffe3ff 50%,
    #ffb6ff 66%,
    #b344ff
  );
}
```

![](https://velog.velcdn.com/images/yeonsubaek/post/eaa3948f-2c6d-49a7-959b-c4bbbe493364/image.png)

```css
background-clip: text;
-webkit-background-clip: text;
color: transparent;
```

배경과 텍스트를 반전시키기 위해서 이 코드가 함께 사용되어야 한다.

```css
background-image: linear-gradient(방향, 색상1 비율, 색상2 비율, 색상3 비율...);
```

그라디언트 색상은 `background-image` 안에 `linear-gradient` 함수를 사용한다.

방향은 deg 단위나 turn, 상하좌우로 설정할 수 있다.  
색상은 시작 지점부터 끝 지점까지 차례로 나열할 수 있으며, 비율을 지정하여 차지하는 범위를 조절할 수 있다.

## 3. 그라디언트의 줄바꿈 없애기

```css
span {
  display: block;
  ...;
}
```

![](https://velog.velcdn.com/images/yeonsubaek/post/6aad4c75-ee51-402a-aa59-269eb1c7d645/image.png)

`span`은 inline 태그이기 때문에 줄바꿈 된 문장에 따로 그라디언트가 적용된다.

block으로 바꾸면 통으로 그라디언트가 적용된다.

## 4. 애니메이션 효과 넣기

```css
span {
  ...
  background-size: 100% 300%;
  background-position-y: 0%;
  animation: gradient 2s ease-in-out forwards;
}

@keyframes gradient {
  from {
    background-position-y: 0%;
  }
  to {
    background-position-y: 100%;
  }
}
```

![](https://velog.velcdn.com/images/yeonsubaek/post/e13dedaa-e3bb-4f7e-b776-67473bf57ed6/image.gif)

그라디언트를 세로로 늘리고 위치를 아래에서 위로 올리는 방식이다.

![](https://velog.velcdn.com/images/yeonsubaek/post/c6bfdf89-2c20-4c01-9682-89037aafe4a2/image.gif)

텍스트 뒤에서는 이런 일이 발생하는 것이다.

---
