# [HTTP] 1. 인터넷 네트워크

> ### Index
>
> 1. 인터넷 통신
> 2. IP
> 3. TCP, UDP
> 4. PROT
> 5. DNS

## 1. 인터넷 통신

### 1-1. 인터넷에서 두 컴퓨터가 통신하는 방법

클라이언트 컴퓨터는 서버 컴퓨터에게 데이터를 전송하고, 서버가 그 데이터를 받으면 확인 응답을 보낸다.

만약 두 인터넷이 멀리 위치하면 여러 노드(인터넷 망)를 거쳐 전송하게 된다. 이때 인터넷 망은 복잡하게 얽혀있다. 이 상황을 어떻게 넘어갈까?

## 2. IP

### 2-1. IP 주소 부여

이 문제를 해결하기 위해 컴퓨터에게 **IP 주소**를 부여할 수 있다.

여기서 IP는 인터넷 프로토콜(Internet Protocol)이란 뜻으로, 지정한 IP 주소(IP Address)에 데이터를 전달하는 역할을 한다.  
데이터는 **패킷(Packet)**이라는 통신 단위로 전달된다. 패킷은 Package와 Pocket의 줄인말이다.

### 2-2. IP 패킷 정보

IP 패킷이 전송 데이터를 감싸는 형태를 띈다. IP 패킷에는 출발지 IP, 목적지 IP 등이 포함되어 있다.

_(우체국에 택배를 보낼 때 물건을 상자에 넣고 보낸 이와 받는 이 정보를 작성)_

### 2-3. 패킷 전달

클라이언트 컴퓨터는 출발지 IP, 목적지 IP, 전송 데이터를 인터넷에 전송한다. 인터넷 안의 여러 노드를 거쳐 서버 데이터에 도착하게 된다.

_(택배를 택배사에 전달해 운송하는 과정)_

서버 컴퓨터는 데이터를 무사히 받았다는 응답을 인터넷을 통해 클라이언트 컴퓨터에게 전송한다. 이때 클라이언트가 보낼 때 과정과 다른 과정으로 전달될 수 있다.

_(택배를 반품할 때 운송하는 택배 기사가 다를 수 있다)_

### 2-4. IP 프로토콜의 한계

1. 비연결성
   패킷을 받을 대상이 없거나 서비스 불능 상태여도 패킷이 전송된다.
   _(수신자가 그 집에 살고 있는 않는 상황)_

2. 비신뢰성
   중간에 패킷이 사라질 수 있다. _(택배 운송 중 누락)_
   패킷이 순서대로 오지 않을 수 있다. _(빨리 출발한 택배가 먼저 도착한다는 보장이 없다)_

3. 프로그램 구분
   같은 IP를 사용하는 서버에서 통신하는 애플리케이션이 둘 이상일 수 있다.  
   _(컴퓨터 한 대로 게임을 하면서 쇼핑할 수 있다)_

## 3. TCP, UDP

IP 프로토콜의 이러한 문제점은 **TCP**를 사용해 해결할 수 있다.

여기서 TCP는 전송 제어 프로토콜(Transmission Control Protocol)을 뜻한다.

### 3-1. 인터넷 프로토콜 스택의 4계층

| 계층                     | 스택      |
| ------------------------ | --------- |
| 애플리케이션 계층        | HTTP, FTP |
| 전송 계층                | TCP, UDP  |
| 인터넷 계층              | IP        |
| 네트워크 인터페이스 계층 |           |

### 3-2. 프로토콜 계층을 거치는 과정

![](https://velog.velcdn.com/images/yeonsubaek/post/ce2291cc-634f-46c6-b314-aea8f8bd90a9/image.jpeg)

전송 데이터를 IP 패킷으로 감싸기 전에 TCP 세그먼트로 감싼다.

### 3-3. TCP/IP 패킷 정보

TCP 세그먼트가 전송 데이터를 감싸고 IP 패킷이 TCP 세그먼트를 감싸는 형태를 띈다. TCP 패킷에는 출발지 PORT와 목적지 PORT, **전송 제어, 순서, 검증 정보** 등이 포함되어 있다.  
추가된 정보로 인해 IP에서 생긴 문제점을 해결할 수 있다.

### 3-4. TCP 특징

1. 연결 지향적이다.
   **TPC 3 way handshake**를 사용해 신뢰성을 높인다.  
   이것은 3가지 스텝으로 이루어져 있는데, 처음에는 클라이언트가 서버에게 SYN(접속 요청)을 보낸다. 그 다음에 서버가 SYN과 ACK(요청 수락)을 보내 연결을 수락한다. 마지막으로, 클라이언트가 전송 데이터를 포함한 ACK를 전송한다.  
   사실, 이 연결은 물리적인 것이 아닌 논리적인 것이다.

2. 데이터 전달을 보증한다.  
   데이터를 전송하면 잘 받았다는 응답을 한다.

3. 순서를 보장한다.  
   만약 [패킷1, 패킷2, 패킷3] 순서로 전송했는데 [패킷1, 패킷3, 패킷2] 순서로 도착한다면 패킷2부터 다시 보내도록 한다.

TCP는 신뢰할 수 있는 프로토콜로, 현재는 대부분 컴퓨터에서 사용하고 있다.

### 3-5. UDP 특징

UDP는 사용자 데이터그램 프로토콜(User Datagram Protocol)이라는 뜻으로, 기능이 거의 없는 하얀 도화지와 같다. 그럼에도 UDP를 사용하는 이유가 있다.

1. TCP를 최적화한다.
   UDP는 연결 지향적이지만 TCP way handshake를 사용하지 않는다. 또한, 데이터 전달 보증과 순서를 보장하지 않는다. 하지만 단순하고 빠르게 데이터 전송을 처리할 수 있다.

2. Port를 사용한다.  
   IP와 유사하지만 PORT를 사용한다는 점에서 큰 메리트가 있다. PORT는 애플리케이션에서 추가 작업을 필요로 할 때 유용하다.

## 4. PORT

만약 컴퓨터 한 대로 화상통화를 하며 게임을 하고 웹 브라우저까지 요청하면 패킷을 어떻게 구분해야 할까? TCP 세그먼트 정보를 다시 알아보자.

### 4-1. TCP에 포함된 PORT

IP 패킷 정보는 출발지와 목적지의 IP를 포함한다. 여기서 IP는 목적지 서버를 가리킨다.  
TCP 세그먼트에는 출발지와 목적지 PORT가 포함되어 있다. 여기서 PORT는 서버 안에서 돌아가는 애플리케이션을 가리킨다.

### 4-2. PORT란?

PORT는 같은 IP 내에서 프로세스를 구분하는 것이다.

_(아파트 내에 동/호수를 구분하는 것)_

PORT 번호는 0~65535 사이의 숫자를 할당할 수 있다. 하지만 0~1023은 잘 알려진 포트이기 때문에 사용하지 않는 것이 좋다.

클라이언트 컴퓨터는 게임과 화상통화, 웹 브라우저에 대한 각각의 PORT 번호를 가지고 있다. 게임 서버를 연결하기 위해 서버 컴퓨터의 게임과 화상통화 PORT 번호로 찾아간다. 웹 브라우저를 요청하기 위해서는 또 다른 서버 컴퓨터의 웹 브라우저 PORT 번호를 찾아간다.

## 5. DNS

IP 주소는 100.100.100.1과 같이 복잡한 숫자로 이루어져 있어 기억하기 어렵다. 또한 IP는 언제나 변경될 수 있기 때문에 사용하기 번거롭다.

DNS를 사용하면 IP주소를 사용하지 않아도 데이터를 전송할 수 있다. DNS란 도메인 네임 시스템(Domain Name System)이라는 뜻으로, 도메인 명을 IP 주소로 변환하는 역할을 한다.

클라이언트가 도메인 명을 입력하면 DNS 서버가 도메인 명에 해당하는 IP 주소를 응답하여 서버 컴퓨터에 접속하도록 한다.

_(전화번호부 또는 전화선 연결)_

---

[모든 개발자를 위한 HTTP 웹 기본 지식](https://www.inflearn.com/course/http-%EC%9B%B9-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC) 강의를 듣고 정리한 내용
