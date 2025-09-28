class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.heap = [];
  }
  enqueue(val, priority) {
    const node = new Node(val, priority);
    this.heap.push(node);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.heap.length - 1;
    let elem = this.heap[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.heap[parentIdx];
      if (parent >= elem) break;
      [this.heap[idx], this.heap[parentIdx]] = [
        this.heap[parentIdx],
        this.heap[idx],
      ];
      idx = parentIdx;
    }
  }
  dequeue() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const elem = this.heap.shift();
    this.heap[0] = this.heap.pop();
    this.sinkDown();
    return elem;
  }
  sinkDown() {
    let idx = 0;
    let elem = this.heap[idx];
    while (true) {
      let leftChildIdx = idx * 2 + 1;
      let rightChildIdx = idx * 2 + 2;
      let swapIdx = null;
      let leftChild, rightChild;
      if (leftChildIdx < this.heap.length) {
        leftChild = this.heap[leftChildIdx];
        if (swapIdx === null && leftChild.priority > elem.priority) {
          swapIdx = leftChildIdx;
        }
      }
      if (rightChildIdx < this.heap.length) {
        rightChild = this.heap[rightChildIdx];
        if (swapIdx === null && rightChild.priority > elem.priority

          
        ) {
          swapIdx = rightChildIdx;
        }
      }
      if (swapIdx === null) break;

      [this.heap[idx], this.heap[swapIdx]] = [
        this.heap[swapIdx],
        this.heap[idx],
      ];
      idx = swapIdx;
    }
  }
}

let queue = new PriorityQueue();
queue.enqueue("A", 2);
queue.enqueue("B", 21);
queue.enqueue("C", 12);
queue.enqueue("E", 20);

console.log("priority queue:", {
  queue: queue.heap,
});
