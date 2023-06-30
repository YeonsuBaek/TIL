// 1. last
// type Last = {
//   <T>(arr: T[]): T;
// };

// const last: Last = (arr) => {
//   return arr[arr.length - 1];
// };

// last([1, 2, 3, 4]);
// last(['가', '나', true, 3]);

// // 2. prepend
// type Prepend = {
//   <T>(arr: T[], item: T): T[];
// };

// const prepend: Prepend = (arr, item) => {
//   return [item, ...arr];
// };

// prepend([1, 2, 3, 4], 'hello');

// // 3. mix
// type Mix = {
//   <T>(arr1: T[], arr2: T[]): T[];
// };

// const mix: Mix = (arr1, arr2) => {
//   return arr1.concat(arr2);
// };

// mix([1, 2, 3], [true, false]);

// // 4. count
// type Count = {
//   <T>(arr: T[]): number;
// };

// const count: Count = (arr) => {
//   return arr.length;
// };

// count(['a', 'b', 100]);

// // 5. findIndex
// type FindIndex = {
//   <T>(arr: T[], item, T): number | null;
// };

// const findIndex = (arr, item) => {
//   const index = arr.indexOf(item);
//   if (index == -1) {
//     return null;
//   }
//   return index;
// };

// findIndex([1, 3, 5], 3);
// findIndex(['hi', 100], 1);

// // 6. slice
// type Slice = {
//   <T>(arr: T[], startIndex: number, endIndex: number): T[];
// };
// const slice: Slice = (arr, startIndex, endIndex?: number) => {
//   if (endIndex) {
//     return arr.slice(startIndex, endIndex);
//   }
//   return arr.slice(startIndex);
// };

// slice([10, 100, 1000, 100000], 2, 3);
// slice(['가', '나', 5, 10], 1);

// Anwer
// Last

type Last = <T>(items: T[]) => T;

const last: Last = (items) => items[items.length - 1];

const lastItem = last([1, 2, 3, 4, 5]);

console.log(`Last: ${lastItem}`);

// Prepend

type Prepend = <T>(items: T[], item: T) => T[];

const prepend: Prepend = (items, item) => [item, ...items];

const items = [1, 2, 3, 4, 5];

const newItems = prepend(items, 0);

console.log(`Prepend: ${newItems}`);

//  Mix

type Mix = <T>(a: T[], b: T[]) => T[];

const mix: Mix = (firstArr, secondArr) => [...firstArr, ...secondArr];

const mixed = mix([1, 2, 3], [4, 5, 6]);

console.log(`Mix: ${mixed}`);

// Count

type Count = <T>(items: T[]) => number;

const count: Count = (items) => items.length;

const counted = count([1, 2, 3, 4, 5]);

console.log(`Count :${counted}`);

// FindIndex

type FindIndex = <T>(items: T[], item: T) => number | boolean;

const find: FindIndex = (items, item) => {
  const index = items.indexOf(item);
  return index === -1 ? false : index;
};

const found = find([1, 2, 3, 4], 1);

console.log(`FindIndex (found): ${found}`);

const notFound = find([1, 2, 3, 4], 5);

console.log(`FindIndex (not found): ${notFound}`);

// Slice

type Slice = <T>(items: T[], start: number, end?: number) => T[];

const slice: Slice = (items, start, end) => items.slice(start, end);

const sliced = slice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6);

console.log(`Slice ${sliced}`);
