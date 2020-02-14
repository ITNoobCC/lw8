function isTimeCorrect(time) {
  if (time >= '00:00' && time <= '23:59') {
    return true
  } else {
    return false;
  }
}

function isTimeRangesIntersect(timeRange1, timeRange2) {
  if ((Array.isArray(timeRange1) && Array.isArray(timeRange2)) && (isTimeCorrect(timeRange1[0]) && isTimeCorrect(timeRange1[1])) && (isTimeCorrect(timeRange2[0]) && isTimeCorrect(timeRange2[1]))) {
    if ((timeRange1[0] >= timeRange2[0] && timeRange1[0] <= timeRange2[1]) || (timeRange2[0] >= timeRange1[0] && timeRange2[0] <= timeRange1[1])) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
console.log(isTimeRangesIntersect(['08:30', '09:30'], ['10:30', '12:00'])); //return false
console.log(isTimeRangesIntersect(['08:30', '19:30'], ['10:30', '12:00'])); //return true
console.log(isTimeRangesIntersect(['08:30', '09:30'], ['08:30', '09:30'])); // return true
console.log(isTimeRangesIntersect(['08:99', '09:30'], ['10:30', '12:00'])); // return false
console.log(isTimeRangesIntersect(['18:30', '18:35'], ['18:33', '21:00'])); // return true
console.log(isTimeRangesIntersect(['08:30', '09:30'], ['08:30', '09:30'])); // return false
