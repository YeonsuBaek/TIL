# [React] open API를 활용해 랜덤으로 고양이 사진 불러오기

[만들면서 배우는 리액트 : 기초](https://www.inflearn.com/course/%EB%A7%8C%EB%93%A4%EB%A9%B4%EC%84%9C-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B8%B0%EC%B4%88/) 강의를 들으면서 open API를 활용하는 파트가 인상 깊어 다시 복습해보았다.

## 1. open API 알아보기

[고양이 사진 API를 제공하는 사이트](https://cataas.com/)  
위 사이트에서 여러 종류의 API를 사용할 수 있다.

![](https://velog.velcdn.com/images/yeonsubaek/post/d880e8ca-b16d-4cb4-a636-49d0d4915a55/image.png)

| API                  | Desc.                                              |
| -------------------- | -------------------------------------------------- |
| /cat                 | 고양이 사진 랜덤                                   |
| /cat/:tag            | 입력한 tag에 해당하는 고양이 사진 랜덤             |
| /cat/gif             | 움직이는 고양이 사진 랜덤                          |
| /cat/says/:text      | 입력한 text가 적힌 고양이 사진 랜덤                |
| /cat/:tag/says/:text | 입력한 tag에 해당하고 text가 적힌 고양이 사진 랜덤 |

이 중 `/cat` API를 사용해 간단한 기능을 구현해볼 것이다.

## 2. API 가져오기

리액트에서 API를 사용하기 위해서 자바스크립트의 `fetch`를 사용해 비동기 작업을 한다.

```js
fetch("http://example.com/movies.json") // 1
  .then((response) => response.json()) // 2
  .then((data) => console.log(data)); // 3
```

위는 네트워크에서 json 파일을 가져와서 콘솔에 출력하는 코드이다.

1. `fetch`함수에 가져오고자 하는 API 하나를 인수받는다.
2. 응답은 Response 객체로 표현되며, `json`함수를 호출하여 json 본문을 추출한다.
3. json으로 파싱한 결과물을 반환한다.

![](https://velog.velcdn.com/images/yeonsubaek/post/24d28758-9407-46cf-9a8f-9945107ea59f/image.png)

제공되는 URL을 json으로 변환하기 위하여 `URL + ?json=true`를 fetch한다.

브라우저의 개발자도구에서 실행하면 `pending` 상태가 되고 결과가 출력되면 `fulfilled`가 된다.

- 대기(pending): 이행하지도, 거부하지도 않은 초기 상태.
- 이행(fulfilled): 연산이 성공적으로 완료됨.
- 거부(rejected): 연산이 실패함.

## 3. 리액트에 적용하기

### 3-1. 초기 세팅

```jsx
// CatImage.js
import React from "react";

const CatImage = () => {
  const initImage = "https://cataas.com/cat/pbrosoqOlUUtR5XJ";
  const [catImage, setCatImage] = React.useState(initImage);

  const handleChangeCat = () => {
    // 이미지 변경할 위치
  };

  return (
    <div>
      <img src={catImage} alt="" style={{ width: "300px" }} />
      <button onClick={handleChangeCat}>🐈‍⬛</button>
    </div>
  );
};

export default CatImage;
```

고양이 버튼을 클릭하면 이미지가 바뀌는 코드를 작성하였다.  
`useState`를 사용해 초기 이미지를 설정하였고, `handleChangeCat`함수가 실행될 때 이미지가 바뀐다.

### 3-2. API 가져오기

```jsx
// CatImage.js
...
const fetchCat = async () => {
  const OPEN_API_DOMAIN = "https://cataas.com";
  const response = await fetch(`${OPEN_API_DOMAIN}/cat?json=true`);
  const responseJson = await response.json();
  return `${OPEN_API_DOMAIN}/${responseJson.url}`;
};

const CatImage = () => {
...
```

2단계에서 API를 가져온 방식과 동일하다.

비동기 처리를 위해 `async`와 `await`를 사용한다.

### 3-3. API 적용하기

```jsx
// CatImage.js
...
const CatImage = () => {
  ...

  const handleChangeCat = async () => {
    const newImage = await fetchCat();
    setCatImage(newImage);
  };
...
```

API를 `setCatImage`에 삽입하여 `handleChangeCat` 함수가 실행될 때 사진이 바뀌도록 한다.

![](https://velog.velcdn.com/images/yeonsubaek/post/54dd8577-8107-4dae-bc1a-1351639edb84/image.gif)

---

`Promise`, `await`, `async` 등 비동기에 대해 나중에 정리해봐야겠다.

참고 링크
https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch
