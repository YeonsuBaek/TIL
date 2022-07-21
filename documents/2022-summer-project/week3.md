_2022.07.14..._

본격적으로 작업을 시작하였다.

우선 `GlobalHeader`와 `MainContent`의 마크업과 스타일 작업부터 차근차근...

컴포넌트를 이렇게 나누는게 맞는걸까?
이게 시멘틱한 태그일까?
css 이게 최선일까?

아직 나의 코드는 의문점 투성이이다. 나중에 리펙토링하는 시간을 가질 예정이다. 그 때 다시 돌아보면 외계어라고 느껴지겠지

<br>

_2022.07.16..._

`GlobalHeader`의 `location`을 클릭하면 `SearchModal`이 떠서 위치를 변경할 수 있도록 한다.

마크업과 스타일은 정말 간단하게 끝냈지만 클릭 시 페이지가 넘어가는 script에서 꽉 막혀버렸다.

우선 `SearchModal` 내의 `close-button`을 클릭하면 `SearchModal`이 닫히는 기능과
`display-button`을 클릭하면 토글되는 기능은 완성하였다.

<br>

_2022.07.18..._

컴포넌트 구조를 조금 바꾸었다. 원래는 `GlobalHeader`와 `SearchModal`이 형제 위치에 있었지만 `SearchModal`을 `GlobalHeader`의 자식으로 바꾸었다.

그리고 `location`을 클릭 시 자식 컴포넌트(`SearchModal`)에게 `isActive`라는 props를 `true`로 준다.

**드디어 성공!!**

이번주 작업을 모두 마치고 PR을 올렸다.
내일 회의에서 다같이 확인하고 merge 해야겠다.

> ## frontend
>
> ### components
>
> - GlobalHeader
> - MainContents
> - SearchModal
>
> ### functions
>
> - [x] body class Name에 따라 theme 변경
> - [x] `location` 클릭 시 `search-modal` 열림
> - [x] `back-button` 클릭 시 `search-modal` 닫힘
> - [x] `display-button` 클릭 시 `search-form` 열림

<br>

_2022.07.19..._

세 번째 회의를 하였다.

일주일 간의 작업물을 팀원들에게 보여주고 PR 올린 것도 main에 merge했다. 팀원들의 반응이 좋아서 뿌듯했다^^

본격적으로 프론트엔드와 백엔드를 연결하는 작업을 시작하기 전에,
백엔드 담당자들은 API를 JSON에서 MySql로 바꿔야하고 프론트엔드 담당자인 나는 MySql을 Vue.js에 넣는 방법을 알아야 한다.

고로 다음주 화요일까지 할 일은

- [ ] MySql에서 Vue.js로 데이터 연동하기
- [ ] MainContent 인터페이스 완성하기
