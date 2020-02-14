function pulloutArray(array) {
  if (Array.isArray(array)) {
    var resultArray = [];
    for (let index = 0; index < array.length; index++) {
      if (Array.isArray(array[index])) {
        for (let j = 0; j < array[index].length; j++) {
          if ((array[index][j] !== null && array[index][j] !== undefined) && (!Number.isNaN(array[index][j])) && (typeof (array[index][j]) !== 'string')) {
            resultArray.push(array[index][j]);
          }
        }
      } else if ((array[index] !== null && array[index] !== undefined) && (!Number.isNaN(array[index])) && (typeof (array[index]) !== 'string')) {
        resultArray.push(array[index]);
      }
    }
    return (resultArray);
  } else {
    return false;
  }
}

console.log(pulloutArray([1, undefined, 3])); // return [1, 3]
console.log(pulloutArray([])); // return []
console.log(pulloutArray());
console.log(pulloutArray([1, [2, 3, undefined], 5])); // return [1, 2, 3, 5]
console.log(pulloutArray([1, [2, 3, 4], 5, [1]])); // return [1, 2, 3, 4, 5, 1]
console.log(pulloutArray([1, [3, 4], null, NaN, 'test'])); // return [1, 1]
console.log(pulloutArray([1, [1, null, 2, 'test'], 'qwerty', null, 2, NaN, ['test', null, NaN, 'text']])); // 