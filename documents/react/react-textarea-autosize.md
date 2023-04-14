# textarea 줄바꿈에 따라 높이 조절하기 (feat. react-textarea-autosize)

[Correct Sentences](https://github.com/YeonsuBaek/learning-english)를 구현하면서 한 가지 어려운 점을 겪게 되었다.

![](https://velog.velcdn.com/images/yeonsubaek/post/0ed304b1-9e52-4a58-b226-7ce048a75fe7/image.gif)

`textarea`에 값을 입력할 때 줄바꿈을 하면 사이즈가 늘어나지 않고 스크롤이 된다는 것이다.  
내가 원하는 것은 줄바꿈을 하면 그에 따라 `textarea` 의 높이도 변하는 것이다.

css를 사용해 높이는 바꾸는 방법은 다양하지만 나는 더 간단한 방법을 찾게 되었다.

## react-textarea-autosize

바로, `react-textarea-autosize` 라이브러리를 사용하는 것이다.

### step 1. 라이브러리 설치하기

```
npm install react-textarea-autosize
```

프로젝트가 있는 위치에 라이브러리를 설치한다.

### step 2. 라이브러리 import하기

```jsx
import TextareaAutosize from 'react-textarea-autosize';
```

`textarea` 를 사용하고자 하는 파일 상단에 라이브러리를 넣는다.

### step 3. textarea 대신 TextareaAutosize

```jsx
<TextareaAutosize></TextareaAutosize>
```

`<textarea>` 태그 대신 `<TextareaAutosize>` 태그를 사용한다.

### step 4. 원하는 props 사용하기

| prop                | type     | description                                                                                                                                                                         |
| ------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `maxRows`           | number   | textarea row가 커질 수 있는 가장 큰 수                                                                                                                                              |
| `minRows`           | number   | textarea row가 작아질 수 있는 가장 작은 수                                                                                                                                          |
| `onHeightChange`    | function | textarea 높이가 변경될 때 호출되는 함수로, 인수는 높이와 사용자 지정 동작에 유용할 수 있는 추가 정보가 포함된 객체로 이루어져 있다, 현재 옵션으로는 `{ rowHeight: number }`가 있다. |
| `cacheMeasurements` | boolean  | textarea의 높이를 계산하여 row 크기를 조절한다, 기본 값은 False                                                                                                                     |

이 중 `cacheMeasurements` 를 사용한다.

```jsx
<TextareaAutosize
  cacheMeasurements
  value={...}
  placeholder='...'
  onChange={...}
/>
```

![](https://velog.velcdn.com/images/yeonsubaek/post/d2de5949-e9e9-4cb8-a58b-81c1c2725f80/image.gif)

손쉽게 높이 조절을 완성하였다.

---

참고 사이트: https://www.npmjs.com/package/react-textarea-autosize
