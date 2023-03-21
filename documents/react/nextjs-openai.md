# Next.js로 chatGPT 활용하기 (OpenAI Api 가져오기)

남들은 이미 다 써봤다는 chatGPT를 나는 이제서야 사용하게 되었다. chatGPT를 활용해 만들어보고 싶은 프로젝트가 있어서 API를 가져와 사용하는 법을 공부해보았다.

---

## 0. Next.js 환경 설정

```bash
npx create-next-app
```

리액트를 설치하는 과정과 비슷하다.

![](https://velog.velcdn.com/images/yeonsubaek/post/c49e552e-2e8d-4eca-8b23-1e336951e914/image.png)

선택할 옵션이 엄청 많지만 이번 프로젝트에서는 대부분 필요 없는 옵션이다.

## 1. 폼 만들기

### 1-1. 입력 폼 만들기

```jsx
// index.js
import { useState } from 'react';

export default function Home() {
  const [question, setQuestion] = useState('');

  return (
    <>
      <form>
        <input
          type='text'
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </form>
    </>
  );
}
```

`useState` 와 `onChange` 를 사용해 사용자의 질문을 입력 받는다.

### 1-2. 입력한 폼 제출하기

```jsx
// index.js
...
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuestion('');
  };

  return (
    <>
      ...
        <button type='submit'>질문하기</button>
      </form>
...
```

버튼을 클릭하면 `onSubmit` 이 작동하여 입력한 폼을 제출하도록 한다.  
`form` 의 특성상 제출하면 화면을 렌더링하기 때문에 이것을 방지하기 위한 코드도 추가한다.

### 1-3. 결과 폼 만들기

```jsx
// App.js
...
  const [answer, setAnswer] = useState();
...
  return (
    <>
      ...
      <div>{answer}</div>
    </>
...
```

OpenAI를 통해 받은 응답을 출력하는 부분도 미리 만든다.

## 2. 요청 및 응답

### 2-1. 질문 요청 및 응답 패턴

```jsx
// App.js
...
const handleSubmit = async (e) => {
  e.preventDefault();

  // 1.
  const response = await fetch('./api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question: question }),
  });

  // 2.
  const data = await response.json();
  if (response.status !== 200) {
    throw (
      data.error || new Error(`request failed with status ${response.status}`)
    );
  }

  // 3.
  setAnswer(data.result);
  setQuestion('');
};
...
```

1. 질문을 제출하면 API를 패치한다.

2. 만약 응답의 status가 200이 아닌, 즉 서버가 요청을 제대로 처리하지 못한 경우에는 에러를 던진다.

3. status가 200인 경우에는 `answer` 를 응답 결과로 바꾸고 질문 폼을 비운다.

### 2-2. 에러가 던져진 경우 처리

```jsx
// App.js
...
const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      ...
      // 위와 동일
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
};
...
```

에러가 던져진 경우에는 콘솔에 에러를 반환하고 에러 메세지를 알림창으로 띄운다.

## 3. OpenAI 연동하기

### 3-1. API 키 발급

https://platform.openai.com/  
![](https://velog.velcdn.com/images/yeonsubaek/post/11091690-236e-4f90-b653-37293ec2b510/image.png)
![](https://velog.velcdn.com/images/yeonsubaek/post/e5cbeb09-15be-4c46-8a92-de0b11073ae8/image.png)

OpenAI 사이트에 회원가입을 하고 "프로필" > "View API keys" > "Create new secret key" 경로를 통해 key를 복사한다.

```bash
// .env
OPENAI_API_KEY="발급 받은 키"
```

`package.json`과 같은 위치에 `.env` 라는 파일을 생성해 발급 받은 키를 저장한다.

### 3-2. API 요청할 코드 가져오기

https://platform.openai.com/examples
![](https://velog.velcdn.com/images/yeonsubaek/post/ab733c15-db94-4795-a403-e2181938fe09/image.png)

Examples 카테고리에서 여러 종류의 애플리케이션을 볼 수 있다. 이 중에서 "Q&A"라는 질의응답 애플리케이션을 가져다 쓸 것이다.

![](https://velog.velcdn.com/images/yeonsubaek/post/2b949cd1-f0f9-47fc-be35-3be72c42df01/image.png)

맨 하단에 "API request" 코드를 사용할 수 있다. 여러 언어 중 node.js를 선택해 복사한다.

```jsx
// ./api/generate.js

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: 'text-davinci-003',
  prompt: 'I am a highly intelligent question answering bot...',
  // prompt가 너무 길어서 생략
  temperature: 0,
  max_tokens: 100,
});
```

`pages/api/generate.js` 라는 파일을 생성하고 복사한 코드를 붙여넣는다.

### 3-3. API 파일 가져오기

```bash
npm install dotenv
```

`dotenv` 라이브러리를 설치한다. dotnev는 환경변수를 `.env`에 저장하고 `process.env`로 로드하는 의존성 모듈이다. 이것을 사용하면 민감한 정보를 안전하게 사용할 수 있다.

```jsx
// ./api/generate.js
import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/.env' });
...
```

환경변수를 불러오고 다른 파일에 환경변수를 저장하기 위해 위와 같은 코드를 추가한다.

### 3-4. OpenAI 구현

```bash
npm install openai
```

`openai` 라이브러리를 설치한다.

```jsx
// ./api/generate.js
...
export default async function (req, res) {
  const question = req.body.question || '';
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: 'I am a highly intelligent question answering bot. If you ask me ${question} that is rooted in truth, I will give you the answer to Korean. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"잘 모르겠습니다.\".\n',
    temperature: 0,
    max_tokens: 100,
  });

  res.status(200).json({ result: response.data.choices[0].text });
}
```

### 3-5. 올바른 API인지 판단

```jsx
// ./api/generate.js
...
export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: 'OpenAI API key not configured',
      },
    });
    return;
  }
...
```

configuration의 apiKey가 존재하지 않다면 status를 500, 즉 서버에 오류를 발생하여 요청을 수행할 수 없다는 상태로 만들고 에러 메세지를 작성하여 응답한다.

## 실행

![](https://velog.velcdn.com/images/yeonsubaek/post/392f8c78-2d3c-4682-8aa5-8eef9e823d64/image.gif)
![](https://velog.velcdn.com/images/yeonsubaek/post/1977a7a4-281e-40f5-8335-5b2400d0a4dd/image.gif)

## 전체 코드

```jsx
// index.js
import { useState } from 'react';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('./api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: question }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`request failed with status ${response.status}`)
        );
      }

      setAnswer(data.result);
      setQuestion('');
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button type='submit'>질문하기</button>
      </form>
      <div>{answer}</div>
    </>
  );
}
```

```jsx
// ./api/generate
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config({ path: __dirname + '/.env' });

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: 'OpenAI API key not configured',
      },
    });
    return;
  }

  const question = req.body.question || '';

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `I am a highly intelligent question answering bot. If you ask me ${question} that is rooted in truth, I will give you the answer to Korean. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"잘 모르겠습니다.\".\n `,
    temperature: 0,
    max_tokens: 100,
  });

  res.status(200).json({ result: response.data.choices[0].text });
}
```

---

관련 강의
[OpenAI API와 JavaScript를 이용한 ChatGPT AI 앱 개발 코딩 실습](https://www.udemy.com/course/openai-api-javascript-chatgpt-ai-korean/)

참고 자료  
[HTTP 상태 코드](https://ko.wikipedia.org/wiki/HTTP_%EC%83%81%ED%83%9C_%EC%BD%94%EB%93%9C)  
[Fetch API를 사용하는 방법](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)  
[Node.js에서 환경변수 다루기](https://www.daleseo.com/js-node-process-env/)
