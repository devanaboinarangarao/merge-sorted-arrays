function mergeSortedArrays(array1, array2) {

  if(!array1 || !array2 || array1.length === 0 || array2.length === 0 || !isMonotonicSort(array1) || !isMonotonicSort(array1)) {
    return "!!!Oops Something went wrong ";
  }

  let finalSortArr = [];

  let len = array1.length + array2.length ;

  let a1 = 0, a2 = 0;
  let i = 0;
  for (i = 0; i < len; i++) {
    if (a1 < array1.length && a2 < array2.length) {
      if (array1[a1] <= array2[a2]) {
        finalSortArr.push(array1[a1]);
        a1 = a1 + 1;
      } else {
        finalSortArr.push(array2[a2]);
        a2 = a2 + 1;
      }
    } else {
      break;
    }
  }

  // console.log(finalSortArr)

  if (array1.length != array2.length) {

    if (array1.length > array2.length) {
      arr = array1;
      i = a1;
    } else {
      arr = array2;
      i = a2;
    }
    for (let j = i; j < arr.length; j++) {
      finalSortArr.push(arr[j])
    }
    return finalSortArr;
  }
  return finalSortArr;
}

function isMonotonicSort(arr) {

  for(let i=1; i< arr.length ; i++) {
    if(arr[i-1] > arr[i]) {
      return false;
    }
  }
  return true;
}

console.log(mergeSortedArrays([0, 2, 4, 31], [4, 6, 30, 36, 37]))
