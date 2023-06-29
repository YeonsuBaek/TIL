// 1. last
type Last = {
  <T>(arr: T[]): T;
};

const last: Last = (arr) => {
  return arr[arr.length - 1];
};

last([1, 2, 3, 4]);
last(['가', '나', true, 3]);

// 2. prepend
type Prepend = {
  <T>(arr: T[], item: T): T[];
};

const prepend: Prepend = (arr, item) => {
  return [item, ...arr];
};

prepend([1, 2, 3, 4], 'hello');

// 3. mix
type Mix = {
  <T>(arr1: T[], arr2: T[]): T[];
};

const mix: Mix = (arr1, arr2) => {
  return arr1.concat(arr2);
};

mix([1, 2, 3], [true, false]);

// 4. count
type Count = {
  <T>(arr: T[]): number;
};

const count: Count = (arr) => {
  return arr.length;
};

count(['a', 'b', 100]);

// 5. findIndex
type FindIndex = {
  <T>(arr: T[], item, T): number | null;
};

const findIndex = (arr, item) => {
  const index = arr.indexOf(item);
  if (index == -1) {
    return null;
  }
  return index;
};

findIndex([1, 3, 5], 3);
findIndex(['hi', 100], 1);

// 6. slice
type Slice = {
  <T>(arr: T[], startIndex: number, endIndex: number): T[];
};
const slice: Slice = (arr, startIndex, endIndex?: number) => {
  if (endIndex) {
    return arr.slice(startIndex, endIndex);
  }
  return arr.slice(startIndex);
};

slice([10, 100, 1000, 100000], 2, 3);
slice(['가', '나', 5, 10], 1);
