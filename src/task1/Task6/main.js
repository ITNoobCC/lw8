'use strict';
function replaceString(text, sourceSubstring, replaceSubstring) {
  if (
    typeof text === 'string' &&
    typeof sourceSubstring === 'string' &&
    typeof replaceSubstring === 'string'
  ) {
    if (text.indexOf(sourceSubstring) >= 0) {
      return (text =
        text.slice(0, text.indexOf(sourceSubstring)) +
        replaceSubstring +
        text.slice(
          text.indexOf(sourceSubstring) + sourceSubstring.length,
          text.length
        ));
    } else {
      return false;
    }
  } else {
    return false;
  }
}

console.log(
  replaceString('There is simple text', 'simple text', 'my substring')
);
console.log(
  replaceString('Hello world', 'world', 'world Sem')
);
console.log(replaceString('There is simple text', 'nothing', 'my substring'));
console.log(replaceString(null, NaN, undefined));

module.exports = replaceString;