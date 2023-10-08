# [React Query] useQuery의 Query Key가 필요한 이유?

최근 회사에서 API 연결하는 작업을 하느라 React Query를 처음 사용해보았다.  
가장 많이 사용되는 작업은 데이터를 가져오는 것이었다.

리액트 쿼리(React Query)에서는 `useQuery`라는 훅(Hook)을 사용해 손쉽게 데이터를 가져올 수 있다.

[페이크 블로그 포스트를 가져오는 API](https://jsonplaceholder.typicode.com/)를 예시로 자세히 알아보자.

## 리액트 쿼리로 데이터 가져오기

```tsx
const postListUrl = 'https://jsonplaceholder.typicode.com/posts';

const getPostList = () => {
  return fetch(postListUrl).then((res) => res.json());
};

const { data: postList, refetch: refetchPost } = useQuery(
  // Query Key,
  getPostList
);
```

`useQuery` 훅은 쿼리 키와 쿼리 함수를 매개변수로 받는다.

쿼리 함수는 데이터를 가져오는 비동기 함수로, url을 패치(Fetch)하여 응답 결과를 받는다.

우리가 원하는 기능은 쿼리 함수가 다 해주는 것 같은데, 그렇다면 쿼리 키는 왜 작성해야 하는 걸까?

## 쿼리 키가 필요한 이유

리액트 쿼리의 핵심은 **쿼리 키를 기반으로 쿼리 캐싱을 관리하는 것**이다.

쿼리 캐싱이란 쿼리의 결과를 메모리에 저장하고 재사용하여 성능을 최적화하는 것이다.  
이를 통해 동일한 쿼리를 여러 번 수행할 때마다 매번 서버를 요청하지 않고 이미 가져온 데이터를 사용해 응답 시간을 줄일 수 있다.

쿼리 키는 쿼리를 식별하는 데 사용되는 유일한 식별자이기 때문에 쿼리 키가 없다면 다음과 같은 문제가 벌어진다.

1. 동일한 쿼리를 여러 번 수행하여도 각각 고유한 쿼리로 간주되기 때문에 캐시가 적용되지 않는다.
2. 쿼리 결과가 변경되더라도 컴포넌트가 리랜더링되지 않는다.
3. 만약 동시에 여러 쿼리가 실행되면 각 쿼리가 어떤 목적을 가지고 있는지 구분하기 어려워진다.

따라서 쿼리 키를 고유하고 의미있는 값으로 설정하여 쿼리가 가져오는 데이터를 잘 나타내는 것이 중요하다.

## 쿼리 키 지정하는 방법

#### 1. 문자열로 지정하기

```tsx
const { data: postList, refetch: refetchPost } = useQuery(
  'postList',
  getPostList
);
```

v3에서는 위와 같이 유니크한 문자열로 지정할 수 있다.

#### 2. 배열로 지정하기

```tsx
const { data: postList, refetch: refetchPost } = useQuery(
  ['postList'],
  getPostList
);
```

v4부터는 쿼리 키의 확장성과 유연성을 위하여 문자열을 배열로 감싼 형태로만 사용할 수 있다.

배열을 사용함으로써 여러 장점을 얻을 수 있다.

1. 동적으로 생성된 키를 사용하여 여러 쿼리를 추적하기에 더욱 적합하다.
2. 복잡한 키를 나타내기에 편리하다.
3. 동적으로 쿼리를 추가하거나 쿼리 그룹을 만드는 작업이 더욱 간편하다.

```tsx
const { data: post } = useQuery(['post', post.id], () =>
  getPostDetail(post.id)
);
```

위와 같이 문자열 뿐만 아니라 변수를 사용할 수도 있다.

변수를 사용한 경우 해당 변수가 바뀔 때마다 새로운 데이터를 가져오기 때문에 리스트의 아이템을 가져올 때 사용할 수 있다.

---

출처: https://tanstack.com/query/v4/docs/react/overview
