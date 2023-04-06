# HTTP HTTP 상태코드

> ### Index
>
> 1. HTTP 상태코드 소개
> 2. 2xx - 성공
> 3. 3xx - 레다이렉션
> 4. 4xx - 클라이언트 오류
> 5. 5xx- 서버 오류

## 1. HTTP 상태코드 소개

상태코드란 클라이언트가 보낸 요청의 처리 상태를 응답에서 알려주는 기능이다. 상태코드는 1~5 사이로 시작하는 세 자리 숫자로 이루어져 있다.

만약 클라이언트가 인식할 수 없는 상태코드를 서버가 반환한다면 상위 상태코드, 즉 맨 앞자리 숫자로 해석해서 처리한다. 예를 들어 299는 2xx(Successful)이라고 해석하면 된다.

### 1xx (Informational)

1xx는 요청이 수신되어 처리 중이라는 뜻으로, 거의 사용되지 않는다.

## 2. 2xx - 성공

2xx(Successful)은 클라이언트의 요청을 성공적으로 처리했다고 해석한다.

### 2-1. 200 OK.

200은 요청이 성공적이라는 뜻이다. 클라이언트가 서버에게 요청을 보내면, 서버는 200 OK라는 상태코드와 함께 응답을 보낸다.

### 2-2. 201 Created

201은 요청을 성공해서 새로운 리소스가 생성된 것을 말한다. 클라이언트가 POST 메서드로 요청하면, 서버는 응답을 보낸다. 이때 생성된 리소스는 응답의 Location 헤더 필드로 식별한다.

### 2-3. 202 Accepted

202는 요청이 접수되었으나 처리가 완료되지 않은 것을 말한다. 예를 들어 요청을 접수한 후 1시간 뒤에 배치 프로세스가 요청을 처리하는 경우 사용된다.

### 2-4. 204 No Content

204는 서버가 요청을 성공적으로 수행했지만, 응답 페이로드 본문에 보낼 데이터가 없는 경우를 말한다. 예를 들어 웹 문서 편집기에서 저장버튼을 누르면 결과적으로 아무 내용이 없어야 한고 동일한 화면을 유지해야 한다. 결과 내용이 없어도 204 메세지 만으로 성공을 인식할 수 있다.

## 3. 3xx - 리다이렉션

3xx(Redirection)은 요청을 완료하기 위해 유저 에이전트의 추가 조치를 필요로 하는 것이다. 이때 유저 에이전트는 웹 브라우저(클라이언트)를 말한다.

리다이렉션이란 웹 브라우저는 3xx 응답의 결과에 Location 헤더가 있으면 그 위치로 자동으로 이동하는 것을 말한다.

![](https://velog.velcdn.com/images/yeonsubaek/post/ec1a1522-1393-4e56-99ee-7950948f386b/image.jpeg)

리다이렉션에는 세 가지 종류가 있다.

### 3-1. 영구 리다이렉션 (301, 308)

영구 리다이렉션은 리소스의 URI가 영구적으로 이동하는 것이다. 기존 URI를 사용하지 않고, 검색 엔진 등에서도 변경을 인지한다.

#### 301 Moved Permanently

리다이렉트 시 요청 메서드가 무조건 GET으로 변하고, 본문이 제거될 수도 있다.

![](https://velog.velcdn.com/images/yeonsubaek/post/ab62dcf7-254f-4dbe-9cdc-9eaceb2dff98/image.jpeg)

#### 308 Permanent Redirect

301과 기능은 같으나, 리다이렉트 시 요청 메서드와 본문이 유지된다.

![](https://velog.velcdn.com/images/yeonsubaek/post/87581728-393a-41fd-a685-22c0c77087fa/image.jpeg)

---

[모든 개발자를 위한 HTTP 웹 기본 지식](https://www.inflearn.com/course/http-%EC%9B%B9-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC) 강의를 듣고 정리한 내용