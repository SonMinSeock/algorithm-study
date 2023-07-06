function binarySearch(arr, search) {
  console.log("BinarySearch Running!");
  let start = 0;
  let end = arr.length - 1;
  let center = Math.floor((start + end) / 2);

  while (arr[center] !== search && start <= end) {
    if (arr[center] < search) {
      start = center + 1;
    } else if (arr[center] > search) {
      end = center - 1;
    }
    center = Math.floor((start + end) / 2);
  }

  return arr[center] === search ? center : -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 5));
//console.log(binarySearch([1, 2, 3, 4, 5], 6));
