# API key를 포함해 Vercel에 배포하기 (feat. 500 에러 처리하기)

[Correct Sentences](https://github.com/YeonsuBaek/learning-english)의 기능이 어느정도 완성되어 드디어 배포를 하려고 한다.  
나는 늘 Vercel에 배포를 해왔기 때문에 이번에도 평소와 같이 배포하였다.

## 배포과정

#### 1. [Vercel](https://vercel.com)의 대시보드에 들어가서 프로젝트를 새로 생성한다.

![](https://velog.velcdn.com/images/yeonsubaek/post/be222e69-f8d4-436a-a475-f5129043c134/image.png)

#### 2. Repository명을 검색하고 결과가 없으면 Github로 간다.

![](https://velog.velcdn.com/images/yeonsubaek/post/b2be24c5-752b-46d0-b145-3bf1510b2c0c/image.png)

#### 3. 원하는 Repository를 선택하고 저장한다.

![](https://velog.velcdn.com/images/yeonsubaek/post/e09e93a0-ad72-4087-a1d7-76c078661004/image.png)
![](https://velog.velcdn.com/images/yeonsubaek/post/9aa458fd-e720-4978-b3ac-6510625ff17c/image.png)

#### 4. 다시 Vercel로 돌아가면 Repository를 Import 할 수 있다.

![](https://velog.velcdn.com/images/yeonsubaek/post/88b58085-186d-47a4-8824-e7f8ad33137a/image.png)

#### 5. 프로젝트를 구성하고 저장한다.

Project Name은 배포URL에 포함될 프로젝트 명이다.  
Next.js를 배포할 것이기 때문에 Framework를 Next.js로 선택하고 Root Directory는 `package.json` 파일이 들어있는 폴더를 선택한다.

![](https://velog.velcdn.com/images/yeonsubaek/post/45021cbd-67d9-49ef-a082-a1cb27688cce/image.png)

#### 6. 환경변수에 API Key를 알려준다.

`.env` 에 저장한 API key와 key 값을 저장한다.

![](https://velog.velcdn.com/images/yeonsubaek/post/517e735a-d9b6-4780-8528-7f7593ecf370/image.png)

## 배포 확인하기

![](https://velog.velcdn.com/images/yeonsubaek/post/fa9a1dcf-3f4b-4b77-bcee-0a4677b08d33/image.png)

나의 대시보드로 들어가면 만든 프로젝트 목록을 볼 수 있다.

![](https://velog.velcdn.com/images/yeonsubaek/post/73653582-03d1-4967-ad54-e2b11be019c6/image.png)

STATUS가 Ready에 초록색 불이 들어온 것을 확인하고 우측 상단 Visit 버튼을 클릭하면 배포URL로 넘어간다.

## 문제 1

![](https://velog.velcdn.com/images/yeonsubaek/post/c5b9d8a9-21f7-4fb4-bb1e-8ad2ffdf649a/image.png)

상태코드 **500**을 뱉으며 API에 연결할 수 없다.  
파일 경로도 맞고 API key도 잘 넣었는데 왜 안될까?

## 해결 1

#### 1. .env.local로 수정

API key를 안전하게 보관하기 위해 환경변수를 `.env` 파일에 넣고 커밋을 하지 않았다. 하지만 Vercel은 `.env` 가 아닌 `.env.local` 을 통해서만 API key에 접근할 수 있다.

![](https://velog.velcdn.com/images/yeonsubaek/post/1a7391fd-ef20-4c05-b018-7921077f9ec2/image.png)

커밋을 원치 않는 파일을 설정하는 역할을 하는 `.gitignore` 파일에 넣었던 `.env` 를 `.env.local` 로도 바꿔준다.

![](https://velog.velcdn.com/images/yeonsubaek/post/5d30e70b-bcbd-4dfb-aa36-a9a5ff2da067/image.png)

#### 2. dotenv 제거

dotenv는 환경변수를 `.env`에 저장하고 `process.env`로 로드하는 의존성 모듈이다.  
위에서 `.env` 를 `.env.local` 로 변경하면서 dotenv의 역할은 더이상 필요하지 않다. dotenv를 사용하면 Vercel에서 오류가 발생한다. ~~(정확한 이유는 아직 잘 모르겠다 😭)~~

## 문제 2

그리고 24시간이 흘렀다. 배포한 사이트를 다시 방문하였는데 또 500 에러를 만나게 되었다.

![](https://velog.velcdn.com/images/yeonsubaek/post/12c81ff4-52f9-462b-b0d1-28fda84a6a7f/image.png)

![](https://velog.velcdn.com/images/yeonsubaek/post/dd3e5249-5023-4462-a3b0-b869dc07f468/image.jpg)

난 어디로 물러나야 하는 것인가

## 해결 2

#### 1. 서버 로그를 확인하러 간다.

![](https://velog.velcdn.com/images/yeonsubaek/post/ecf4c50b-c56c-4062-a206-204b2321be20/image.png)

프로젝트에 들어와 "View Build Logs"를 클릭하고

![](https://velog.velcdn.com/images/yeonsubaek/post/30803bbc-8dbf-43ed-8d95-19a2dc2d5525/image.png)

"Functions" 카테고리에서 API 경로의 Function Details를 보러 간다.

![](https://velog.velcdn.com/images/yeonsubaek/post/593ee8e4-47b9-4f59-a325-a625fd82d4cb/image.png)

빨간 줄이 파티를 열고 있다. 오른쪽에 나와있는 정보를 쭉 내리면 외계어 같은 로그를 볼 수 있다.

```
currentUrl: 'https://api.openai.com/v1/completions',
...
  response: {
    status: 401,
    statusText: 'Unauthorized',
...
```

찾았다. 401 상태코드이다. API 키가 제대로 전달되지 못한 것이다.

#### 2. API Key 설정 후 재배포

내가 전날 배포를 성공시키고 Vercel 환경변수에 저장한 API key가 없어도 작동이 제대로 될까 궁금하여 잠시 삭제하였다. 그 후에도 오류가 발생하지 않았기 때문에 그대로 컴퓨터를 껐다.

하지만 캐시에 남아있던 버전이 동작한 것일 뿐, 그래서 24시간동안은 무사히 작동했던 것이다.

![](https://velog.velcdn.com/images/yeonsubaek/post/2e6bc204-52af-4243-a6d3-deaee996ad69/image.png)

다시 API key를 저장하고 하염없이 기다렸다.  
그래봤자 아무런 변화도 없다. 재배포를 안했기 때문이다.

![](https://velog.velcdn.com/images/yeonsubaek/post/813cde9a-581a-4671-9c43-0c2bde70147b/image.png)

프로젝트에서 "Promote to Production"을 클릭하여 재배포를 하였다.

![](https://velog.velcdn.com/images/yeonsubaek/post/c01a9a4b-52da-4ccd-a117-8dd5afb9aaae/image.png)

무사히 빌드 성공하였다.

## 배포 완료

https://learning-english-alpha.vercel.app/

---

500 에러를 해결할 수 있도록 도와준 꼬마 너무 고맙습니다 🤹🪄
