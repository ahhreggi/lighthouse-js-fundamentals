function range(start, end, step) {
  const result = [];
  if (start || start === 0 && end && step && start < end && step > 0) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  }
  return result;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

function lastIndexOf(array, value) {
  let result = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      result = i;
    }
  }
  return result;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);