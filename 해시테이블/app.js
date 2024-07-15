// 해시 함수 정의.
// function hash(str, size) {
//   let total = 0;
//   const WEIRD_PRIME = 31;
//   for (let i = 0; i < Math.min(str.length, 100); i++) {
//     let char = str[i];
//     let code = char.charCodeAt(0) - 96; // 해당 문자의 아스키코드 값.
//     total = (total * WEIRD_PRIME + code) % size;
//   }
//   return total;
// }

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const hashedIdx = this._hash(key);
    if (!this.keyMap[hashedIdx]) {
      this.keyMap[hashedIdx] = [];
      this.keyMap[hashedIdx].push([key, value]);
    } else {
      for (const hashMap of this.keyMap[hashedIdx]) {
        if (hashMap[1] !== value) {
          this.keyMap[hashedIdx].push([key, value]);
        }
      }
    }
  }

  get(key) {
    const hashedIdx = this._hash(key);
    if (this.keyMap[hashedIdx]) {
      // 1. for of문 이용방법.
      // for (const hashedMap of this.keyMap[hashedIdx]) {
      //   if (hashedMap[0] === key) {
      //     return hashedMap[1];
      //   }
      // }

      // 2. for문 이용방법.
      for (let i = 0; i < this.keyMap[hashedIdx].length; i++) {
        if (this.keyMap[hashedIdx][i][0] === key) {
          return this.keyMap[hashedIdx][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const results = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!results.includes(this.keyMap[i][j][0])) {
            results.push(this.keyMap[i][j][0]);
          }
        }
      }
    }

    return results;
  }

  values() {
    const results = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!results.includes(this.keyMap[i][j][1])) {
            results.push(this.keyMap[i][j][1]);
          }
        }
      }
    }

    return results;
  }
}

const hashMap = new HashTable();
hashMap.set("pink", "#FFC0CB");
hashMap.set("cyan", "#00FFFF");
console.log(hashMap.get("cyan"));
hashMap.keys();
