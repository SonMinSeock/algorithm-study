class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const insertNode = new Node(value);

    if (this.root === null) {
      this.root = insertNode;
      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (value === currentNode.value) return undefined;
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = insertNode;
          return this;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = insertNode;
          return this;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }
  find(searchValue) {
    if (this.root === null) return false;
    let currentNode = this.root;
    let found = false;
    while (currentNode && !found) {
      if (searchValue < currentNode.value) {
        currentNode = currentNode.left;
      } else if (searchValue > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        found = true;
      }
    }
    return currentNode;
  }
}

const tree = new BinarySearchTree();
console.log(tree.insert(10));
console.log(tree.insert(6));
console.log(tree.insert(8));
