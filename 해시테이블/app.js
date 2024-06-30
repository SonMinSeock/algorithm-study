// 해시 함수 정의.
function hash(str, size) {
  let total = 0;
  const WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(str.length, 100); i++) {
    let char = str[i];
    let code = char.charCodeAt(0) - 96; // 해당 문자의 아스키코드 값.
    total = (total * WEIRD_PRIME + code) % size;
  }
  return total;
}
