// Generics

function getSize<T>(arr: T[]): number {
  return arr.length;
}

const arr1 = [1, 2, 3];
getSize<number | string>(arr1);

const arr2 = ["1", "2", "3"];
getSize<string>(arr2);

const arr3 = [false, true, true];
getSize(arr3);

const arr4 = [{}, {}, { name: "Tom" }];
getSize(arr4);

interface Mobile1<T> {
  name: string;
  price: number;
  option: T;
}

const m1: Mobile1<{ color: string; coupon: boolean }> = {
  name: "s21",
  price: 1000,
  option: {
    color: "red",
    coupon: false,
  },
};

const m2: Mobile1<string> = {
  name: "s22",
  price: 1200,
  option: "good",
};

interface User5 {
  name: string;
  age: number;
}

interface Car5 {
  name: string;
  color: string;
}

interface Book5 {
  price: number;
}

const user5: User5 = { name: "a", age: 10 };
const car5: Car5 = { name: "bmw", color: "red" };
const book5: Book5 = { price: 3000 };

function showName<T extends { name: string }>(data: T): string {
  return data.name;
}

showName(user5);
showName(car5);
// showName(book5); // error: name이 존재하지 않음
