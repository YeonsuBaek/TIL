# HTTP 헤더1 - 일반 헤더

> ### Index
>
> 1. HTTP 헤더 개요
> 2. 표현
> 3. 콘텐츠 협상
> 4. 전송 방식
> 5. 일반 정보
> 6. 특별한 정보
> 7. 인증
> 8. 쿠키

## 1. HTTP 헤더 개요

### 1-1. HTTP 헤더

header-field는 `field-name ":" OWS field-value OWS` 형식으로 이루어져 있다.

```
Host: www.google.com
Content-Type: text/html;charset=UTF8
Content-Length: 3423
```

HTTP 헤더는 HTTP 전송에 필요한 모든 부가정보를 담고 있다. 예를 들어 메시지 바디의 내용, 메시지 바디의 크기, 압축, 인증, 요청 클라이언트, 서버 정보, 캐시 관리 정보 등이 있다.  
표준 헤더가 많으며 필요시 임의의 헤더를 추가할 수 있다.

RFC2616에서는 다음과 같이 헤더를 분류한다.

- General 헤더 : 메시지 전체에 적용되는 정보 _(Connection: close)_
- Request 헤더 : 요청 정보 _(User-Agent: Mozilla/5.0)_
- Response 헤더 : 응답 정보 _(Server: Apache)_
- Entity 헤더 : 엔티티 바디 정보 _(Content-Type: text/html, Content-Length: 3423)_

### 1-2. HTTP 표준

1999년 HTTP 표준으로 RFC2616이 생겼다. 2014년에 기존 표준이 폐기되고 RFC7230~7235로 쪼개진 것이 등장하였다.

RFC723x로 변하면서 엔티티(Entity)라는 용어가 표현(Representation)으로 바뀌었다. 표현은 표현 메타데이터와 표현 데이터를 합친 것이다.

### 1-3. HTTP BODY

RFC2616에서는 HTTP BODY가 다음과 같은 특징이 있다.

메시지 바디는 요청이나 응답에서 전달할 실제 데이터인 엔티티 바디를 전달하는 데 사용된다.  
엔티티 헤더는 엔티티 본문의 데이터를 해석할 수 있는 정보를 제공한다. 그 정보에는 데이터 유형(html, json), 데이터 길이, 압축 정보 등이 있다.

RFC7230에서는 다음과 같은 특징이 있다.

페이로드라고도 불리는 메시지 바디를 통해 요청이나 응답에서 전달할 실제 데이터인 표현 데이터를 전달한다.  
표현 헤더는 표현 데이터를 해석할 수 있는 정보를 제공한다.

## 2. 표현

표현 헤더는 전송과 응답에서 둘 다 사용된다.

### 2-1. Content-Type

Content-Type은 미디어 타입과 문자 인코딩 같은 표현 데이터의 형식을 설명한다. 예를 들어 `text/html;charset=UTF-8`, `application/json`, `image/png` 가 있다.

### 2-2. Content-Encoding

Content-Encoding은 표현 데이터 압축 방식을 나타낸다. 표현 데이터를 압축하기 위해 사용된다.  
데이터를 전달하는 곳에서 압축 후 인코딩 헤더를 추가한다. 데이터를 읽는 쪽에서 인코딩 헤더의 정보로 압축을 해제한다.  
예를 들어 `gzip`, `deflate`, `identity` 가 있다.

### 2-3. Content-Language

Content-Language는 표현 데이터의 자연 언어를 표현한다. 예를 들어 `ko`, `en`, `en-US` 가 있다.

### 2-4. Content-Length

Content-Length는 바이트 단위로 표현 데이터의 길이를 나타낸다. Transfer-Encoding(전송 코딩)을 사용하면 Content-Length를 사용할 수 없다.

## 3. 콘텐츠 협상

콘텐츠 협상은 클라이언트가 선호하는 표현을 요청하는 것이다.  
협상 헤더는 요청 시에만 사용한다.

- Accept : 클라이언트가 선호하는 미디어 타입 전달
- Accept-Charset : 클라이언트가 선호하는 문자 인코딩
- Accept-Encoding : 클라이언트가 선호하는 압축 인코딩
- Accept-Language : 클라이언트가 선호하는 자연 언어

Accept-Language를 적용하기 전에 한국어 브라우저에서 서버를 접속하면 기본 언어인 영어로 응답한다.

Accept-Language를 적용하면 한국어로 응답한다.

만약 다중 언어 지원 서버에 한국어가 존재하지 않는다면 기본 언어로 응답한다.

언어 지원에도 우선순위를 둘 수 없을까?

### 3-1. 협상과 우선순위 1

Quality Values(q) 값을 사용한다.  
0~1 사이의 숫자를 사용하며 클수록 높은 우선순위이다. 생략하면 1로 여겨진다.

`Accept-Language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7`

`ko-KR`(1로 여겨짐) > `ko` > `en-US` > `en` 순으로 우선순위가 적용된다.

### 3-2. 협상과 우선순위 2

구체적인 것이 우선이 된다.

`Accept: text/*, text/plain, text/plain;format=flowed, */*`

`text/plain;format=flowed` > `text/pain` > `text/*` > `*/*` 순으로 우선순위가 적용된다.

### 3-3. 협상과 우선순위 3

구체적인 것을 기준으로 미디어 타입을 맞춘다.

`Accept: text/*;q=0.3,text/html;q=0.7,text/html;level=1,text/html;level=2;q=0.4,*/*;q=0.5`

| Media Type        | Quality |
| ----------------- | ------- |
| text/html;level=1 | 1       |
| text/html         | 0.7     |
| text/plain        | 0.3     |
| image/jpeg        | 0.5     |
| text/html;level=2 | 0.4     |
| text/html;level=3 | 0.7     |

## 4. 전송 방식

### 4-1. 단순 전송

단순 전송은 콘텐트의 길이를 알 때 Content-Length로 사용한다.

```
Content-Length: 3423
```

### 4-2. 압축 전송

압축 전송은 메시지를 압축하여 어떻게 압축하였는지 Content-Encoding을 통해 전송한다. 용량을 줄일 수 있다는 장점이 있다.

```
Content-Encoding: gzip
```

### 4-3. 분할 전송

분할 전송은 메세지를 나눠서 전송할 때 Transfer-Encoding을 통해 전송한다.

```
Transfer-Encoding: chunked

5
Hello
5
Hello
0
\r\n
```

_Hello, Hello, 엔터로 나눠서 전송_

`chunked` 는 덩어리로 쪼개서 보낸다는 뜻을 가진다.  
이렇게 분할하면 도착하는 대로 표시할 수 있다.

이때 주의할 점을 Content-Length는 사용할 수 없다. 분할하기 때문에 전체 길이가 예상이 안되고 덩어리마다 byte가 이미 제공되기 때문이다.

### 4-4. 범위 전송

범위 전송은 데이터의 필요한 범위만 전송하는 것이다.  
만약 이미지 중간 정도 다운받았는데 인터넷이 중간에 끊기다면 처음부터 다시 다운받지 않고 끊긴 지점부터 다운받으면 용량을 효율적으로 사용할 수 있다.

```
Range: bytes=1001-2000
```

_클라이언트_

```
Content-Range: bytes 1001-2000/2000
```

_서버_

## 5. 일반 정보

### 5-1. Form

Form은 유저 에이전트의 이메일 정보이다.  
검색 엔진 같은 곳에서 주로 사용하고 요청에서 사용한다.  
일반적으로 잘 사용되지 않는다.

### 5-2. Referer

Referer은 이전 웹 페이지 주소이다.  
A에서 클릭해 B로 이동하는 경우 `Referer: A` 를 포함해서 B를 요청한다. 이를 활용해 유입 경로를 분석할 수 있다.  
요청에서 사용된다.  
참고로, referer는 referrer의 오타이지만 수정할 수 없어 그냥 사용되고 있다.

### 5-3. User-Agent

User-Agent는 유저 에이전트 애플리케이션 정보이다. 클라이언트의 웹 브라우저 정보, 통계 정보, 어떤 종류의 브라우저에서 장애가 발생하는지 파악할 수 있다.  
요청에서 사용된다.

```
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Sfari/537.36
```

### 5-4. Server

Server는 요청을 처리하는 Origin 서버의 소프트웨어 정보이다.  
응답에서 사용된다.

참고로 HTTP를 요청하면 중간에 여러 프록시 서버를 거쳐 실제 내 요청에 대한 응답을 해주는 서버에 도달한다. 마지막에 도달하는 서버를 Origin이라고 한다.

```
Server: Apache/2.2.22 (Debian)
```

### 5-5. Date

Date는 메시지가 발생한 날짜와 시간을 나타낸다.  
응답에서 사용된다.

```
Date: Tue, 15 Nov 1994 08:12:31 GMT
```

---

[모든 개발자를 위한 HTTP 웹 기본 지식](https://www.inflearn.com/course/http-%EC%9B%B9-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC) 강의를 듣고 정리한 내용
