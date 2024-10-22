import LinkedList from "./linkedList.js";

class HashMap {
  constructor(loadFactor) {
    this.buckets = Array.from({ length: 16 }, () => new LinkedList());
    this.loadFactor = loadFactor;
    this.size = 0;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16;
    }

    return hashCode;
  }

  // find(key) {
  //   const index = this.hash(key);
  //   let bucket = this.buckets[index];
  //   return bucket.find(key);
  // }

  set(key, value) {
    const index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    let bucket = this.buckets[index];

    let foundNode = bucket.findNode(key);
    if (foundNode) {
      //code that handles if key value pair already exists
      foundNode.value = value;
    } else {
      //if bucket is empty, or collision
      bucket.append(key, value);
      this.size++;
    }

    console.log(bucket.toString());
  }

  get(key) {
    const index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    let bucket = this.buckets[index];
    let foundNode = bucket.findNode(key);
    return foundNode ? foundNode.value : null;
  }

  has(key) {
    const index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    let bucket = this.buckets[index];
    let foundNode = bucket.findNode(key);
    return foundNode ? true : false;
  }

  remove(key) {
    const index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    let bucket = this.buckets[index];
    let foundIndexNode = bucket.findIndex(key);
    if (foundIndexNode !== null) {
      this.size--;
      return bucket.removeAt(foundIndexNode);
    }
    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = Array.from({ length: 16 }, () => new LinkedList());
  }

  keys() {
    const keysArray = [];

    for (let bucket of this.buckets) {
      let currentNode = bucket.head;

      while (currentNode !== null) {
        keysArray.push(currentNode.key);
        currentNode = currentNode.nextNode;
      }
    }

    return keysArray;
  }

  values() {
    const valuesArray = [];

    for (let bucket of this.buckets) {
      let currentNode = bucket.head;

      while (currentNode !== null) {
        valuesArray.push(currentNode.value);
        currentNode = currentNode.nextNode;
      }
    }

    return valuesArray;
  }

  entries() {
    const keypairArray = [];

    for (let bucket of this.buckets) {
      let currentNode = bucket.head;

      while (currentNode !== null) {
        let keypair = [];
        keypair.push(currentNode.key);
        keypair.push(currentNode.value);
        keypairArray.push(keypair);
        currentNode = currentNode.nextNode;
      }
    }

    return keypairArray;
  }
}

const hashMap = new HashMap(0.8);

console.log(hashMap.hash("Carlos"));
console.log(hashMap.hash("Carla"));
console.log(hashMap.hash("Corbijn"));
console.log(hashMap.hash("Corlas"));
console.log(hashMap.hash("Neef"));

hashMap.set("Carlos", "Test123");
hashMap.set("Carla", "Test");
hashMap.set("Carla", "Mogool");

hashMap.set("Corlas", "Mogool");
hashMap.set("Neef", "Mogool2");

console.log(hashMap);

console.log(`size: ${hashMap.size}`);

console.log(hashMap.get("Corlas"));
console.log(hashMap.has("Carlas"));

// console.log(hashMap.remove("Carla"));
// console.log(hashMap.remove("Carlos"));
// console.log(hashMap.remove("Corlas"));
hashMap.set("Corlas", "Mogool");

console.log(hashMap.size);

console.log(hashMap.keys());
console.log(hashMap.values());
console.log(hashMap.entries());
