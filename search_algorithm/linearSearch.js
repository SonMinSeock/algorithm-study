// 1. 선형 검색 함수를 구현하시오.(찾고하는 값이 있으면 해당 인덱스를 반환.)

function linearSearch(arr, search) {
  console.log("LinearSearch Running!");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) return i;
  }

  return -1;
}

console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4));
