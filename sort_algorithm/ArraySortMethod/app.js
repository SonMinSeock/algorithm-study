// 1. sort 메서드
// 문자 정렬
function numberCompare(firstNum, secondNum) {
  return firstNum - secondNum;
}
const charArr = ["f", "e", "b", "d", "a", "c"];
console.log(charArr.sort());

const numbers = [6, 4, 15, 10];
console.log(numbers.sort());
console.log(numbers.sort(numberCompare));
