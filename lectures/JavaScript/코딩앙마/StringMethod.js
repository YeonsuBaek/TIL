// String Methods

// `의 편리한 점: 여러 줄
let desc = `오늘은 맑고 화창한
날씨가 계속 되겠습니다.
내일은 비 소식이 있습니다.`;

// let desc = '오늘은 맑고 화창한\n날씨가 계속 되겠습니다.';
// let desc = '오늘은 맑고 화창한
// 날씨가 되겠습니다.'; // error

// 특정 위치에 접근
desc2[2]; // '하'

// But, 한 글자 변경은 허용하지 않음
desc2[4] = "용";
console.log(desc2); // "안녕하세요."
