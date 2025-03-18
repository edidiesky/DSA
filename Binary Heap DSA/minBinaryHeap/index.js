class MinBinaryHeap {
    constructor() {
      this.value = [41, 39, 33, 18, 27, 12];
    }
    insert(value) {
      this.value.push(value);
      this.bubbleUp();
    }
    bubbleUp() {
      let idx = this.value.length - 1;
      let element = this.value[idx];
      while (true) {
        let parentIdx = idx - 1 / 2;
        let parent = this.value[parentIdx];
        if (element >= parent) break;
        [parent, element] = [element, parent];
        idx = parentIdx;
      }
    }
  
    extractMax() {
      let element = this.value.shift();
      let poppedElement = this.value.pop();
      if (this.value.length > 0) {
        this.value[0] = poppedElement;
        this.sinkDown();
      }
      return element;
    }
    sinkDown() {
      let length = this.value.length;
      let idx = 0;
      let element = this.value[idx];
      while (true) {
        let swapIdx = null;
        let leftIdx = 2 * idx + 1;
        let rightIdx = 2 * idx + 1;
        let leftElem, rightElem;
  
        if (leftIdx < length) {
          leftElem = this.value[leftIdx];
          if (swapIdx === null && leftElem < element) {
            swapIdx = leftIdx;
          }
        }
  
        if (rightIdx < length) {
          rightElem = this.value[rightIdx];
          if (
            (swapIdx === null && rightElem < element) ||
            (swapIdx !== null && rightElem < leftElem)
          ) {
            swapIdx = rightIdx;
          }
        }
  
        if (swapIdx === null) break;
        [element, this.value[swapIdx]] = [this.value[swapIdx], element];
        idx = swapIdx;
      }
    }
  }
  
  let heap = new BinaryHeap();
  heap.remove();
  console.log(heap);
  