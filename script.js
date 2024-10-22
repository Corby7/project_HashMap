import LinkedList from "./linkedList.js";

export default class HashMap {
  constructor(loadFactor) {
    this.buckets = Array.from({ length: 16 }, () => new LinkedList());
    this.loadFactor = loadFactor;
    this.capacity = 0;
  }

  resize() {
    let totalBuckets = this.buckets.length;
    //check if rezising is needed
    if (this.capacity > totalBuckets * this.loadFactor) {
      //double size
      const newBucketCount = totalBuckets * 2;
      const oldBuckets = this.buckets;
      this.buckets = Array.from(
        { length: newBucketCount },
        () => new LinkedList()
      );

      for (let bucket of oldBuckets) {
        let currentNode = bucket.head;
        while (currentNode !== null) {
          const newIndex = this.hash(currentNode.key);
          this.buckets[newIndex].append(currentNode.key, currentNode.value);
          currentNode = currentNode.nextNode;
        }
      }
    }
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode =
        (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
    }

    return hashCode;
  }

  //helper method
  _getBucket(key) {
    const index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    return this.buckets[index];
  }

  set(key, value) {
    let bucket = this._getBucket(key);
    let foundNode = bucket.findNode(key);

    if (foundNode) {
      //code that handles if key value pair already exists
      foundNode.value = value;
    } else {
      //if bucket is empty, or collision
      bucket.append(key, value);
      this.capacity++;
    }

    //check if resizing is needed after adding the new element
    this.resize();
    console.log(bucket.toString());
  }

  get(key) {
    let bucket = this._getBucket(key);
    let foundNode = bucket.findNode(key);
    return foundNode ? foundNode.value : null;
  }

  has(key) {
    let bucket = this._getBucket(key);
    let foundNode = bucket.findNode(key);
    return foundNode ? true : false;
  }

  remove(key) {
    let bucket = this._getBucket(key);
    let foundIndexNode = bucket.findIndex(key);

    if (foundIndexNode !== null) {
      this.capacity--;
      return bucket.removeAt(foundIndexNode);
    }
    return false;
  }

  length() {
    return this.capacity;
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

// const hashMap = new HashMap(0.8);

// console.log(hashMap.hash("Carlos"));
// console.log(hashMap.hash("Carla"));
// console.log(hashMap.hash("Corbijn"));
// console.log(hashMap.hash("Corlas"));
// console.log(hashMap.hash("Neef"));

// hashMap.set("Carlos", "Test123");
// hashMap.set("Carla", "Test");
// hashMap.set("Carla", "Mogool");

// hashMap.set("Corlas", "Mogool");
// hashMap.set("Neef", "Mogool2");

// console.log(hashMap);

// console.log(`size: ${hashMap.capacity}`);

// console.log(hashMap.get("Corlas"));
// console.log(hashMap.has("Carlas"));

// // console.log(hashMap.remove("Carla"));
// // console.log(hashMap.remove("Carlos"));
// // console.log(hashMap.remove("Corlas"));
// hashMap.set("Corlas", "Mogool");

// console.log(hashMap.capacity);

// console.log(hashMap.keys());
// console.log(hashMap.values());
// console.log(hashMap.entries());
