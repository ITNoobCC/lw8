function pulloutArray(array) {

  if (Array.isArray(array)) {
    var resultArray = [];

    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        for (var j = 0; j < array[i].length; j++) {
          if (
            typeof array[i][j] === 'number' &&
            !isNaN(array[i][j]) &&
            array[i][j] !== null
          ) {
            resultArray.push(array[i][j]);
          }
          // console.log(array[i][j]);
        }
      } else if (
        typeof array[i] === 'number' &&
        !isNaN(array[i]) &&
        array[i] !== null
      ) {
        resultArray.push(array[i]);
      }
    }
  } else {
    return null;
  }

  return resultArray;
}

console.log(pulloutArray([1, 2, 3])); // return [1, 2, 3]
console.log(pulloutArray([])); // return []
console.log(pulloutArray([1, [2, 3, 4], 5])); // return [1, 2, 3, 4, 5]
console.log(pulloutArray([1, [2, 3, 4], 5, [1]])); // return [1, 2, 3, 4, 5, 1]
console.log(pulloutArray([1, [1], null, NaN, ['test']])); // return [1, 1]
