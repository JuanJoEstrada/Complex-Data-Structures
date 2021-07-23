/*
This min-heap data structure is implemented as a binary tree. 
Min-heaps efficiently keep track of the minimum value in a dataset, even as we add and remove elements.
Heaps enable solutions for complex problems such as finding the shortest path (Dijkstra’s Algorithm)
or efficiently sorting a dataset (heapsort).
*/

class MinHeap {
  constructor() {
    this.heap = [ null ];
    this.size = 0;
  }

  // remove an element that has no children, in this case, the last element
  popMin() {
    //  If heap is empty return null
    if (this.size === 0) return null
    // Exchange the last element of the heap with the minimum element at index 1
    console.log(`\n... Swap ${this.heap[1]} with last element ${this.heap[this.size]}`);
    this.swap(1, this.size);
    const min = this.heap.pop();
    this.size--;
    console.log(`... Removed ${min} from heap`);
    console.log('...',this.heap);
    this.heapify()
    return min;
  }

  add(value) {
    console.log('Current heap:', this.heap)
    console.log(`... adding "${value}"`)
    this.heap.push(value)
    console.log('Value added:', this.heap)
    this.size ++
    this.bubbleUp()
  }

  bubbleUp() {
    // It points to the added element’s index
    let current = this.size
    // There is a valid current index AND the value at the current index is less than its parent’s value
    while(current > 1 && this.heap[current] < this.heap[getParent(current)]) {
      this.swap(current, getParent(current))
      current = getParent(current)
    }
  }

  // Similar role to .bubbleUp(), except now it's moving down the tree instead of up
  heapify() {
    let current = 1;
    let leftChild = getLeft(current);
    let rightChild = getRight(current);
    
    while (this.canSwap(current, leftChild, rightChild)) {
      if (this.exists(leftChild) && this.exists(rightChild)) {
        if (this.heap[leftChild] < this.heap[rightChild]) {
          this.swap(current, leftChild);
          current = leftChild;
        } else {
          this.swap(current, rightChild);
          current = rightChild;
        }        
      } else {
        this.swap(current, leftChild);
        current = leftChild;
      }
      // Update the left child index and right child index inside the loop
      leftChild = getLeft(current);
      rightChild = getRight(current);
    }
  }

  exists(index) {
    return index <= this.size;
  }

  canSwap(current, leftChild, rightChild) {
    // Check that one of the possible swap conditions exists
    return (
      this.exists(leftChild) && this.heap[current] > this.heap[leftChild]
      || this.exists(rightChild) && this.heap[current] > this.heap[rightChild]
    );
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}

const getParent = current => Math.floor((current / 2));
const getLeft = current => current * 2;
const getRight = current => current * 2 + 1;

module.exports = { 
  MinHeap,
  getParent,
  getLeft,
  getRight
};

// Test
// instantiate MinHeap and assign to minHeap
const minHeap = new MinHeap();

// sample content of minHeap
minHeap.heap = [ null, 10, 13, 21, 61, 22, 23, 99 ];

// display content of minHeap
console.log(minHeap.heap);

const current = 3;
const currentValue = minHeap.heap[current];
console.log(`Current value of ${current} is ${currentValue}`);
console.log(`Parent value of ${currentValue} is ${minHeap.heap[getParent(current)]}`);
console.log(`Left child value of ${currentValue} is ${minHeap.heap[getLeft(current)]}`);
console.log(`Right child value of ${currentValue} is ${minHeap.heap[getRight(current)]}`);

// instantiate a MinHeap class
const minHeap2 = new MinHeap();

// helper function to return a random integer
function randomize() { return Math.floor(Math.random() * 40); }

// populate minHeap with random numbers
for (let i=0; i < 6; i++) {
  minHeap2.add(randomize());
}

// display the bubbled up numbers in the heap
console.log('Bubbled Up', minHeap2.heap);

// remove the minimum value from heap
for (let i=0; i < 6; i++) {
  minHeap2.popMin();
  console.log('Heapified', minHeap2.heap);
}