# [운영체제] 동기화 도구들 Synchronization Tools

공룡책 6장에서는 Synchronization Tools(동기화 도구들)에 대해 다룹니다.

여러 프로세스가 영역이나 데이터에 동시에 접근하면 생기는 문제와 해결하는 방법에 대해 알아볼 것 입니다.

---

# Background

- 프로세스는 동시에 실행될 수 있습니다.
- 언제든지 중단될 수 있으며, 부분적으로 실행을 완료합니다.
- 공유된 데이터의 동시 접근은 데이터의 불일치를 발생할 수 있습니다.

## comsumer-producer problem

- 모든 buffer를 채우는 문제
- buffer 안의 원소 개수를 `counter`로 선언
- `counter` 의 초기값은 `0`

#### code for producer

```c
while (true) {
  /* produce an item in next produced */
  while (counter == BUFFER_SIZE);
   /* buffer가 full일 때까지 생산 */
  buffer[in] = next_produced;
  in = (in + 1) % BUFFER_SIZE; // index + 1
  counter++;
}
```

#### code for consumer

```c
while (true) {
  while (counter == 0);
   /* 물건 생산이 끝날 때까지 소비 */
  next_consumed = buffer[out];
  out = (out + 1) % BUFFER_SIZE;
  counter--;
  /* consume the item in next consumed */
}
```

# Race Condition

- `counter++` ➡ producer
- `counter--` ➡ consumer

1. `memory` 안에 들어있는 count 값을 `CPU`로 이동  
   producer: `register1 = counter`  
   consumer: `register2 = counter`

2. `CPU`에서만 데이터 변경 가능  
   producer: `register1 += 1`  
   consumer: `register2 -= 1`

3. 다시 `memory`로 이동  
   producer: `counter = register1`  
   consumer: `counter = register2`

- `counter = 5` 라는 초기값을 가지고 실행:

| execute               | register                |
| --------------------- | ----------------------- |
| `register1 = counter` | register1 = 5           |
| `register1 += 1`      | register1 = 6           |
| `resiger2 = counter`  | register2 = 5           |
| `register2 -= 1`      | register2= 4            |
| `counter = register1` | counter = register1 = 6 |
| `counter = register2` | counter = register2 = 4 |

<br>
> **문제**
> 두 프로세스를 함께 사용하면 최종값이 `5`가 되지 않는다.
>
> **원인** 
> 두 개의 프로세스가 동시에 `counter`를 조작한다.  
>
> **해결**  
> 한 번에 하나의 프로세스만이 `counter`를 조작하도록 보장해야한다.

# Critical Section Problem

- critical section 내에서는 여러 프로세스들이 같이 접근할 수 있다.

> ### critical section 접근 과정
>
> 1. **entry section**  
>    여러 프로세스 중 하나만 critical section에 들어갈 수 있다.  
>    나머지 프로세스는 끝날 때까지 기다려야 한다.
>
> 2. **exit section**  
>    프로세스가 끝나면 기다리는 프로세스 중 하나가 critical section에 들어갈 수 있도록 한다.
>
> 3. **remainder section**  
>    그 외 나머지 부분 (중요하지 않음)

#### 프로세스 `Pi`의 구조

```c
do {
  entry section
    critical section
  exit section
    remainder section
} while (true);
```

#### Algorithm for Process Pi

- 프로세스 중 `i` 는 본인, `j` 는 상대방이다.

```c
do {
  /* entry section*/
  while (true == j);  // 상대 차례일 경우 본인은 기다림
    critical section
  /* exit section*/
  turn = j;  // 상대방의 입장이므로, j는 본인
    remainder section
} while (true);
```

# Solution to Critical-Section Problem

1. **Mutual Exclusion**  
   프로세스 `i`가 자신의 critical section에서 실행 중이라면, 다른 프로세스들은 실행될 수 없다.

2. **Progress**  
   자신의 critical section에서 실행중인 프로세스가 없고 진입하려고 하는 프로세스들만 있다면, remainder section에서 실행 중이지 않은 프로세스들만 다음에 누가 critical section에 들어갈 수 있는지 결정할 수 있다.

3. **Bounded Waiting**  
   한 가지 프로세스가 critical section에 들어가려는 요청을 하고, 그 요청이 수락이 되기 전까지 다른 프로세스가 자신의 critical section에 들어갈 수 있게 허락해주는 수에는 한계가 있다.

## Peterson's Solution ⭐

- `int turn`

  - 누가 들어갈지 결정
  - 2개 프로세스가 같이 사용

- `Boolean flag[2]`
  - 초깃값은 `false`, 들어가길 원하면 `true`로 변경
  - 각자 사용
  - **문제**: 둘 다 들어가고 싶어하면?  
    `turn` 값에 따라 우선순위 결정된다.

```c
// i, j 값을 주의하자!
do {
  flag[i] = true;
  turn = j;
  while (flag[j] && turn == j); // 상대의지 okay && 상대차례
    critical section
  flag[i] = false; // 상대 flag 다시 false로 변경
    ramainder section
} while (true);
```

| P1             | P2             |
| -------------- | -------------- |
| i = 1          | i = 2          |
| j = 2          | j = 1          |
| flag[1] = true | flag[2] = true |

- `turn = 1` 이 `P1` 인 경우 `flag[1] = false`

- 프로세스가 2개이기 때문에 Bounder Waiting을 하지 않는다.

## Using Locks

- `lock` 을 통해 critical section 접근 가능

- 10개의 프로세스 중 1개는 프로세스 `lock` 을 가지고 9개는 그냥 기다린다.
  - 프로세스 종료 후 9개 중 하나에게 `lock` 을 준다.

```c
do {
  acquire lock // critical section에 들어가길 요청
    critical section
  release lock // lock 반납
    remainder section
} while (true);
```

## Synchronization Hardware

- 요즘 컴퓨터는 **Atomic(원자적인)** 하드웨어 지침을 제공한다.
  - 한가지 프로세스를 수행 중일 때 다른 것들은 수행 불가능하다.
  - 선점 당하지 않는다.

### test_and_set Instruction

```c
boolean test_and_set(boolean *target) {
  boolean rv = *target;
  *target = true;

  return rv;
}

// 변수 lock의 초기값은 false
do {
  while (test_and_set(&lock)) { // lock이 true일 때까지
    ; /* do nothing */
  }

  /* critical section */

  lock = false;

  /* raminder section */
}
```

### compare_and_swap Instruction

```c
int compare_and_swap(int *value, int expected, int new_value) {
  int temp = *value;

  if (*value == expected)
    *value = new_value;

  return temp;
}

// 변수 lock의 초기값은 0
do {
  while (compare_and_swap(&lock, 0, 1) != 0) { // lock이 true일 때까지
    ; /* do nothing */
  }

  /* critical section */

  lock = 0;

  /* remainder section */
} while (true);
```

| n번째 수행 | temp | lock | result                      |
| ---------- | ---- | ---- | --------------------------- |
| 1번째 수행 | 0    | 0    | temp == expected ➡ lock = 1 |
| 2번째 수행 | 0    | 1    | temp != expected ➡ waiting  |

### Bounded-waiting Mutual Exclusion with test_and_set.

```c
do {
  waiting[i] = true;
  key = true;
  while (waiting[i] && key) {
    key = test_and_set(&lock);
  }

  waiting[i] = false;

  /* critical section */

  j = (i + 1) % n;
  while ((j != i) && !waiting[j]) {
    j = (j + 1) % n;
  }

  if (j == i) {
    lock = false;
  } else {
    waiting[j] = false;
  }

  /* remainder section */
} while (true);
```

# Semaphore

- Semaphore **S**: 정수 변수
  - `wait()`와 `signal()`로만 접근 가능하다.
- `wait()`는 `P()` 라고 불린다.

```c
wait(S) {
  while (S <= 0) {
    ; // busy wait
  }

  S--;
}
```

- `signal()`은 `V()`라고 불린다.

```c
signal(S) {
  S++;
}
// wait는 존재하지 않는다.
```

## Semaphore Usage

- Counting semaphore: 정수 값은 제한 없는 영역을 갖는다.

- Binary semaphore: 정수 값은 0과 1 사이의 값만 갖는다.

```c
// synch라는 semaphore 선언, 0으로 초기화
P1:
  S1;
  signal(synch); // +1
P2:
  wait(synch); // +1 -1 = 0
  S2;
```

## Semaphore Implementation

> - Lock 사용 시 문제점 : **busy waiting**
>   - critical section에서 1개의 프로세스만 수용하므로 나머지는 waiting 된다. 이 과정에서 CPU가 사용된다.
> - **busy waiting** 해결책
>   - `wait`와 `signal` 의 정의 수정
> - CPU를 계속 사용하는 것을 방지하기 위한 두 가지 큐
>   - `block` : `list` 조건에 맞으면 더이상 체크하지 않음
>   - `wakeup` : 기다리고 있는 프로세스 중 한 명을 들여보내줌 ➡️ 재시작

```c
wait(semaphore *S) {
  S->value--;
  if (S->value < 0) {
    /* add this process to S->list; */
    block(P);
  }
}

signal(semaphore *S) {
  S->value++;
  if (S->value <= 0) {
    /* remove a process P from S->list; */
    wakeup(P);
  }
}
```

# Deadlock and Starvation

- Deadlock

| P0                                                                    | P1                                                                    |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| wait(S); // 1 -> 0<br>wait(Q); // waiting<br>signal(S);<br>signal(Q); | wait(Q); // 1 -> 0<br>wait(S); // waiting<br>signal(Q);<br>signal(S); |

두 프로세스가 동시에 waiting하여 대기 중인 프로세스 중 하나만 야기될 수 있는 `signal()` 을 무한정 기다리는 상황이 발생한다.

- Starvation
  - 우선순위가 낮은 프로세스는 무기한으로 차단된다.

# Classical Problems of Synchronization

## Bounded-Buffer Problem

- Semaphore `mutex` = 1  
  : 현재 buffer에 들어갈 수 있는 프로세스 개수

- Semaphore `full` = 0  
  : 현재 buffer에 몇 개의 원소가 있는가

- Semaphore `empty` = n  
  : 현재 buffer의 빈 공간 크기는 얼마인가

#### producer process

```c
do {
  /* produce an item in next_produced */
  // 수행 전
  wait(empty); // n - 1
  wait(mutex); // 1 - 1 = 0, buffer에 원소를 넣어줄 때 다른 프로세스 접근 금지시키기

  /* add next_produced to the buffer, 버퍼에 접근 후 수행 */
  // 수행 후
  signal(mutex); // n - 1 + 1 = n, 다른 프로세스가 접근 가능하도록 하기
  signal(full); // 0 + 1 = 1
} while (true);
```

#### consumer process

producer와 반대로 진행된다.

```c
do {
  wait(full); // 0
  wait(mutex);  // 1 - 1 = 0

  /* remove an item from buffer to next_consumed */

  signal(mutex);  // 0 + 1 = 1
  signal(empty); // n - 1

  /* consume the item in next_consumed */
} while (true);
```

## Readers-Writers Problem

- 프로세스가 Reader나 Writer 둘 중 하나만 사용할 수 있다.
  - Readers: 읽기만 가능, 업데이트 불가능
  - Writer: 읽기 쓰기 가능

#### writer process

```c
// rw_mutex 초기값: 1
do {
  wait(rw_mutex); // 다른 writer 접근 불가

  /* waiting is performed */

  signal(rw_mutex);
} while(true);
```

#### reader process

```c
// mutex 초기값: 1, read_count 초기값: 0
do {
  wait(mutex); // 초기값: 0
  read_count++;

   // 첫번째 process인 경우
  if (read_count == 1) {
    wait(rw_mutex); // write 못들어오도록 막음
  }

  // 두번째 프로세스부터는
  signal(mutex);
  /* reading is performed */
  wait(mutex);
  read_count--;

   // 마지막 프로세스인 경우, critical section에 아무것도 없으므로
  if (read_count == 0) {
    signal(rw_mutex); // write 허용
  }

  signal(mutex);
} while (true);
```

## Dining-Philosophers Problem

- 문제 설명

  - 배고프면 의자에 앉는다.
    - 양쪽 젓가락 모두 사용해야 식사를 할 수 있다.
  - 배가 고프지 않으면 생각만 한다.

  - 5명 모두 앉고 오른쪽 젓가락을 들면 모두 식사를 할 수 없다. ➡ **Deadlock** 상태

  - `chopstick[5]`은 1로 초기화되고 젓가락이 사용되면 0으로 바뀐다.

- **Deadlock** 해결 방법
  - 동시에 4명의 철학자를 앉힌다.
  - 철학자가 두 젓가락을 모두 사용할 수 있는 경우에만 젓가락을 집도록 허용한다.
  - asymmetric(비대칭) 방법을 사용한다.
    - 홀수 번째 철학자는 왼쪽 젓가락을 집은 후 오른쪽 젓가락을 집게하고, 짝수 번째 철학자는 오른쪽 젓가락을 집은 후 왼쪽 젓가락을 집게 한다.

```c
do {
  wait(chopstick[i]);
  wait(chopstick[(i + 1) % 5]);
  // 1 - 1 = 0
    // eat
  signal(chopstick[i]);
  signal(chopstick[(i + 1) % 5]);
  // 0 + 1 = 1
    // think
} while (true);
```

# Problems with Semaphores

아직 이해하지 못해서 나중에 이어서 쓰겠음

# Monitors

아직 이해하지 못해서 나중에 이어서 쓰겠음
