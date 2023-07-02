# DOM API의 기본

DOM: Document Object Model

웹이라는 Document를 Object로써 다루는 API

프레임워크가 DOM API를 알지 못하더라도 사용할 수 있도록 이루어져 있지만, 프론트엔드 개발자라면 알아야한다!

기본 DOM API로 어떻게 웹을 구성할 수 있을지, 어떤 어려운 점이 있을지.. 알아보자^^

## innerHTML

## createElement

## appendChild

> 자바스크립트는 언어인데, 자바스크립트를 사용하는 환경은 다양할 수 있음.  
> 브라우저가 자바스크립트로 쓸 수 있는 몇몇 API를 제공한다.
> 터미널(Node)만이 제공하는 API가 있다.
>
> [mozilla 문서와 친해지자](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore)

### querySelectorAll

`console.log(document.querySelectorAll('p'));`의 결과는 Node List이다.
인덱스로 반환해도, length로 길이를 반환해도 에러가 뜨지 않는다.
하지만 이것은 배열이 아니다!!
sort(), at()과 같은 배열 내장 함수가 적용되지 않는다.

#### 그럼 이걸 배열로 바꿔보자!

`Array.from(document.querySelectorAll('p'))`  
이렇게 하면 완성 :)

## addEventListener

### event bubbling

element 하나에 event가 잡혀있다면 그것 실행, 그 부모의 event를, 그 부모의 event를.. 실행

#### 부모 event를 실행하기 싫다면?

`event.stopPropagation()`

### data- 속성

태그 내에 type, class와 같은 속성은 브라우저에서 제공함.

data- 속성은 data- 뒤에 맘대로 붙여서 사용할 수 있음.

## 질문

1. 클래스명

`.total_count` 와 `.cart-count` 의 차이
