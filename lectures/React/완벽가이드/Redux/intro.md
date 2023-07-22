# Redux

## State의 3가지 종류

1. Local State

- 데이터가 변경되면서 하나의 컴포넌트에 속하는 UI에 영향을 미치는 상태
- ex) 사용자의 입력을 감지해 그 입력을 모든 키 입력과 함께 state 변수에 저장
- ex) 세부정보 필드를 키고 끄는 토글 버튼
- 보통 이러한 state를 `useState` 또는 `useReducer` 을 사용해 컴포넌트 안에서 로컬 상태를 관리함

2. Cross-Component State

- 하나가 아닌 다수의 컴포넌트에 영향을 미치는 상태
- ex) 모달 오버레이를 열거나 닫는 버튼이 있을 때 그런 모달 컴포너트는 다수 컴포넌트에 영향을 미침
- `useState` 또는 `useReducer` 을 사용해 prop을 주변에 넣어 prop chain(prop drilling)을 구축

3. App-Wide State

- 다수의 컴포넌트가 아닌 애플리케이션의 모든 컴포넌트에 영향을 미치는 상태
- ex) 사용자 인증
- `useState` 또는 `useReducer` 을 사용해 prop을 주변에 넣어 prop chain(prop drilling)을 구축

## Redux vs. useContext

### Redux란

크로스 컴포넌트 상태(Cross-Component State) 또는 앱 와이드 상태(App-Wide State)를 위한 상태 관리 시스템

### useContext의 잠재적 단점

1. 복잡한 설정과 관리

- 프로젝트의 크기가 커질수록 코드가 심하게 중첩됨
  - ```jsx
    return (
      <AuthContextProvider>
        <ThemeContextProvider>
          <UIInteractionContextProvider>
            <MultiStepFormContextProvider>
              <UserRegistration />
            </MultiStepFormContextProvider>
          </UIInteractionContextProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
    );
    ```

2. 성능

- 리액트 팀원의 공식적인 언급:
  - _테마를 변경하거나 인증 같은 빈도가 적은 업데이트에는 좋지만_
  - _데이터가 자주 바뀌는 경우 좋지 않다_

## Redux 작동 방식

- 리덕스(Redux)는 애플리케이션에 있는 **하나**의 중앙 데이터(상태, state) 저장소
- 한 가지 저장소에 전체 애플리케이션의 모든 상태 저장
- 데이터를 저장소에 저장해 컴포넌트 안에서 사용 가능
- 컴포넌트가 저장소를 구독하고 데이터가 변경될 때마다 저장소가 컴포넌트에 알려줌
- **절대 저장된 데이터를 직접 조작하지 않음**
- 데이터는 절대 컴포넌트에서 저장소 방향으로 흐르지 않음
- 이를 위해 저장소 데이터를 업데이트 하는 Reducer Function을 사용 ~~(useReducer과는 무관)~~
- 컴포넌트가 Action을 발송해 Reducer로 전달
- Reducer가 뱉은 새로운 상태를 중앙 데이터 저장소의 기존 상태를 대체
- 구독 중인 컴포넌트가 알림 받고 UI 업데이트

![](https://velog.velcdn.com/images/yeonsubaek/post/a92eebd7-02e2-431b-ba99-c991051c90c8/image.png)
