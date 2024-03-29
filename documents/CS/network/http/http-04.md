# HTTP 메서드

> ### Index
>
> 1. HTTP API를 만들어보자
> 2. HTTP 메서드 - GET, POST
> 3. HTTP 메서드 - PUT, PATCH, DELETE
> 4. HTTP 메서드의 속성

## 1. HTTP API를 만들어보자

### 1-1. 리소스 식별

좋으 URI(Uniform Resource Identifier)를 설계할 때 가장 중요한 것은 리소스를 식별하는 것이다.

리소스란 무엇일까? 회원을 등록하고 수정하고 조회하는 것이 아닌, 회원이라는 개념 그 자체이다. 예를 들어, 미네랄을 캐라는 요구사항에서 미네랄이 리소스인 것이다.

그렇다면 리소스는 어떻게 식별하는 것이 좋을까? 예를 들어 회원을 등록하라는 요구사항에서 회원이 리소스고 등록이 행위이다. 리소스와 해당 리소스를 대상으로 하는 행위를 분리하는 것이다. 리소스를 명사, 행위를 동사라고 생각하면 이해하기 쉽다.

### 1-2. API URI 설계

#### 1. 리소스 식별

요구사항에서 명사로 된 리소스를 식별한다.

> **회원** 목록 조회
> **회원** 조회
> **회원** 등록
> **회원** 수정

#### 2. URI 계층 구조 활용

회원 목록 조회는 모든 등록되어있는 모든 리소스를 가져오기 때문에 `members` 계층에서 끝난다. 회원 조회, 등록, 수정은 특정한 리소스를 가져오기 때문에 `members` 아래에 `{id}` 로 구분한다.

참고로, 계층 구조상 상위를 컬렉션으로 보고 복수단어를 사용하는 것을 권장한다. 예를 들어 회원은 `member` 가 아닌 `members` 로 상위 계층을 표현한다.

> **회원** 목록 조회 ➡️ `/members` > **회원** 조회 ➡️ `/members/{id}` > **회원** 등록 ➡️ `/members/{id}` > **회원** 수정 ➡️ `/members/{id}`

조회, 등록, 수정의 최하단 계층이 `{id}` 라면 어떻게 구분을 할까? 행위(메서드)를 사용할 수 있다.

## 2. HTTP 메서드 - GET, POST

### 2-1. GET

GET 메서드는 리소스를 조회한다. 클라이언트는 서버에 전달하고 싶은 데이터를 query(쿼리 파라미터, 쿼리 스트링)를 통해서 전달한다. 또한, 메시지 바디를 사용해서 데이터를 전달할 수 있지만, 지원하지 않는 곳이 많아 현업에서는 권장하지 않는다.

#### 리소스 조회 과정

클라이언트가 서버 컴퓨터에 다음과 같은 메세지를 전달한다면,

```
GET/members/100 HTTP/1.1
Host: localhost:8080
```

서버 컴퓨터는 `/members/100` 이라는 경로로 데이터를 읽을 수 있다.

```js
// /members/100
{
  "username": "young",
  "age": 20
}
```

서버 컴퓨터는 해당 데이터에 부합하는 리소스를 조회하고 클라이언트에게 다음과 같은 응답 데이터를 전달한다.

```
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 34

{
  "username": "young",
  "age": 20
}
```

### 2-2. POST

POST 메서드는 요청 데이터를 처리한다. 클라이언트가 메시지 바디를 통해 서버로 요청 데이터를 전달하고 서버는 데이터를 처리한다. 주로 전달된 데이터로 신규 리소스를 등록하거나 변경된 프로세스를 처리하는 데 사용된다.

#### 리소스 등록 과정

클라이언트가 서버 컴퓨터에 다음과 같은 메세지를 전달하면,

```
POST /members HTTP/1.1
Content-Type: application/json

{
  "username": "young",
  "age": 20
}
```

서버는 `/members` 경로에 들어와 `/members/100` 이라는 신규 리소스 식별자를 생성한다.

```js
// /members/100
{
  "username": "young",
  "age": 20
}
```

마지막으로 클라이언트에게 생성이 완료되었다는 응답 데이터를 전달한다.

```
HTTP/1.1 201 Created
Content-Type: application/json
Content-Length: 34
Location: /members/100

{
  "username": "young",
  "age": 20
}
```

신규로 리소스가 생성되면 201이라는 status를 사용하고 `Location` 속성에 리소스가 생성된 경로를 저장한다.

#### POST를 사용하는 경우

1. **새 리소스를 생성(등록)**  
   서버가 아직 식별하지 않은 새 리소스를 생성한다.

2. **요청 데이터 처리**  
   단순히 데이터를 생성하거나 변경하는 것을 넘어서 프로세스를 처리해야 하는 경우에 사용한다. 예를 들어 주문에서 결제완료, 배달시작, 배달완료 순으로 단순히 값을 변경하는 것을 넘어 프로세스의 상태가 변경되는 경우이다.  
   또한 POST의 결과로 새로운 리소스가 생성되지 않을 수도 있다. 예를 들어 `POST/orders/{orderId}/start-develivery` 처럼 리소스로 처리할 수 없을 때는 어쩔 수 없이 동사를 사용한다. 이때 `start-delivery` 를 컨트롤 URI라고 한다.
3. **다른 메서드로 처리하기 애매한 경우**  
   예를 들어 JSON으로 조회 데이터를 넘겨야 하는데, GET 메서드를 사용하기 어려운 경우에 사용한다.

## 3. HTTP 메서드 - PUT, PATCH, DELETE

### 3-1. PUT

PUT 메서드는 리소스가 존재하면 대체하고 없으면 생성한다. 쉽게 말해 완전히 대체하여 덮어버리는 것이다. 여기서 중요한 것은 클라이언트가 리소스를 식별하는 것이다. 클라이언트가 리소스의 위치를 알고 URI를 지정하는 것이 POST와의 차이점이다.

#### 리소스가 있는 경우

클라이언트가 다음과 같은 요청 메세지를 보내면

```
PUT /members/100 HTTP/1.1
Content-Type: application/json

{
  "username": "old",
  "age": 50
}
```

서버는 기존에 갖고 있던 리소스를 대체한다

```js
{
  "username": "young",
  "age": 20
}
```

⬇️

```js
{
  "username": "old",
  "age": 50
}
```

#### 리소스가 없는 경우

클라이언트가 동일한 요청 메세지를 보내면 서버는 신규 리소스를 생성한다

```js
// /members/100
{
  "username": "old",
  "age": 20
}
```

#### 주의! 리소스는 완전히 대체한다

클라이언트와 다음과 같이 `username` 필드가 없는 요청 메세지를 보내면

```
PUT /members/100 HTTP/1.1
Content-Type: application/json

{
  "age": 50
}
```

서버는 기존 리소스에 있는 `username` 필드를 포함한 모든 내용을 대체한다.

```js
{
  "age": 50
}
```

### 3-2. PATCH

PATCH 메소드는 PUT에서 모든 필드가 삭제되는 경우를 방지하여 리소스를 부분만 변경시킨다. PATCH 지원이 안되는 서버가 간혹 존재하는데, 그 때는 POST를 사용하면 된다.

#### 리소스 부분 변경

클라이언트가 다음과 같은 요청 메세지를 보내면

```
PUT /members/100 HTTP/1.1
Content-Type: application/json

{
  "age": 50
}
```

서버는 기존에 갖고 있던 리소스와 비교해 요청 받은 리소스 부분만 변경시킨다.

```js
{
  "username": "young",
  "age": 20
}
```

⬇️

```js
{
  "username": "young",
  "age": 50
}
```

### 3-3. DELETE

DELETE 메서드는 리소스를 제거한다.

#### 리소스 제거

클라이언트가 다음과 같은 요청 메세지를 보내면

```
DELETE /members/100 HTTP/1.1
Content-Type: application/json
```

서버는 가지고 있는 리소스를 모두 제거한다.

## 4. HTTP 메서드의 속성

### 4-1. 안전 (Safe)

호출해도 리소스가 변경되지 않는 경우를 안전하다고 한다. GET 메서드는 안전하고, POST와 PATCH, DELETE는 안전하지 않다.

계속된 호출로 로그가 쌓이면서 장애가 발생하는 경우는 고려하지 않는다. 안전은 해당 리소스만 고려한다.

### 4-2. 멱등 (Idempotent)

한 번 호출하든 여러 번 호출하든 결과가 같은 것을 멱등이라고 한다. `f(x)=f(f(x))`

GET과 PUT, DELETE는 여러 번 수행해도 결과가 같아서 멱등이지만, POST는 중복으로 발생하기 때문에 멱등이 아니다. 예를 들어 결제를 두 번하는 것은 POST를 두 번 실행하는 것이다.

또한 멱등은 외부 요인으로 중간에 리소스가 변경되는 것까지 고려하지 않는다.

### 4-3. 캐시가능 (Cacheable)

응답 결과 리소스를 캐시하는 것은 캐시 키로 고려한다. GET과 HEAD는 캐시로 사용 할 수 있지만, POST와 PATCH는 메시지바디까지 캐시 키로 고려해야 해서 구현이 쉽지 않다.

---

[모든 개발자를 위한 HTTP 웹 기본 지식](https://www.inflearn.com/course/http-%EC%9B%B9-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC) 강의를 듣고 정리한 내용
