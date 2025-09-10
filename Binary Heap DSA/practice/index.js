class MaxBinaryHeap {
  constructor() {
    this.stack = [];
  }
  insert(value) {
    this.stack.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    // element, and its index
    let idx = this.stack.length - 1;
    let element = this.stack[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.stack[parentIdx];
      if(element <= parent) break
      [parent, element] = [element, parent]
      idx = parentIdx
    }
    // parent, and its index
  }
}
