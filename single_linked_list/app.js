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

  insert(index, value) {
    if (index < 0 || this.length < index) return false;

    if (index === this.length) return !!this.push(value);

    if (index === 0) return !!this.unshift(value);

    const newNode = new Node(value);

    const prevNode = this.get(index - 1);
    const tempNode = prevNode.next;

    prevNode.next = newNode;

    newNode.next = tempNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || this.length < index) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prevNode = this.get(index - 1);
    const removeNove = prevNode.next;

    prevNode.next = removeNove.next;

    this.length--;

    return removeNove;
  }
  reverse() {
    let currentNode = this.head;

    this.head = this.tail;
    this.tail = currentNode;

    let nextNode;
    let prevNode = null;

    for (let i = 0; i < this.length; i++) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    return this;
  }
}

const list = new SingleLinkedList();

list.push(13);
list.push(27);
list.push(32);
list.push(71);
