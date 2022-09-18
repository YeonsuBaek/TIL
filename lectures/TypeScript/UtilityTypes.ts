// keyof

interface User6 {
  id: number;
  name: string;
  age: number;
  gender: "m" | "w";
}

type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender'와 동일

const uk1: UserKey = "name";
// const uk2: UserKey = ""; // error: 빈값
// const uk3: UserKey = "grade"; // error: User6에 없음

//
// Partial<T>

interface User7 {
  id: number;
  name: string;
  age: number;
  gender: "m" | "w";
}

let admin1: Partial<User7> = {
  id: 1,
  name: "Bob",
  //   job: "", // error: 없으니까
};

// 이것과 동일
// interface User7 {
//   id?: number;
//   name?: string;
//   age?: number;
//   gender?: "m" | "w";
// }

//
// Required<T>

interface User8 {
  id: number;
  name: string;
  age?: number; // 필수 property가 되어버림
}

let admin2: Required<User8> = {
  id: 1,
  name: "Bob",
  age: 30,
};

//
// Readonly<T>

interface User9 {
  id: number;
  name: string;
  age?: number;
}

let admin3: Readonly<User9> = {
  id: 1,
  name: "Bob",
};

// admin3.id = 4; // error: 할당만 가능, 수정 불가

//
// Record<K,T> K: key, T: type

// interface Score {
//   "1": "A" | "B" | "C" | "D";
//   "2": "A" | "B" | "C" | "D";
//   "3": "A" | "B" | "C" | "D";
//   "4": "A" | "B" | "C" | "D";
// }

type Grade = "1" | "2" | "3" | "4";
type Score = "A" | "B" | "C" | "D" | "F";

const score: Record<Grade, Score> = {
  1: "A",
  2: "C",
  3: "B",
  4: "D",
};

interface User10 {
  id: number;
  name: string;
  age: number;
}

function isValid(user: User10) {
  const result: Record<keyof User10, boolean> = {
    id: user.id > 0,
    name: user.name !== "",
    age: user.age > 0,
  };

  return result;
}

//
// Pick<T,K> key만 사용 가능

interface User11 {
  id: number;
  name: string;
  age: number;
  gender: "m" | "w";
}

const admin4: Pick<User11, "id" | "name"> = {
  id: 0,
  name: "Bob",
};

//
// Omit<T,K> key만 빼고 사용 가능

const admin5: Omit<User11, "age" | "gender"> = {
  id: 0,
  name: "Bob",
};

//
// Exclude<T1,T2> type1에서 type2를 제거

type T1 = string | number | Boolean;
type T2 = Exclude<T1, number | string>;

//
// NonNullable<Type> null과 undefined 제외

type T3 = string | null | undefined | void;
type T4 = NonNullable<T3>;
