const LinkedList = require('./LinkedList')

// Without handleling collisions
class HashMap_no_handle_collision {

  constructor(size = 0) {
    this.hashmap = new Array(size).fill(null)
  }

  // Generate index for array
  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode += hashCode + key.charCodeAt(i)
    }
    // Compressing using modular arithmetic
    const compressed = hashCode % this.hashmap.length
    return compressed
  }

  assign(key, value) {
    const arrayIndex = this.hash(key)
    this.hashmap[arrayIndex] = value
  }

  retrieve(key) {
    const arrayIndex = this.hash(key)
    return this.hashmap[arrayIndex]
  }
  
}

// Test
const myHashMap = new HashMap_no_handle_collision(3)
// Collision with "id" and "Juanjo"
console.log('Hash of "id":', myHashMap.hash('id'))
console.log('Hash of "Juan":', myHashMap.hash('Juan'))
console.log('Hash of "Juanjo":', myHashMap.hash('Juanjo'))

const employees = new HashMap_no_handle_collision(3)
employees.assign('34-567', 'Mara')
console.log('Hashmap of "employees":', employees.hashmap)

const glossary = new HashMap_no_handle_collision(3)
glossary.assign('semordnilap', 'Words that form different words when reversed')
console.log('semordnilap:', glossary.retrieve('semordnilap'))

// Collision in action XD
const parkInventory = new HashMap_no_handle_collision(2);
parkInventory.assign('reed', 'marsh plant');
parkInventory.assign('deer', 'forest animal');
console.log('Value for key "reed":', parkInventory.retrieve('reed'));
console.log('Value for key "deer":', parkInventory.retrieve('deer'));


// Handleling collisions with `separate chaining` strategy
class HashMap {

  constructor(size = 0) {
    this.hashmap = new Array(size)
      .fill(null).map(() => new LinkedList());
  }

  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode += hashCode + key.charCodeAt(i);
    }
    return hashCode % this.hashmap.length;
  }

  assign(key, value) {
    const arrayIndex = this.hash(key);
    const linkedList = this.hashmap[arrayIndex]
    if (linkedList.head === null) {
      linkedList.addToHead({key, value})
      return
    }
  }
}

module.exports = HashMap;

