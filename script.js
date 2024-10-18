console.log("hoi");

class HashMap {
  constructor(loadFactor) {
    this.buckets = Array.from({ length: 16 }, () => new LinkedList());
    this.loadFactor = loadFactor;
    this.capacity = this.buckets.length;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16;
      //   console.log(hashCode);
    }

    return hashCode;
  }

  set(key, value) {
    const hashCode = this.hash(key);
    let indexedBucket = this.buckets[hashCode];
    if (indexedBucket.head === null) {
      indexedBucket.head = new Node(value);
      return;
    }

    if (indexedBucket.find(value) >= 0) {
      //code that handles if key, value pair already exists
    } else {
      //if
    }
    console.log(indexedBucket.toString());
    console.log(indexedBucket.find(value));
  }
}

// class LinkedList {
//   constructor(value = null) {
//     this.head = value;
//   }

//   append(value) {
//     var newNode = new Node(value);
//     if (this.head === null) {
//       this.head = newNode;
//     } else {
//       let tmp = this.head;
//       while (tmp.nextNode !== null) {
//         tmp = tmp.nextNode;
//       }
//       tmp.nextNode = newNode;
//     }
//   }

//   prepend(value) {
//     var newNode = new Node(value);
//     if (this.head === null) {
//       this.head = newNode;
//     } else {
//       var oldHead = this.head;
//       this.head = newNode;
//       this.head.nextNode = oldHead;
//     }
//   }

//   size() {
//     let count = 0;
//     let tmp = this.head;
//     while (tmp !== null) {
//       count++;
//       tmp = tmp.nextNode;
//     }
//     return count;
//   }

//   getHead() {
//     return this.head;
//   }

//   getTail() {
//     if (this.head === null) {
//       return this.head;
//     }

//     var tmp = this.head;
//     while (tmp.nextNode !== null) {
//       tmp = tmp.nextNode;
//     }
//     return tmp;
//   }

//   at(index) {
//     if (index < 0 || index >= this.size()) {
//       return null;
//     }

//     let currentNode = this.head;
//     let currentIndex = 0;
//     while (currentIndex < index) {
//       currentIndex++;
//       currentNode = currentNode.nextNode;
//     }
//     return currentNode;
//   }

//   pop() {
//     if (this.head === null) {
//       return null;
//     }

//     if (this.head.nextNode === null) {
//       const poppedNode = this.head;
//       this.head = null;
//       return poppedNode;
//     }

//     let currentNode = this.head;
//     let currentIndex = 0;
//     const oldTailIndex = this.size() - 1;
//     const newTailIndex = oldTailIndex - 1;

//     while (currentIndex < newTailIndex) {
//       currentIndex++;
//       currentNode = currentNode.nextNode;
//     }

//     const poppedNode = currentNode.nextNode;
//     currentNode.nextNode = null;
//     return poppedNode;
//   }

//   contains(value) {
//     let tmp = this.head;
//     while (tmp !== null) {
//       if (tmp.value === value) {
//         return true;
//       }
//       tmp = tmp.nextNode;
//     }
//     return false;
//   }

//   find(value) {
//     let tmp = this.head;
//     console.log(tmp);
//     let currentIndex = 0;
//     while (tmp !== null) {
//       if (tmp.value === value) {
//         console.log(value);
//         return currentIndex;
//       }
//       currentIndex++;
//       tmp = tmp.nextNode;
//     }
//     return null;
//   }

//   toString() {
//     let tmp = this.head;
//     console.log(tmp);
//     console.log(tmp.value);
//     let result = "";
//     while (tmp !== null) {
//       result += `( ${tmp.value} ) -> `;
//       tmp = tmp.nextNode;
//     }
//     result += "null";
//     return result;
//   }

//   insertAt(value, index) {
//     if (index < 0 || index >= this.size()) {
//       return null;
//     }

//     const newNode = new Node(value);

//     let currentNode = this.head;
//     let previousNode = null;
//     let currentIndex = 0;
//     while (currentIndex < index) {
//       currentIndex++;
//       previousNode = currentNode;
//       currentNode = currentNode.nextNode;
//     }
//     let oldNode = currentNode;
//     newNode.nextNode = oldNode;
//     previousNode.nextNode = newNode;
//     return;
//   }

//   removeAt(index) {
//     if (index < 0 || index >= this.size()) {
//       return null;
//     }

//     if (index == 0) {
//       this.head = this.head.nextNode;
//       return;
//     }

//     let currentNode = this.head;
//     let previousNode = null;
//     let currentIndex = 0;
//     while (currentIndex < index) {
//       currentIndex++;
//       previousNode = currentNode;
//       currentNode = currentNode.nextNode;
//     }
//     previousNode.nextNode = currentNode.nextNode;
//     return;
//   }
// }

// class Node {
//   constructor(value = null) {
//     this.value = value;
//     this.nextNode = null;
//   }
// }

// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bound");
// }

const hashMap = new HashMap(0.8);
//console.log(hashMap.hash("1823254"));
console.log(hashMap.hash("Carlos"));
console.log(hashMap.hash("Carla"));

hashMap.set("Carlos", "Test123");
hashMap.set("Carla", "Test");
hashMap.set("Carla", "Test");
console.log(hashMap);
console.log(hashMap.length);
