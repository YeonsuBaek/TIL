# 리소스 낭비 No! 성능 개선하기 (ft. Debounce)

오늘도 어김없이 회사에서 열심히 코드를 보고 또 보다가... Slider 컴포넌트 코드가 눈에 띄어 열심히 톺아보았습니다.

그런데 한 가지 불편한 점을 발견하게 되는데요👀👀👀

바로 슬라이더를 움직일 때마다 함수가 계속 호출되는 것입니다.

만약 현재 값이 1인데 100으로 이동한다면 함수가 100번이나 호출되어야 한다는 점!!

지금부터 이 부분을 개선하는 방법을 함께 알아봅시다.

## Slider 움직일 때마다 리소스 소비.. 최선인가

_(회사 코드를 그대로 가져올 수 없어서 MUI 예시로 들겠습니다)_

```jsx
export default function SliderExample() {
  const [value, setValue] = useState(30)

  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue)
  }

  return (
    <Box sx={{ width: 300 }}>
      <Slider value={value} onChange={handleChange} />
    </Box>
  )
}
```

위 코드는 슬라이더 컴포넌트를 가져와 좌우로 움직이면 값이 변하는 코드입니다.

현재 값에서 다음 값으로 이동할 때 그 사이 트랙을 모두 지나는 것이 슬라이더의 핵심이죠.  
하지만 여기서 치명적인 단점을 발견할 수 있습니다.

![](https://velog.velcdn.com/images/yeonsubaek/post/9b63ba22-5ad1-4eb9-9525-808ecf620208/image.png)

숫자 하나를 지날 때마다 `handleChange` 함수를 호출하여 **불필요한 리소스를 소비**하는 것입니다.

솔직히 중간 값은 자연스럽게 빼먹어도 될 것 같은데... 어떻게 해결할 수 있을까요?

## debounce로 최적화 해보자!

바로, **debounce**를 사용하면 됩니다.

저처럼 디바운스라는 개념이 낯선 분들을 위해 간략하게 정리하자면,  
연속해서 같은 행동을 취해도 오직 한 번만 함수를 실행하는 것입니다.

```jsx
const debounce = (func, timeout = 300) => {
  let timer
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }
}
```

`debounce` 는 위와 같이 작성할 수 있습니다.

1. 실행될 함수인 `func`와 디바운스 시간 간격인 `timeout`을 매개변수로 받고
2. 이전에 예약된 함수 호출을 취소하고 새로운 호출을 예약하는 데 사용될 `timer` 를 초기화한다.
3. `timer` 에 값이 존재하는 경우, 즉 이전에 예약된 함수 호출이 있으면 취소한다.
4. 주어진 시간이 경과한 후 함수를 실행한다.

```jsx
return (
  <Box sx={{ width: 300 }}>
    <Slider value={value} onChange={debounce(handleChange, 20)} />
  </Box>
)
```

`onChange` 에 `debounce` 함수를 적용하여 결과를 확인해봅시다.

![](https://velog.velcdn.com/images/yeonsubaek/post/62c337ce-8a96-4af4-8287-16904f4060f3/image.png)

20ms 사이에 이동한 구간에서는 `onChange` 함수가 호출되지 않는 것을 확인할 수 있다.

사용자 입장에서 슬라이드가 20ms만큼 느리게 움직여 보이는 단점이 있지만, 성능을 개선하는 목표는 달성하였다 😋

## 직접 구현하기 귀찮으니 라이브러리를 써보자

`debounce` 를 자바스크립트로 구현할 수도 있지만 라이브러리를 사용하여 더욱 쉽게 구현할 수 있다.

> npm i --save lodash

```jsx
import { debounce } from 'lodash'

export default function SliderExample() {
  const [value, setValue] = useState(30)

  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue)
  }

  return (
    <Box sx={{ width: 300 }}>
      <Slider value={value} onChange={debounce(handleChange, 20)} />
    </Box>
  )
}
```

정말 간단하다... 💨💨💨

---

https://www.freecodecamp.org/news/javascript-debounce-example/  
https://mui.com/material-ui/react-slider/  
https://lodash.com/
