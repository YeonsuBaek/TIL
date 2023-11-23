# Clipboard API가 동작하지 않아!! (ft. execCommand)

오늘도 평소와 같이 회사에 출근해서 진행 중인 프로젝트 UI 테스트를 진행했습니다.
뭐 거창한 건 아니고 기능 하나씩 구현하면서 버그가 있나 확인하는 작업이에요.

화면 정의서랑 다르게 구현된거나 기능이 빠진 부분은 코드 훑어보면 후딱 처리하며 문제를 해결해 나가고 있는데,
어떤 기능 하나가 동작을 안하는데 도통 이유를 모르겠는 거에요🤬

오늘은 이 문제가 일어난 원인과 해결 방법에 대해 공유하려 합니다.

## 클립보드 복사가 안된다.

_(회사 코드를 그대로 가져올 수 없어서 바닐라 JS 예시로 들겠습니다)_

```html
<body>
  <button type="button">Click Here!</button>
  <script>
    const button = document.querySelector('button')

    const copyText = () => {
      navigator.clipboard.writeText(button.innerText)
    }

    button.addEventListener('click', copyText)
  </script>
</body>
```

위 코드는 `button` 을 클릭하면 'Click Here!' 텍스트가 클립보드에 복사되도록 합니다.

자바스크립트에서는 **Clipboard API**를 제공해서 웹 페이지의 텍스트나 이미지 같은 데이터를 클립보드에 복사하거나 클립보드에서 데이터를 가져올 수 있도록 합니다.

개발 작업 환경인 로컬에서는 해당 클립보드 기능이 제대로 동작하는 것을 확인할 수 있습니다.

그런데!!

테스트용 배포를 하고 http 환경에서 해당 기능을 시도해보니 클립보드 복사가 되지 않는 겁니다.

_뭔데... 오타도 안나고 로컬에서도 잘되는데... 뭐가 문제인데... (그리고 1시간 후)_

## Clipboard API가 제공이 안되네...

정말 안타깝게...  
Clipboard API는 브라우저 보안 프로토콜로 인해서 Safari 13.1 버전부터 https 환경에서만 지원한다고 합니다...

일반적으로 보안 상의 이유로 로컬 파일 시스템에 접근하거나 클립보드 같은 작업을 수행할 때 **동일 출처 정책**을 따릅니다.  
이는 웹 페이지가 자신의 출처에서만 리소스에 접근하도록 하는 것인데요.  
따라서 http에서는 보안 정책에 위반되어 브라우저에서 차단되었을 가능성이 높습니다.

보안을 강화하기 위해서는 https 사용을 권장합니다.  
https를 통한 통신은 데이터의 암호화를 제공하고, 브라우저는 https 환경에서 동작하는 페이지에 대해 더 높은 신뢰를 가집니다.

그럼 로컬 환경에서는 왜 되는 것이냐? 정확한 이유는 모르겠고 대충 추측하자면...  
로컬에서는 보안 정책이 상대적으로 덜 엄격하거나 특정한 보안 규칙이 적용되지 않았을 수 있습니다.

## 그래도 해결책은 있다.

Clipboard API 이전에 우리에겐 **execCommand** 메서드가 있었다!! _(발음을 어떻게 해야할 지도 모르겠는)_

안타깝게도 이 메서드는 더이상 지원되지 않아 점점 도태되어 사라질 것이라 하죠.

![](https://velog.velcdn.com/images/yeonsubaek/post/feba6dfe-d420-4be7-a4ae-7d3843e19f93/image.png)

그래도 어쩌겠습니까? 썩은 밤이라도 주워 먹어야죠🌰

```html
<body>
  <button type="button">Click Here!</button>
  <script>
    const button = document.querySelector('button')

    const copyText = () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(button.innerText)
      } else {
        const textArea = document.createElement('textarea')
        textArea.value = button.innerText
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
      }
    }

    button.addEventListener('click', copyText)
  </script>
</body>
```

`navigator.clipboard`가 존재하는, 즉 https에서는 기존과 동일하게 동작합니다.  
그렇지 않은 http에서는 다소 코드가 길고 복잡스러운 과정을 거치게 됩니다.

1. 값을 저장할 `textarea`라는 요소를 하나 만들어주고
2. 복사할 값을 해당 요소의 `value` 속성에 할당합니다.
3. 해당 요소를 html 문서에 더하고 선택합니다. 이는 클립보드에 복사할 내용을 선택하는 것과 같은 기능을 합니다.
4. `execCommand` 메서드를 사용해 클립보드에 복사 명령을 합니다.
5. 더이상 필요 없어진 요소를 문서에서 삭제합니다.

이런 썩은 밤 덕분에 어떤 환경에서도 마음 놓고 클립보드 기능을 사용할 수 있게 되었습니다
