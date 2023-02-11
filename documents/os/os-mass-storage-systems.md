# [운영체제] Mass-Storage Systems

# Overview of Mass Storage Structure

- Magnetic disks
  - Transfer rate : 데이터 전송 시간
  - Positioning time
    - seek time : cylinder 찾는데 걸리는 시간
    - rotational latency : sector 가 header 밑에 도달하기 위해 돌아가는 시간

# Moving-head Disk Mechanism

![](https://velog.velcdn.com/images/yeonsubaek/post/92058a2c-7e1a-49db-9264-4e99089212c8/image.png)

- platter : disk 하나

# Disk Scheduling

- Minimize seek time
  - head 움직이는 거리와 정비례
- Disk bandwidth : 일정한 시간에 전송되는 데이터 양

## FCFS

- Fist Come First Start

- queue = 98, 183, 37, 122, 14, 124, 65, 67
  - queue 순서로 head 움직임
- head start : 53
- head 움직인 거리: 640 cylinders

![](https://velog.velcdn.com/images/yeonsubaek/post/9d2e8574-5802-45fb-acac-fb683db0f833/image.png)

## SSTF

- Shortest Seek Time First

- queue = 98, 183, 37, 122, 14, 124, 65, 67
  - 현재 head에서 가까운 것부터
- head start : 53

- head 움직인 거리: 236 cylinders

- 장점

  - 평균 seek time 을 가장 줄일 수 있는 적합한 방법이다.

- 문제점
  - 어떤 것이 가장 가까운 것일지 미래를 알 수 없다.
  - head에서 멀리 있는 것에게 starvation이 발생한다.

![](https://velog.velcdn.com/images/yeonsubaek/post/05bfc696-649c-453d-9729-174adb88ba5a/image.png)

## SCAN

- queue = 98, 183, 37, 122, 14, 124, 65, 67
  - head start 전에 head의 방향에 따라
    - head start보다 작으면 왼쪽으로
    - head start보다 크면 오른쪽으로
  - elevator algorithm : 단방향 진행
    - 0이나 199에 도달하면 방향을 바꾼다.
- head start : 53

- head 움직인 거리: 236 cylinders

![](https://velog.velcdn.com/images/yeonsubaek/post/ddb1cb3d-f09b-4628-b1ce-2174a914abee/image.png)

## C-SCAN

- circular-scan : 처음과 끝이 붙어있음

- queue = 98, 183, 37, 122, 14, 124, 65, 67
  - head start 전에 head의 방향에 따라
    - head start보다 작으면 왼쪽으로
    - head start보다 크면 오른쪽으로
  - elevator algorithm : 단방향 진행
    - 0에 도달하면 199로 이동한다.
    - 199에 도달하면 0으로 이동한다.
- head start : 53

- head 움직인 거리: 382 cylinders

- 장점
  - 양끝과 가운데 부분의 요청밀도에 편차를 줄일 수 있어, 대기시간을 좀 더 균등하게 제공할 수 있다.

![](https://velog.velcdn.com/images/yeonsubaek/post/ef2a2297-3965-4eea-8d1a-ed734f995b21/image.png)

## C-LOOK

- queue = 98, 183, 37, 122, 14, 124, 65, 67
  - head start 전에 head의 방향에 따라
    - head start보다 작으면 왼쪽으로
    - head start보다 크면 오른쪽으로
  - elevator algorithm : 단방향 진행
    - 가장 크거나 작은 수에 도달하면 방향을 바꾼다.
- head start : 53

- head 움직인 거리: 322 cylinders

![](https://velog.velcdn.com/images/yeonsubaek/post/f526b54e-d022-4f0f-95c6-2aa225592a0b/image.png)

- **C-SCAN과 C-LOOK의 차이점 알아두기**
