# Text To Speech 앱 만들기 (feat. Speech Synthesis)

[Correct Sentences](https://github.com/YeonsuBaek/learning-english)를 진행하면서 교정된 문장을 음성으로 읽어주는 기능이 있으면 좋을 것 같다 생각했다.

자바스크립트는 내장 Web Speech API인 **Speech Synthesis**를 제공한다. 별도의 라이브러리 없이 간단하게 TTS(Text To Speech) 앱을 만들 수 있다.

## step 1. HTML, JavaScript 준비하기

```html
...
<!-- index.html -->
<body>
  <button class="voice-button">텍스트 듣기</button>
  <script src="./voice.js"></script>
</body>
...
```

```js
// index.js
const button = document.querySelector('.voice-button');

button.addEventListener('click', () => {
  console.log(button);
});
```

버튼을 클릭하면 이벤트가 발생할 수 있도록 셋팅한다.

## step 2. SpeechSynthesis 가져오기

```js
// index.js
const button = document.querySelector('.voice-button');
const message = new SpeechSynthesisUtterance();

button.addEventListener('click', () => {
  console.log(message);
});
```

`new SpeechSynthesisUtterance()` 을 통해 스피치 기능을 사용할 수 있다.  
콘솔에 출력된 내용을 자세히 살펴보자.

![](https://velog.velcdn.com/images/yeonsubaek/post/1ca750d1-2749-46ed-90a3-8ab0668b2828/image.png)

`SpeechSynthesisUtterance` 안에서 여러 속성을 바꿀 수도 있고 이벤트를 적용할 수도 있다.

### 2-1. 속성들

| 속성   | 속성값             | 설명        |
| ------ | ------------------ | ----------- |
| lang   |                    | 말할 언어   |
| pitch  | 0~2 (기본값: 1)    | 목소리 높이 |
| rate   | 0.1~10 (기본값: 1) | 말하는 속도 |
| text   | `String`           | 말할 내용   |
| voice  |                    | 목소리      |
| volumn | 0~1 (기본값: 1)    | 목소리 볼륨 |

#### 언어 종류 찾기

[Language Code Table](http://www.lingoes.net/en/translator/langcode.html)을 통해 전체 언어를 확인할 수 있다.

#### 목소리 종류 찾기

```js
function populateVoiceList() {
  if (typeof speechSynthesis === 'undefined') {
    return;
  }

  const voices = speechSynthesis.getVoices();

  const voiceList = voices
    .filter((voice) => {
      return voice.lang.includes('en');
    })
    .map((voice) => {
      return `${voice.name} (${voice.lang})`;
    });
  console.log(voiceList);
}

populateVoiceList();
if (
  typeof speechSynthesis !== 'undefined' &&
  speechSynthesis.onvoiceschanged !== undefined
) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
```

![](https://velog.velcdn.com/images/yeonsubaek/post/4a141ad1-5711-4e97-bb8b-e27bcd588d24/image.png)

위 코드를 통해 해당 언어의 전체 목소리 종류를 볼 수 있다.  
`select`, `option` 태그를 통해 사용자가 직접 목소리를 선택할 수도 있다.

## step 3. 속성 설정하기

```js
// index.js
button.addEventListener('click', () => {
  message.lang = 'en-US';
  message.pitch = 1;
  message.rate = 1;
  message.text = 'HELLO WORLD';
  message.volume = 1;
});
```

## step 4. 목소리 재생하기

```js
button.addEventListener('click', () => {
...
  window.speechSynthesis.speak(message);
});
```

이제 버튼을 클릭하면 음성을 들을 수 있다.

## step 5. 추가적인 기능

### 5-1. 중간에 끊고 다시 재생

```js
button.addEventListener('click', () => {
  window.speechSynthesis.cancel();
...
```

### 5-2. 지원하지 않는 브라우저 대처

```js
button.addEventListener('click', () => {
  if (
    typeof SpeechSynthesisUtterance === 'undefined' ||
    typeof window.speechSynthesis === 'undefined'
  ) {
    alert('이 브라우저는 음성 합성을 지원하지 않습니다.');
    return;
  }
```

![](https://velog.velcdn.com/images/yeonsubaek/post/468fd3c4-f039-4237-af7b-53d2e34f19ed/image.png)

Speech Synthesis API를 지원하지 않는 브라우저가 많기 때문에 반드시 대처해야 한다.

### 5-3. 언어 변경하기

아직 깨우치지 못해서 설명할 수 없다.. 😭

---

참고 사이트: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
