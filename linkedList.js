import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(key, value) {
    const newNode = new Node(key, value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let tmp = this.head;
      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
      }
      tmp.nextNode = newNode;
    }
  }

  prepend(key, value) {
    const newNode = new Node(key, value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  }

  size() {
    let count = 0;
    let tmp = this.head;
    while (tmp !== null) {
      count++;
      tmp = tmp.nextNode;
    }
    return count;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    if (this.head === null) {
      return null;
    }

    let tmp = this.head;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    return tmp;
  }

  at(index) {
    if (index < 0 || index >= this.size()) {
      return null;
    }

    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex < index) {
      currentIndex++;
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  pop() {
    if (this.head === null) {
      return null;
    }

    if (this.head.nextNode === null) {
      const poppedNode = this.head;
      this.head = null;
      return poppedNode;
    }

    let currentNode = this.head;
    while (currentNode.nextNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    const poppedNode = currentNode.nextNode;
    currentNode.nextNode = null;
    return poppedNode;
  }

  contains(key) {
    let tmp = this.head;
    while (tmp !== null) {
      if (tmp.key === key) {
        return true;
      }
      tmp = tmp.nextNode;
    }
    return false;
  }

  find(key) {
    let tmp = this.head;
    let currentIndex = 0;
    while (tmp !== null) {
      if (tmp.key === key) {
        return currentIndex;
      }
      currentIndex++;
      tmp = tmp.nextNode;
    }
    return null;
  }

  toString() {
    let tmp = this.head;
    let result = "";
    while (tmp !== null) {
      result += `( ${tmp.key}: ${tmp.value} ) -> `;
      tmp = tmp.nextNode;
    }
    result += "null";
    return result;
  }

  insertAt(key, value, index) {
    if (index < 0 || index > this.size()) {
      return null;
    }

    const newNode = new Node(key, value);

    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;
    while (currentIndex < index) {
      currentIndex++;
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    newNode.nextNode = currentNode;
    previousNode.nextNode = newNode;
    return;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      return null;
    }

    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }

    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;
    while (currentIndex < index) {
      currentIndex++;
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    previousNode.nextNode = currentNode.nextNode;
    return;
  }
}
