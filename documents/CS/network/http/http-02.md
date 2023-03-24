# URI와 웹 브라우저 요청 흐름

> ### Index
>
> 1. URI
> 2. 웹 브라우저 요청 흐름

## 1. URI

### 1-1. URI란?

URI란 Uniform Resource Identifier의 약자로, 리소스를 식별하는 통일된 방식이라는 의미를 가진다. 리소스(resource, 자원)은 URI로 식별할 수 있는 모든 것을 나타내며 제한이 없다.

_주민등록번호로 사람을 구별하는 것_

### 1-2. URL과 URN

URI는 위치(locator)와 이름(name) 또는 둘 다 추가로 분류될 수 있다. 따라서 URI 내에 URL(Rosource Locator)와 URN(Resource Name)이 위치한다.

URL은 리소스가 있는 위치를 지정하며 언제나 변할 수 있다. URN은 리소스에 이름을 부여하는 것으로 변하지 않는다.

URN만으로 실제 리소스를 찾을 수 있는 방법은 보편화 되지 않았기 때문에 URL을 사용해 웹 브라우저를 요청한다.

_책의 isbn 만으로 책을 찾을 수 없다_

### 1-3. URL 분석

> scheme://[userinfo@]host[:port][/path][?query][#fragment]
>
> ex)
> https:// www/google.com:433/search?q=hello&hl=ko

URL은 크게 프로토콜, 호스트명, 포트 번호, 패스, 쿼리 파라미터로 구성되어 있다.

#### scheme

> **scheme:**//[userinfo@]host[:port][/path][?query][#fragment]
>
> ex)
> **https:**// www/google.com:433/search?q=hello&hl=ko

스키마에서는 주로 프로토콜을 사용한다. 프로토콜은 어떤 방식으로 리소스에 접근할 것인지 규칙을 정하는 것으로, http와 https, ftp 등이 있다.

http는 80포트를, https를 443포트를 주로 사용하고 포트를 생략할 수도 있다.

참고로, https는 http에 강력한 보안이 적용된 것이다. (HTTP Secure)

#### userinfo

> scheme://**[userinfo@]**host[:port][/path][?query][#fragment]
>
> ex)
> https:// www/google.com:433/search?q=hello&hl=ko

유저인포는 URL에 사용자정보를 포함하여 인증하는 것으로, 거의 사용하지 않는다.

#### host

> scheme://[userinfo@]**host**[:port][/path][?query][#fragment]
>
> ex)
> https:// **www/google.com:**433/search?q=hello&hl=ko

호스트는 웹 페이지를 요청할 서버의 이름으로, 도메인명이나 IP주소를 직접 사용할 수 있다.

#### PORT

> scheme://[userinfo@]host**[:port]**[/path][?query][#fragment]
>
> ex)
> https:// www/google.com**:433**/search?q=hello&hl=ko

포트는 웹 서버에서 리소스에 접속하기 위해 사용하는 관문으로, 일반적으로 생략된다.

#### path

> scheme://[userinfo@]host[:port]**[/path]**[?query][#fragment]
>
> ex)
> https:// www/google.com:433**/search**?q=hello&hl=ko

패스는 리소스의 경로이며, 계층적인 구조를 가진다. 예를 들어 `/home/file1.jpg`, `/members`, `/members/100`, `/items/iphone12` 와 같이 표기할 수 있다.

#### query

> scheme://[userinfo@]host[:port][/path]**[?query]**[#fragment]
>
> ex)
> https:// www/google.com:433/search**?q=hello&hl=ko**

쿼리는 `key=value` 형태를 지니고 `?`로 시작해 `&`로 추가할 수 있다. 예를 들어 `?keyA=valueA&keyB=valueB`와 같이 표기할 수 있다.

웹 서버에 문자 형태의 파라미터를 제공하기 때문에 query parameter, query string 등으로 불린다.

#### fragment

> scheme://[userinfo@]host[:port][/path][?query]**[#fragment]**
>
> ex)
> https:// docs.spring.io/spring-boot/docs/current/reference/html/getting-
> started.html**#getting-started-introducing-spring-boot**

html 내부 북마크(id로 태그 이동)와 같이 URL이 지정하는 리소스의 세부 부분을 지정한다.

서버에 전송하는 정보가 아니기 때문에 플래그먼트가 없어도 웹 페이지를 불러올 수 있다.

## 2. 웹 브라우저 요청 흐름

### Step 1. 웹 브라우저에서 HTTP 요청 메세지 생성

> https://<span style="color:slateblue">www.google.com</span>:<span style="color:indianred">443</span>/search?q=hello&hl=ko

위와 같은 URL을 입력하면 먼저 DNS를 조회하고 HTTPS PORT를 생략한다. 그 후 HTTP 요청 메세지를 생성한다.

> <span style="color:gray">GET</span>/search?q=hello&hl=ko <span style="color:olivedrab">HTTP/1.1</span> <span style="color:slateblue">Host:www.google.com</span>

`GET` 은 서버에 데이터를 요청함을 표시한다. `HTTP/1.1` 은 HTTP 버전을, `Host:` 는 요청 메세지를 받을 서버이다.

### Step 2. HTTP 요청 메세지 전송

![](https://velog.velcdn.com/images/yeonsubaek/post/a0d18050-d551-4cff-81b6-91bb0afb084e/image.jpeg)

[인터넷 네트워크](https://velog.io/@yeonsubaek/HTTP-1.-%EC%9D%B8%ED%84%B0%EB%84%B7-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC)에서 프로토콜 계층을 거치는 과정과 동일하다.  
HTTP 요청 메세지를 IP와 PORT가 감싸는 형태이다.

_(우체국에 택배를 보낼 때 물건을 상자에 넣고 보낸 이와 받는 이 정보를 작성)_

### Step 3. 서버에서 HTTP 응답 메세지 생성

수 많은 노드를 거쳐 서버 컴퓨터에 도착하게 되면 TCP/IP 패킷은 벗긴다. 안전하게 도착한 HTTP 메세지를 해석하고 응답 메세지를 생성한다.

> HTTP/1.1 200 OK
> Content-Type: text/html;charset=UTF-8
> Content-Length: 3423
>
> ```html
> <html>
>   <body>
>     ...
>   </body>
> </html>
> ```

정상 응답임을 먼저 알리고, 응답 데이터의 형식과 HTML의 길이를 표시한다.

### Step 4. HTTP 응답 메세지 전송

TCP/IP 패킷으로 HTTP 응답 메세지를 포장해 웹 브라우저에 다시 전달한다.

웹 브라우저는 응답 메세지를 받으면 패킷을 벗기고 HTML을 렌더링하여 콘텐츠를 볼 수 있다.

---

[모든 개발자를 위한 HTTP 웹 기본 지식](https://www.inflearn.com/course/http-%EC%9B%B9-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC) 강의를 듣고 정리한 내용
