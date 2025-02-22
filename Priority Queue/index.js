class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(value, priority) {
    let node  = new Node(value, priority)
    this.queue.push(node);
    this.bubbleUp();
  }
  bubbleUp() {
    const idx = this.queue.length - 1;
    const element = this.queue[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentElement = this.queue[parentIdx];
      if(element.priority <= parentElement.priority) break;
      parentElement = element;
      element = parentElement;
      idx = parentIdx;
    }
  }
  
}
