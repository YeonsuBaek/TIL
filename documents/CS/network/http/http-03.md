# HTTP

> ### Index
>
> 1. 모든 것이 HTTP
> 2. 클라이언트 서버 구조
> 3. Stateful, Stateless
> 4. 비연결성(connectionless)
> 5. HTTP 메세지

## 1. 모든 것이 HTTP

### 1-1. HTTP란?

HTTP(HyperText Transfer Protocol)은 하이퍼텍스트, 즉 HTML 문서를 프로토콜로 전송하는 것을 말한다. 과거에는 HTML 문서만 전송하였지만, 현재는 다음과 같은 모든 형태의 데이터를 전송할 수 있다.

- HTML, TEXT
- 이미지, 음성, 영상, 파일
- JSON, XML (API)

요즘 HTTP가 아닌 HTC를 직접 연결하는 경우는 드물다.

### 1-2. HTTP 역사

| HTTP 버전    | 출시 년도 | 설명                                              |
| ------------ | --------- | ------------------------------------------------- |
| HTTP/0.9     | 1991      | GET 메서드만 지원하고 HTTP 헤더는 지원하지 않는다 |
| HTTP/1.0     | 1996      | 메서드와 헤더가 추가되었다                        |
| **HTTP/1.1** | 1997      | 가장 많이 사용되어 우리에게 가장 중요한 버전이다  |
| HTTP/2       | 2015      | 성능이 개선되었다                                 |
| HTTP/3       | 진행 중   | TCP 대신 UDP를 사용하고 성능이 개선된다           |

### 1-3. 기반 프로토콜

TCP 기반 프로토콜은 HTTP/1.1과 HTTP/2가 있고, UDP 기반 프로토콜은 HTTP/3가 있다.  
현재는 HTTP/1.1을 주로 사용하고 있지만, HTTP/2와 HTTP/3도 점점 증가하고 있다.

### 1-4. HTTP 특징

- 클라이언트 서버 구조
- 무상태 프로토콜(스테이스리스), 비연결성
- HTTP 메세지
- 단순함, 확장 가능

## 2. 클라이언트 서버 구조

### 구조

Request-Response 구조를 가지고 있다. 클라이언트는 서버에 요청을 보내고 응답을 대기한다. 서버는 요청에 대한 결과를 만들어서 클라이언트에 응답한다.

### 발전

1. 클라이언트와 서버가 분리되었다.
2. 서버는 비지니스 로직과 데이터를 담당하고, 클라이언트는 UI와 사용성을 담당하게 되었다. 할 일을 나눠가지면서 독립적을 진화할 수 있다는 장점을 가진다.

## 3. Stateful, Stateless

### 3-1. Stateful

> #### 노트북을 구매하는 상황
>
> 고객: 이 **노트북** 얼마인가요?
> 점원: 100만원 입니다.
>
> 고객: **2개** 구매하겠습니다.
> 점원: 200만원입니다. 신용카드, 현금 중 어떻게 결제하시겠습니까?
>
> 고객: **신용카드**로 구매하겠습니다.
> 점원: 200만원 결제되었습니다.
>
> #### 점원이 중간에 바뀐 상황
>
> 고객: 이 **노트북** 얼마인가요?
> 점원1: 100만원 입니다.
>
> 고객: **2개** 구매하겠습니다.
> 점원2: ? 무엇을 2개 구매하시겠어요?
>
> 고객: **신용카드**로 구매하겠습니다.
> 점원3: ? 무엇을 몇 개 신용카드로 구매하시겠어요?
>
> #### 결제 진행 상태 유지
>
> 고객: 이 **노트북** 얼마인가요?
> 점원: 100만원 입니다. **(노트북 상태 유지)**
>
> 고객: **2개** 구매하겠습니다.
> 점원: 200만원입니다. 신용카드, 현금 중 어떻게 결제하시겠습니까? **(노트북, 2개 상태 유지)**
>
> 고객: **신용카드**로 구매하겠습니다.
> 점원: 200만원 결제되었습니다. **(노트북, 2개, 신용카드 상태 유지)**

중간에 다른 점원으로 바뀌면 안된다. 만약 다른 점원으로 바뀌어야 할 경우 상태 정보를 미리 전달해야 한다.

![](https://velog.velcdn.com/images/yeonsubaek/post/95180ccf-046c-420e-b8c5-1d944043efa1/image.jpeg)

항상 같은 서버가 유지되어야 한다. 클라이언트와 서버가 1대 1로 통신해서 서버를 늘리기 힘들다는 단점이 있다.  
또한 중간에 서버가 장애나면 요청을 해도 응답을 받을 수 없다.

### 3-2. Stateless

> #### 노트북을 구매하는 상황
>
> 고객: 이 **노트북** 얼마인가요?
> 점원: 100만원 입니다.
>
> 고객: **노트북 2개** 구매하겠습니다.
> 점원: 200만원입니다. 신용카드, 현금 중 어떻게 결제하시겠습니까?
>
> 고객: **노트북 2개 신용카드**로 구매하겠습니다.
> 점원: 100만원 입니다.
>
> #### 점원이 중간에 바뀐 상황
>
> 고객: 이 **노트북** 얼마인가요?
> 점원1: 100만원 입니다.
>
> 고객: **노트북 2개** 구매하겠습니다.
> 점원2: 200만원입니다. 신용카드, 현금 중 어떻게 결제하시겠습니까?
>
> 고객: **노트북 2개 신용카드**로 구매하겠습니다.
> 점원3: 200만원 입니다.

중간에 다른 점원으로 바뀌어도 된다. 갑자기 고객이 증가해도 점원을 대거 투입할 수 있다.

즉, 클라이언트 요청이 갑자기 증가해도 서버를 대거 투입할 수 있다. 응답 서버를 쉽게 바꿀 수 있으므로 무한한 서버를 증설할 수 있다.

![](https://velog.velcdn.com/images/yeonsubaek/post/9f295a0d-992b-4c74-8f52-199bf77b57a8/image.jpeg)

아무 서버나 호출할 수 있다. 클라이언트가 상태를 모두 포함해 요청하기 때문에 서버가 상태를 보관할 필요 없다. 중간에 서버가 장애나면 다른 서버가 응답을 전달할 수 있다.

Stateless에서는 스케일 아웃, 즉 서버를 수평으로 확장하는 것이 유리하다.

### 3-3. Stateless의 실무 한계

- 무상태는 전송되는 데이터의 양이 많다.
- 모든 것을 무상태로 설계할 수 있는 경우도 있고 없는 경우도 있다.
  - 무상태: 로그인이 필요 없는 단순한 서비스 소개 화면
  - 상태: 로그인된 화면
- 로그인한 사용자의 경우 로그인 했다는 상태를 서버에 유지해야 한다.
  - 일반적으로 브라우저 쿠키와 서버 세션 등을 사용해 상태를 유지한다.
- 상태 유지는 최소한만 사용한다.

## 4. 비연결성(connectionless)

### 4-1. 연결을 유지하는 모델

![](https://velog.velcdn.com/images/yeonsubaek/post/449a0443-6b6b-455c-87ab-aa8663d8e723/image.jpeg)

연결성이 있는 모델은 클라이언트와 서버가 TCP/IP 연결을 하면 끊지 않고 계속 유지한다. 클라이언트에서 요청을 하지 않을 때도 연결되기 때문에 서버 자원이 소모되는 단점이 있다.

### 4-2. 연결을 유지하지 않는 모델

![](https://velog.velcdn.com/images/yeonsubaek/post/d9a9f4ab-b152-4b9d-a42b-2fe29261ce41/image.jpeg)

비연결성 모델은 클라이언트와 서버가 요청을 주고 받으면 TCP/IP 연결이 종료된다. 요청을 하지 않을 때 연결이 유지되지 않아 최소한의 서버 자원을 유지할 수 있고, 다시 요청을 하면 연결된다.

### 4-3. 비연결성

HTTP는 기본이 연결을 유지하지 않는 모델이다.
비연결성은 일반적으로 초 단위 이하의 빠른 속도로 응답하는데, 1시간 동안 수천명이 서비스를 사용해도 실제 서버에서 동시에 처리하는 요청은 수십개 이하로 매우 작다. 예를 들어, 웹 브라우저에서 1초동안 검색 버튼이 눌리는 횟수는 그리 많지 않다.  
연결을 유지하지 않으면 서버 자원을 매우 효율적으로 사용할 수 있다.

### 4-3. 비연결성의 한계와 극복

TCP/IP가 연결을 새로 맺을 때마다 3 way handshake 시간이 추가된다. 웹 브라우저로 사이트를 요청하면 HTML과 자바스크립트, CSS, 이미지 등 수 많은 자원이 함께 다운로드 되어야 한다. 이러한 자원을 받을 때마다 연결하고 끊기를 반복하는 것은 비효율적이다.

지금은 HTTP 지속 연결(Persistent Connections)로 문제를 해결하였다. 또한 HTTP/2와 HTTP/3에서 더 많은 최적화가 되어있다.

| HTTP 초기                                                                                            | HTTP 지속 연결                                                                                       |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| ![](https://velog.velcdn.com/images/yeonsubaek/post/2d35833f-51a6-4061-8bcf-5120b9fe10d6/image.jpeg) | ![](https://velog.velcdn.com/images/yeonsubaek/post/d209e45d-52d9-4d00-ae58-06892ddb8f7c/image.jpeg) |

## 5. HTTP 메세지

### 5-1. HTTP 메세지 구조

HTTP 메세지 구조는 시작 라인과 헤더, 공백 라인(CRLF), 메세지 바디로 나눠진다. 공백 라인은 무조건 있어야 하고, HTTP 요청 메세지에서 메세지 바디가 존재하지 않을 수도 있다.

![](https://velog.velcdn.com/images/yeonsubaek/post/f43422c8-beb7-4a7d-b606-82e45fa09132/image.jpeg)

HTTP 공식 스펙은 다음과 같다.

```
HTTP-message =
	start-line
    * (header-field CRLF)
    CRLF
    [ message-body ]
```

### 5-2. 시작 라인

> GET/search?q=hello&hl=ko HTTP/1.1

시작 라인은 요청 메세지와 응답 메세지로 나뉜다.

#### 요청 메세지 (request-line)

요청 메세지는 `method SP(공백) request-target SP HTTP-version CRLF(엔터)` 로 구성되어 있다.

HTTP 메서드(method)의 종류에는 GET(리소스 조회), POST(요청 내역 처리), PUT, DELETE 등이 있다. 서버가 수행해야 할 동작을 지정하는 역할을 한다.

요청 대상(request-target)은 `/search?q=hello&hl=ko` 와 같이 절대경로[?쿼리]로 나타낸다. 참고로 절대경로란 "/"로 시작하는 경로를 말한다.

HTTP 버전(HTTP-version)에는 HTTP/1.1과 HTTP/2, HTTP/3이 있다.

#### 응답 메세지 (status-line)

> HTTP/1.1 200 OK

응답 메세지는 `HTTP-version SP status-code SP reson-phrase CRLF` 로 구성되어 있다.

HTTP 상태 코드(status-code)는 요청의 성공이나 실패를 나타낸다. 대표적으로 200(성공), 400(클라이언트 요청 오류), 500(서버 내부 오류) 등이 있다.

이유 문구(reason-phrase)는 사람이 이해할 수 있는 짧은 상태 코드 설명 글을 말한다. 예를 들어 상태 코드가 200일 때 OK로 나타내어 성공했다는 의미를 전달한다.

### 5-3. HTTP 헤더

> Host: www.google.com

> Content-Type: text/html;charset=UTF-8
> Content-Length: 3423

헤더 필드는 `field-name:OWS(띄어쓰기 허용) field-value OWS` 로 구성되어 있다.  
field-name은 대소문자를 구별하지 않고 field-value는 대소문자를 구별한다.

HTTP 헤더는 HTTP 전송에 필요한 모든 부가정보를 제공한다. 그 예로 메시지 바디의 내용, 메시지 바디의 크기, 압축, 인증, 요청 클라이언트 정보, 서버 애플리케이션 정보, 캐시 관리 정보 등이 있다.

### 5-4. HTTP 메시지 바디

> ```
> <html>
>  <body>...</body>
> </html>
> ```

HTTP 메시지 마디는 실제 전송한 데이터를 담고 있다. HTML 문서, 이미지, 영상, JSON 등 byte로 표현할 수 있는 모든 데이터를 전송할 수 있다.

---

[모든 개발자를 위한 HTTP 웹 기본 지식](https://www.inflearn.com/course/http-%EC%9B%B9-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC) 강의를 듣고 정리한 내용