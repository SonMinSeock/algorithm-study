function merge(firstArr, secondArr) {
  let i = 0;
  let j = 0;
  const res = [];

  while (i < firstArr.length && j < secondArr.length) {
    if (firstArr[i] < secondArr[j]) {
      res.push(firstArr[i]);
      i++;
    } else if (firstArr[i] > secondArr[j]) {
      res.push(secondArr[j]);
      j++;
    } else {
      res.push(firstArr[i]);
      //res.push(secondArr[j]);
      i++;
      j++;
    }
  }

  while (i < firstArr.length) {
    res.push(firstArr[i]);
    i++;
  }

  while (j < secondArr.length) {
    res.push(secondArr[j]);
    j++;
  }
  return res;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));
