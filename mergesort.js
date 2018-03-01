function mergeSort(array){

  if (array.length < 2) {
    return array;
  }

// FIGURE OUT WHY I'M GETTING RECURSION SO WRONG

  const splits = split(array), 
    left = splits[0],
    right = splits[1];

    return merge(mergeSort(left), mergeSort(right));

  // if (array.length < 2) {
  //   return array;
  // }
  // if (array.length === 1) {
  //   return array;
  // } else {
  //   return mergeSort(merge(split(array)));
  // }

}


function merge(arrFirst, arrSecond){
  // return one sorted array
  let sorted = [];
  
    while (arrFirst.length && arrSecond.length) {
    if (Math.min(arrFirst[0], arrSecond[0]) === arrFirst[0]) {
      sorted.push(arrFirst[0]);
      arrFirst = arrFirst.slice(1);
      if (!arrFirst.length) {
        sorted = sorted.concat(arrSecond);
        break;
      }
    } else {
      sorted.push(arrSecond[0]);
      arrSecond = arrSecond.slice(1);
      if (!arrSecond.length) {
        sorted = sorted.concat(arrFirst);
        break;
      }
    }
  }

  return sorted;
}



function split(wholeArray) {

  let midpoint=Math.floor(wholeArray.length/2);

  let firstHalf=wholeArray.slice(0,midpoint);
  let secondHalf=wholeArray.slice(midpoint);

  return [firstHalf, secondHalf];

}


