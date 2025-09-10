class Node {
  constructor(priority, val) {
    if (typeof priority !== "number")
      throw new Error(
        "Priority must be a number. Please provide a value that is number"
      );
    this.value = val;
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
    const idx = this.heap.length - 1;
    const elem = this.heap[this.heap.length - 1];
    while (idx) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.heap[parentIdx];
      if (parent.priority >= elem.priority) break;
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
    const elem = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown();
    return elem;
  }
  sinkDown() {
    let elemIdx = 0;
    let length = this.heap.length;
    let elem = this.heap[elemIdx];
    while (true) {
      let swapIdx = null;
      let leftIdx = 2 * elemIdx + 1;
      let rightIdx = 2 * elemIdx + 2;
      let leftElem, rightElem;
      if (leftIdx < length) {
        leftElem = this.heap[leftIdx];
        if (swapIdx === null && leftElem.priority > elem.priority) {
          swapIdx = leftIdx;
        }
      }

      if (rightIdx < length) {
        rightElem = this.heap[rightIdx];
        if (
          (swapIdx === null && rightElem.priority > elem.priority) ||
          (swapIdx !== null && rightElem.priority > leftElem.priority)
        ) {
          swapIdx = rightIdx;
        }
      }
      if (swapIdx === null) break;
      [this.heap[elemIdx], this.heap[swapIdx]] = [
        this.heap[swapIdx],
        this.heap[elemIdx],
      ];
      elemIdx = swapIdx;
    }
  }
}
