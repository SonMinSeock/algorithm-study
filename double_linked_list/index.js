class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.head === null || this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      return undefined;
    } else {
      let removeNode = this.tail;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = removeNode.prev;
        this.tail.next = null;
        removeNode.prev = null;
      }
      this.length--;
      return removeNode;
    }
  }
  shift() {
    if (this.length === 0) return undefined;

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }
  unshift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
  get(index) {
    const listHalfLength = Math.floor(this.length / 2);
    let count, foundNode;
    if (index < 0 || index >= this.length) return null;

    if (index <= listHalfLength) {
      count = 0;
      foundNode = this.head;
      while (count !== index) {
        foundNode = foundNode.next;
        count++;
      }
    } else {
      count = this.length - 1;
      foundNode = this.tail;
      while (count !== index) {
        foundNode = foundNode.prev;
        count--;
      }
    }
    return foundNode;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
}

const doubleLinkedList = new DoubleLinkedList();

doubleLinkedList.push(100);
doubleLinkedList.push(200);
doubleLinkedList.push(300);
doubleLinkedList.push(400);
doubleLinkedList.push(500);
