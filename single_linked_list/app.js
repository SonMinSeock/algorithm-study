class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode; // 연결 작업
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    let current = this.head;
    let tmp = current;

    if (!this.head) {
      return this.head;
    }

    while (current.next !== null) {
      tmp = current;
      current = current.next;
    }

    tmp.next = null;
    this.tail = tmp;
    this.length--;
    return current.val;
  }
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;

    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    } else {
      let currentNode = this.head;
      let counter = 0;

      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }

      return currentNode;
    }
  }

  set(index, value) {
    const foundNode = this.get(index);

    if (!foundNode) {
      return false;
    } else {
      foundNode.val = value;
      return true;
    }
  }
}
