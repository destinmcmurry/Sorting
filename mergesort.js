function mergeSort(array){
  if (array.length < 2) {
    return array;
  }

  // if (array.length === 1) {
  //   return array;
  // } else {
  //   return mergeSort(merge(split(array)));
  // }

}


function merge(arr){
  // return one sorted array
  let arrFirst = arr[0];
  let arrSecond = arr[1];
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


