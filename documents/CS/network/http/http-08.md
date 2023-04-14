# HTTP 헤더2 - 캐시와 조건부 요청

> ### Index
>
> 1. 캐시 기본 동작
> 2. 검증 헤더와 조건부 요청1
> 3. 검증 헤더와 조건부 요청2
> 4. 캐시와 조건부 요청 헤더
> 5. 프록시 캐시
> 6. 캐시 무효화

## 1. 캐시 기본 동작

### 1-1. 캐시가 없을 때

![](https://velog.velcdn.com/images/yeonsubaek/post/85d90b71-11b7-4966-b64d-bc8518f4ad76/image.jpeg)

최초로 소스를 요청하면 서버에서 HTTP 헤더와 바디를 전송한다.  
두 번째로 소스를 요청하면 동일한 동작을 반복한다.

데이터가 변경되지 않아도 계속 네트워크를 통해서 데이터를 다운로드 받아야 한다.  
인터넷 네트워크는 매우 느리고 비싸고 브라우저 로딩 속도가 느려진다. 따라서 사용자는 느린 경험을 하게 된다.

### 1-1. 캐시 적용

![](https://velog.velcdn.com/images/yeonsubaek/post/ded5a924-3ea8-4f40-96e2-99024701bef4/image.jpeg)

최초로 소스를 요청하면 캐시가 유효한 시간(초)를 나타내는 `cache-control` 헤더를 포함한 HTTP 헤더와 바디를 전송한다.

![](https://velog.velcdn.com/images/yeonsubaek/post/b9990399-ab87-4a5b-b998-c0f22362c2cc/image.jpeg)

응답 결과는 브라우저 캐시에 유효 시간동안 저장된다.

![](https://velog.velcdn.com/images/yeonsubaek/post/acedb2eb-f99b-48aa-ad1e-9187f88de2d1/image.jpeg)

두 번째 요청부터는 서버에 직접 요청하지 않고 캐시 유효 시간을 검증하여 브라우저 캐시에서 조회한다.

캐시 덕분에 캐시 가능 시간동안 네트워크를 사용하지 않아도 된다.  
비싼 네트워크 사용량을 줄일 수 있고 브라우저 로딩 속도가 빨라진다. 따라서 사용자는 빠른 경험을 하게 된다.

만약 캐시 시간이 초과하면 서버를 통해 데이터를 다시 조회하고 캐시를 갱신한다. 이때 다시 네트워크 다운로드가 발생한다.

사실 시간이 초과해서 다시 네트워크를 사용하는 것은 아까운 것 같다. 이것을 해결할 수 있는 방법이 없을까?

## 2. 검증 헤더와 조건부 요청1

### 2-1. 캐시 시간 초과

캐시 유효 시간이 초과해서 서버에 다시 요청하면 서버에서 기존 데이터를 변경하거나 변경하지 않는 두 가지 상황이 나타난다.

캐시 만료 후에도 서버에서 데이터를 변경하지 않는다면 데이터를 재전송하는 대신에 저장해 두었던 캐시를 재사용할 수 있다. 단, 클라이언트의 데이터와 서버의 데이터가 같다는 사실을 확인할 수 있는 방법이 필요하다.

### 2-1. 검증 헤더 추가

![](https://velog.velcdn.com/images/yeonsubaek/post/f895fd02-9b31-4f2f-bee7-5a35404330b7/image.jpeg)

첫 번째로 요청을 하면 데이터가 마지막에 수정된 시간을 나타내는 `Last-Modified` 헤더를 포함한 HTTP 헤더와 바디를 응답한다.  
그리고 응답 결과를 캐시에 저장한다.

![](https://velog.velcdn.com/images/yeonsubaek/post/99eb8c80-e570-4aa5-8666-8e11b0de2bae/image.jpeg)

다음 요청부터는 데이터 최종 수정일인 `if-modified-since` 을 포함하여 요청한다. 이때 `if-modified-since` 를 조건부요청이라고 한다.  
만약 캐시 시간이 초과한다면 캐시가 갖고 있는 데이터 최종 수정일과 서버가 갖고 있는 데이터 최종 수정일을 비교한다.

![](https://velog.velcdn.com/images/yeonsubaek/post/17306d1d-13ee-4147-b964-eb2981402db4/image.jpeg)

데이터가 아직 수정되지 않았음을 판단하면 상태 코드를 `304 Not Modified` 로 설정하고 검증헤더인 `Last-Modified` 헤더를 포함하고 HTTP 바디를 제외한 채 전송한다. HTTP 헤더만 전송하기 때문에 용량을 아낄 수 있다.  
브라우저 캐시에서 응답 결과를 재사용하고 헤더 데이터만 갱신하여 웹 브라우저가 다시 캐시에서 조회할 수 있도록 한다.

### 2-3. 정리

캐시 유효 시간이 초과해도 서버의 데이터가 갱신되지 않으면 `304 Not Modefied` 와 헤더 메타 정보만 응답한다.

클라이언트는 서버가 보낸 응답 헤더 정보로 캐시의 메타 정보를 갱신하고 캐시에 저장되어 있는 데이터를 재활용한다.

결과적으로 네트워크 다운로드가 발생하지만 용량이 적은 헤더 정보만 다운로드하여 매우 실용적인 해결책이 된다.

## 3. 검증 헤더와 조건부 요청2

### 3-1. 검증 헤더와 조건부 요청

검증 헤더는 캐시 데이터와 서버 데이터가 같은지 검증하는 데이터로, Last-Modified와 ETag가 있다.

조건부 요청 헤더는 검증 헤더로 조건에 따른 분기로, Last-Modifired를 사용하는 If-Modified-Since와 ETag를 사용하는 If-None-Match가 있다.  
만약 조건이 만족하면 200 OK 상태코드를, 그렇지 않다면 304 Not Modified를 응답한다.

#### 예시

만약 데이터가 변경이 되지 않았다면 `If-Modified-Since` 는 False이다. 따라서 `304 Not Modified` 와 헤더 데이터만 전송한다. 전송 용량은 헤더 데이터 만큼만 차지한다.

데이터가 변경되었다면 `If-Modified-Since` 는 True이다. 따라서 `200 OK` 와 모든 데이터를 전송한다. 전송 용량은 헤더와 바디 데이터 전체이다.

#### Last-Modified와 If-Modified-Since의 단점

- 1초 미만 단위로 캐시 조정이 불가능하다.
- 날짜 기반의 로직을 사용한다.
- 데이터를 수정해서 날짜가 다르지만, 같은 데이터를 수정해서 데이터가 똑같은 경우 사용하기 어렵다.
- 서버에서 별도의 캐시 로직을 관리하고 싶은 경우 사용하기 어렵다.

#### ETag와 If-None-Match

ETag(Entity Tag)는 캐시용 데이터에 날짜가 아닌 임의의 고유한 버전 이름을 달아둔다. 데이터가 변경되면 Hash를 다시 생성하여 이름을 바꾼다.  
단순하게 ETag만 보내서 같으면 유지하고 다르면 다시 받도록 한다.

### 3-2. 검증 헤더 추가

![](https://velog.velcdn.com/images/yeonsubaek/post/855b700b-5099-4e99-9135-05fcffa84a3f/image.jpeg)

처음으로 요청이 들어오면 임의의 이름을 `ETag` 헤더에 넣어 응답 결과를 브라우저 캐시에 전송한다.

캐시 시간이 초과하면 클라이언트가 브라우저 캐시가 가지고 있는 `ETag` 값을 가져와 `If-None-Match` 헤더에 넣어 서버에 전송한다.

만약 서버의 `ETag` 와 클라이언트의 `If-None-Match` 가 동일하다면 데이터가 아직 수정되지 않은 것이다.

![](https://velog.velcdn.com/images/yeonsubaek/post/ef8a0645-65b5-4fc1-bfda-394da86bff28/image.jpeg)

데이터가 아직 수정되지 않았음을 판단하면 상태 코드를 `304 Not Modified` 로 설정하고 `ETag` 헤더를 포함하고 HTTP 바디를 제외한 채 전송한다.  
브라우저 캐시에서 응답 결과를 재사용하고 헤더 데이터만 갱신하여 웹 브라우저가 다시 캐시에서 조회할 수 있도록 한다.

### 3-3. 정리

단순하게 ETag만 서버에 보내서 같으면 유지하고 다르면 다시 받는다.  
이 때 캐시 제어 로직을 서버에서 완전히 관리한다.

클라이언트는 단순히 이 값을 서버에 제공하고 캐시 메커니즘을 모른다.

## 4. 캐시와 조건부 요청 헤더

### 4-1. 캐시 제어 헤더

#### Cache-Control

`Cache-Control: max-age` 는 캐시 유효 시간을 초 단위로 나타낸 것이다.

`Cache-Control: no-cache` 는 데이터가 캐시해도 되지만 항상 원(origin) 서버에 검증하고 사용해야 하는 것이다.

`Cache-Control: no-store` 는 데이터에 민감한 정보가 있으므로 저장하지 않고 최대한 빨리 삭제해야 하는 것이다.

#### Pragma

`Pragma: no-cache` 는 캐시 제어 하위 호환으로 지금은 거의 사용되지 않는다.

#### Expires

`Expires` 는 캐시 만료일 지정 하위 호환으로, 캐시 만료일을 정확한 날짜로 지정한다.  
지금은 더 유연한 `Cache-Control: max-age` 를 권장한다.  
만약 `Cache-Control: max-age` 와 함께 사용하면 `Expires` 는 무시한다.

### 4-2. 검증 헤더와 조건부 요청 헤더

검증 헤더는 `ETag` 와 `Last-Modified` 이다.

조건부 요청 헤더는 `ETag` 값을 사용할 때 If-Match와 If-None-Match를, `Last-Modified` 값을 사용할 때 If-Modified-Since와 If-Unmodified-Since를 사용한다.

## 5. 프록시 캐시

![](https://velog.velcdn.com/images/yeonsubaek/post/8dbb636a-abc2-4705-a80b-c35464b57a1b/image.jpeg)

클라이언트가 원(origin) 서버를 접근하면 요청할 때마다 시간이 오래 걸린다.

![](https://velog.velcdn.com/images/yeonsubaek/post/06dbde9f-8603-4c36-8feb-7e00c8cea98f/image.jpeg)

프록시 캐시를 도입하면 최초 요청 시에만 원 서버에 접근하고 그 후에는 프록시 캐시 서버에 접근하기 때문에 속도가 빨라진다.

클라이언트는 private 캐시, 프록시 캐시 서버는 public 서버라고 한다.

### 5-1. Cache-Control 기타

- `Cache-Control: public` : 응답이 public 캐시에 저장되어도 된다.
- `Cache-Control: private` : 응답이 해당 사용자만을 위한 것이므로 private 캐시에 저장해야 한다. (기본값)
- `Cache-Control: s-maxage` : 프록시 캐시에만 적용되는 max-age
- `Age: 60` (HTTP 헤더) : 원 서버에서 응답 후 프록시 캐시 내에 머문 시간(초 단위)

## 6. 캐시 무효화

확실히 캐시 무효화를 응답하기 위해 다음을 헤더에 포함해야 한다.

```
Cache-Control: no-cache, no-store, must-revalidate
Pragma: no-cache
```

### 5-1. Cache-Control 확실한 캐시 무효화

`Cache-Control: no-cache` 는 데이터를 캐시해도 되지만 항상 워 서버에 검증하고 이용해야 하는 것이다.

`Cache-Control: no-store` 는 데이터에 민감한 정보가 있으므로 저장하면 안되는 것이다. 메모리에서 사용하고 최대한 빨리 삭제해야 한다.

`Cache-Control: must-revalidate` 는 캐시 만료 후 최초 조회시 원 서버에 검증해야 하는 것이다. 원 서버에 접근을 실패하면 반드시 오류가 발생해야 한다.

`Pragma: no-cache` 는 하위 호환이다.

### 5-2. no-cache VS must-revalidate

![](https://velog.velcdn.com/images/yeonsubaek/post/1e5484b8-c0a6-4272-a1cb-9d6a339f7212/image.jpeg)

no-cache는 캐시 서버를 요청하면 프록시 캐시가 원 서버에 요청하여 원 서버가 검증한다.  
원 서버가 304 응답을 하면 프록시 캐시는 브라우저 캐시에 저장하여 클라이언트는 브라우저 캐시에서 캐시 데이터를 사용한다.

![](https://velog.velcdn.com/images/yeonsubaek/post/a697582a-b5f8-4b19-bbff-2d3ea949d38a/image.jpeg)

만약 프록시 캐시에서 원 서버로 가는 네트워크가 순간 단절된다면 접근할 수 없다. 이 때 캐시 서버 설정에 따라서 캐시 데이터를 단환할 수 있다. 즉 오류보다는 오래된 데이터라도 보여주는 것이다. 따라서 200 OK 응답이 클라이언트로 전송할 것이다.

![](https://velog.velcdn.com/images/yeonsubaek/post/04714b14-181c-4775-ad04-11b2908e7245/image.jpeg)

must-revalidate는 프록시 캐시와 원 서버의 네트워크가 단절되면 항상 오류를 발생해야 한다. 예를 들어 은행 앱에서 송금하는 과정에서 네트워크 단절이 일어나면 이전 통장 잔고가 아닌 오류 메세지를 띄워야 한다. 따라서 504 Geteway Timeout 응답이 클라이언트로 전송할 것이다.

---

[모든 개발자를 위한 HTTP 웹 기본 지식](https://www.inflearn.com/course/http-%EC%9B%B9-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC) 강의를 듣고 정리한 내용
