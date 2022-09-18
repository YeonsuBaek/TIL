// Literal Types

const userName1 = "Bob"; // 문자열 리터럴 타입: 정해진 스트링 값을 가진 것
let userNames2: string | number = "Tom";

userNames2 = 3;

type Job = "police" | "developer" | "teacher";

interface User {
  name: String;
  job: Job;
}

const user: User = {
  name: "Bob",
  job: "developer",
};

interface HighSchoolStudent {
  name: number | string;
  grade: 1 | 2 | 3;
}

//
// Union Types (|)

interface Car {
  name: "car";
  color: string;
  start(): void;
}

interface Mobile {
  name: "mobile";
  color: string;
  call(): void;
}

function getGift(gift: Car | Mobile) {
  console.log(gift.color); // color가 둘 다 존재함
  // gift.start(); // error: start()가 Car에만 존재함
  if (gift.name === "car") {
    gift.start();
  } else {
    gift.call();
  }
}

//
// Intersection Types (&)

interface Computer {
  name: string;
  start(): void;
}

interface Toy {
  name: string;
  color: string;
  price: number;
}

const toyComputer: Toy & Computer = {
  name: "장난감컴퓨터",
  start() {},
  color: "blue",
  price: 1000,
};
