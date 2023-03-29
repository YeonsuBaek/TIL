# HTTP 메서드 활용

> ### Index
>
> 1. 클라이언트에서 서버로 데이터 전송
> 2. HTTP API 설계 예시

## 1. 클라이언트에서 서버로 데이터 전송

### 1-1. 데이터 전달 방식

#### 쿼리 파라미터

쿼리 파라미터를 통해 데이터를 전송할 때 주로 GET 메서드를 사용하고 정렬 필터(검색어) 기능에 사용한다.

#### 메시지 바디

메시지 바디를 통해 데이터를 전송할 때 POST, PUT, PATCH 메서드를 사용하고 회원가입, 상품 주문, 리소스 등록, 리소스 변경과 같은 기능에 사용한다.

### 1-2. 4가지 상황

#### 정적 데이터 조회

이미지나 정적 텍스트 문서를 조회하는 것을 정적 데이터라고 하고 GET 메서드를 사용한다. 일반적으로 쿼리 파라미터 없이 리소스 경로로 단순하게 조회할 수 있다.

![](https://velog.velcdn.com/images/yeonsubaek/post/54dc239d-c1de-4442-9242-5e29392f0237/image.jpeg)

#### 동적 데이터 조회

검색이나 게시판 목록에서 정렬 필터(검색어)를 동적 데이터라고 한다. 조회 조건을 줄여주는 필터나 조회 결과를 정렬하는 정렬 조건에 주로 사용한다. 동적 데이터 또한 GET 메서드를 사용하며, 쿼리 파라미터를 사용하여 데이터를 전달한다.

![](https://velog.velcdn.com/images/yeonsubaek/post/b23285c1-23ec-405c-8f7b-0318fef910bb/image.jpeg)

#### HTML Form 데이터 전송

회원가입이나 상품 주문, 데이터 변경을 할 때 HTML Form 데이터를 사용한다.

HTML Form을 submit할 때 POST 메서드를 사용한다. `Content-Type`은 `application/x-www-form-urlencoded`를 사용하며 form의 내용을 메시지 바디를 통해 전송한다. 메시지 바디의 내용은 `key=value` 의 쿼리 파라미터 형식이다. 전송 데이터를 인코딩하기 때문에 'abc김'이라는 데이터가 'abc%EA%B9%80'이라는 데이터로 바뀐다.

![](https://velog.velcdn.com/images/yeonsubaek/post/7b85ea74-93d5-4f0a-91e9-a6972bc5fc49/image.jpeg)

파일 업로드 같은 바이너리 데이터를 전송할 때는 다른 `multipart/form-data` 라는 `Content-Type` 을 사용한다. 다른 종류의 여러 파일과 폼의 내용을 함께 전송할 수 있다.

![](https://velog.velcdn.com/images/yeonsubaek/post/f25fd759-ca7f-4a06-99fe-d7cc67e3dfdd/image.jpeg)

HTML Form은 POST 뿐만 아니라 GET 메서드를 사용할 수도 있다. 대신 리소스 변경이 발생하는 곳에서 사용할 수 없고 조회만 가능하다. 따라서 전송 데이터는 메시지 바디가 아닌 URL 경로에 들어간다.

![](https://velog.velcdn.com/images/yeonsubaek/post/c0d4739d-73db-4679-a4d0-a33433850572/image.jpeg)

### 1-3. HTTP API 데이터 전송

HTTP API 데이터는 서버와 서버 사이에서 백엔드 시스템 통신을 하는 것이다. 클라이언트는 앱과 웹으로 나눌 수 있는데, 앱 클라이언트에는 아이폰과 안드로이드가 있다. 웹 클라이언트는 HTML에서 Form을 전송하는 대신 자바스크립트를 이용한 통신(AJAX)을 한다.

POST, PUT, PATCH 메서드는 메시지 바디를 통해 데이터를 전송하고, GET 메서드는 조회하거나 쿼리 파라미터로 데이터를 전달한다.

Content-Type은 `application/json` 을 주로 사용하고 이외에도 TEXT, XML 등이 있다.

---

[모든 개발자를 위한 HTTP 웹 기본 지식](https://www.inflearn.com/course/http-%EC%9B%B9-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC) 강의를 듣고 정리한 내용
