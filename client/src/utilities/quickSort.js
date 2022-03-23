const sortAsc = (array, key) => {
  if (array.length < 2) return array;
  let pivotValue = array[0];
  let pivot = array[0][key];
  let left = [];
  let right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i][key] < pivot) left.push(array[i]);
    else right.push(array[i]);
  }
  return [...sortAsc(left, key), pivotValue, ...sortAsc(right, key)];
};

const sortDes = (array, key) => {
  if (array.length < 2) return array;
  let pivotValue = array[0];
  let pivot = array[0][key];
  let left = [];
  let right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i][key] > pivot) left.push(array[i]);
    else right.push(array[i]);
  }
  return [...sortDes(left, key), pivotValue, ...sortDes(right, key)];
};

const quickSort = (array, key, dir) => {
  if (array.length < 2) return array;

  if (dir === 'asc') {
    return sortAsc(array, key);
  } else if (dir === 'des') {
    return sortDes(array, key);
  }
};

export default quickSort;
