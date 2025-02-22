class BinaryHeap {
  constructor() {
    this.value = [41, 39, 33, 18, 27, 12];
  }
  insert(value) {
    this.value.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.value.length - 1;
    const element = this.value[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentElement = this.value[parentIdx];
      if (element <= parentElement) break;
      parentElement = element;
      element = parentElement;
      idx = parentIdx;
    }
  }
  remove() {
    let element = this.value[0];
    let poppedElem = this.value.pop();
    if (this.value.length > 0) {
      this.value[0] = poppedElem;
      this.bubbleDown();
    }
    return element;
  }
  bubbleDown() {
    let idx = 0;
    let length = this.value.length;
    let element = this.value[idx];
    while (true) {
      let swapIdx = null;
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;

      if (leftChildIdx < length) {
        leftChild = this.value[leftChildIdx];
        if (leftChild > element) {
          swapIdx = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.value[rightChildIdx];
        if (
          (swapIdx === null && rightChild > element) ||
          (swapIdx !== null && rightChild > leftChild)
        ) {
          swapIdx = rightChildIdx;
        }
      }
      if (swapIdx === null) break;
      [element, this.value[swapIdx]] = [this.value[swapIdx], element];
      idx = swapIdx;
    }
  }
  /**
   * Remove:
   * check for edge cases
   * store the root, get the last element,
   * push the last element to the top, when the length is !== 0
   * return the root
   * Perform sinkDown:
   * Track the parent idx, element, length
   * perform an infinite loop
   * get the leftChildIdx, rightChildIdx,
   * initiate the leftChild, rightChild
   * get a swapIdx position
   * check if the leftChildIdx is less than value length
   * if true leftChild value becomes the leftChildIdx
   * check also if the leftChild > element, swap = leftChildIdx
   * check if the rightChildIdx is less than value length
   * if true rightChild value becomes the rightChildIdx
   * check also if the rightChild > element && swap == null
   *  || rightChild > leftCXhild
   *  swap = rightChildIdx
   * break if swap is null
   * swap the element with the swap idx eleement
   * let parennt idx = swapIdx
   */
}

let heap = new BinaryHeap();
heap.remove();
console.log(heap);
