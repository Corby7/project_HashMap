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
      //   console.log(hashCode);
    }

    return hashCode;
  }

  //can be reworked
  set(key, value) {
    const index = this.hash(key);
    let bucket = this.buckets[index];
    // if (indexedBucket.head === null) {
    //   indexedBucket.append(key, value);
    //   this.size++;
    //   return;
    // }
    let indexFoundNode;
    if ((indexFoundNode = bucket.find(key)) !== null) {
      //code that handles if key value pair already exists
      let node = bucket.at(indexFoundNode);
      node.value = value;
    } else {
      //if collision (different key, same hash)
      bucket.append(key, value);
      this.size++;
    }
    console.log(bucket.toString());
    console.log(bucket.find(value));
  }

  get(key) {
    const index = this.hash(key);
    let bucket = this.buckets[index];
    let indexFoundNode;
    if ((indexFoundNode = bucket.find(key)) !== null) {
      let node = bucket.at(indexFoundNode);
      return node.value;
    } else {
      return null;
    }
  }

  has(key) {
    const index = this.hash(key);
    let bucket = this.buckets[index];
    let indexFoundNode;
    if ((indexFoundNode = bucket.find(key)) !== null) {
      return true;
    } else {
      return false;
    }
  }

  remove(key) {}
}

// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bound");
// }

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
console.log(hashMap.has("Carla"));
