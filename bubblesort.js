function bubbleSort(array) {

  if (array.length < 2) {
    return array;
  } 

  let boo = true;
 
    for (var i = 0; i < array.length-1; i++) {
      let arr = compare(array[i], array[i+1]);
      array[i] = arr[0];
      array[i+1] = arr[1];
    }

    if (boo === true) {
      return array;
    } else {
      return bubbleSort(array);
    }
  
    function swap(num1, num2){
      boo = false;
      let x = num1;
      num1 = num2;
      num2 = x;
      return [num1, num2];
    }
    
    function compare(num1, num2){
      if (num1 > num2) {
        return swap(num1, num2);
      } else {
        return [num1, num2];
      }
    }

}
