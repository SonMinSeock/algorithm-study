// 해시 함수 정의.
function hash(str, size) {
  let total = 0;
  for (const char of str) {
    let code = char.charCodeAt(0) - 96; // 해당 문자의 아스키코드 값.
    total = (total + code) % size;
  }
  return total;
}

console.log(hash("pink", 10));
