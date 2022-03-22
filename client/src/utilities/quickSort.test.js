require('@testing-library/jest-dom');
const quickSort = require('./quickSort');

const testArray = [
  {
    name: 'c',
    age: 2
  },
  {
    name: 'a',
    age: 3
  },
  {
    name: 'b',
    age: 1
  }
];

const numAscArray = [
  {
    name: 'b',
    age: 1
  },
  {
    name: 'c',
    age: 2
  },
  {
    name: 'a',
    age: 3
  }
];

const numDesArray = [
  {
    name: 'a',
    age: 3
  },
  {
    name: 'c',
    age: 2
  },

  {
    name: 'b',
    age: 1
  }
];

const strAscArray = [
  {
    name: 'a',
    age: 3
  },
  {
    name: 'b',
    age: 1
  },
  {
    name: 'c',
    age: 2
  }
];

const strDesArray = [
  {
    name: 'c',
    age: 2
  },
  {
    name: 'b',
    age: 1
  },
  {
    name: 'a',
    age: 3
  }
];

test('ordered asc by number', () => {
  expect(quickSort(testArray, 'age', 'asc')).toStrictEqual(numAscArray);
});

test('ordered des by number', () => {
  expect(quickSort(testArray, 'age', 'des')).toStrictEqual(numDesArray);
});

test('ordered asc by string', () => {
  expect(quickSort(testArray, 'name', 'asc')).toStrictEqual(strAscArray);
});

test('ordered des by string', () => {
  expect(quickSort(testArray, 'name', 'des')).toStrictEqual(strDesArray);
});
