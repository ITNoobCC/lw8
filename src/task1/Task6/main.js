function replaceString(text, sourceSubstring, replaceSubstring) {
  if ((typeof text === 'string') && (typeof sourceSubstring === 'string')
    && (typeof replaceSubstring === 'string')) {
    if (text.indexOf(sourceSubstring) >= 0) {
      return (text = text.slice(0, text.indexOf(sourceSubstring)) + replaceSubstring +
        text.slice(text.indexOf(sourceSubstring) + sourceSubstring.length, text.length));
    } else {
      return false;
    }
  } else {
    return false;
  }
}

console.log(replaceString('There is simple text', 'simple text', 'my substring'));
console.log(replaceString('There is simple text', 'nothing', 'my substring'));
console.log(replaceString(null, NaN, undefined));

// function replaceString(str, sourceStr, replaceStr) {
//   // str - произвольная строка
//   // sourceStr - искомая строка
//   // replaceStr - строка на которую мы меняем искомую строку
//   if (typeof str === 'string' && typeof sourceStr === 'string' && typeof replaceStr === 'string') {
//     if (str.indexOf(sourceStr) >= 0) {
//       str = str.slice(0, str.indexOf(sourceStr)) + replaceStr + str.slice(str.indexOf(sourceStr) + sourceStr.length, str.length);
//       return str;
//     } else {
//       return null;
//     }
//   } else {
//     return null;
//   }
// }