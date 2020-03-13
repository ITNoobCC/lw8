'use strict';
function check(data, expectedType) {
  if (!data && data !== null) {
    throw new Error('Ошибка - expected data');
  }

  if (!expectedType) {
    throw new Error('Ошибка - expected type');
  }

  if (
    typeof data === expectedType &&
    !(data === null && expectedType === 'object') &&
    data === null &&
    expectedType === 'null'
  ) {
    return true;
  } else {
    throw new Error('Ошибка - validation');
  }
}

try {
  console.log(check([], 'number'));
  console.log(check([], 'array'));
  console.log(check(null, 'null'));
  console.log(check('test', 'string'));
} catch (error) {
  console.log(error);
}

module.exports = check;