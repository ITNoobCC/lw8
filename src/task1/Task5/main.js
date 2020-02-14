function check(data, expectedType) {
  if (!data && data !== null) {
    throw new Error('Данные не введены!');
  }
  if (!expectedType) {
    throw new Error('Ожидаемый тип не введён!');
  }
  if ((typeof (data) === expectedType) && !(data === null && expectedType === 'object')) {
    return (true);
  } else if (data === null && expectedType === 'null') {
    return (true);
  } else {
    throw new Error('Данные и ожидаемый тип не совпадают');
  }
}

try {
  console.log("--------------------------------------------------------");
  console.log(check());
  console.log(check([], 'string')); // false
  console.log(check([], 'null')); // false
  console.log(check([], 'array')); // false
  console.log(check([], 'number')); // false
  console.log(check([], 'object')); // true
  console.log("--------------------------------------------------------");
  console.log(check(123, 'string')); // false
  console.log(check(123, 'null')); // false
  console.log(check(123, 'array')); // false
  console.log(check(123, 'object')); // false
  console.log(check(123, 'number')); // true
  console.log("--------------------------------------------------------");
  console.log(check('test', 'string')); // true
  console.log(check('test', 'null')); // false
  console.log(check('test', 'array')); // false
  console.log(check('test', 'object')); // false
  console.log(check('test', 'number')); // false
  console.log("--------------------------------------------------------");
  console.log(check(null, 'string')); // false
  console.log(check(null, 'null')); // true
  console.log(check(null, 'array')); // false
  console.log(check(null, 'object')); // must be false, but return true
  console.log(check(null, 'number')); // false
  console.log("--------------------------------------------------------");
  console.log(check({}, 'number')); //false
  console.log(check([], 'array')); // false or throw ValidationError
  console.log(check([1, 2, 3], 'array'));//false
  console.log(check([1, 2, 3], 'object'));// true
  console.log(check(123, 'number'));// true
  console.log(check(null, 'null')); // true
  console.log(check('test', 'string')); // true
} catch (error) {
  console.error(error);
}