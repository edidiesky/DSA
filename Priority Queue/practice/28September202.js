class PriorityQueue {
    constructor() {
        this.heaps = []
    }
    insert(value, priority){
        const node = new Node(value, priority)
        this.heaps.push(node)
        this.bubbleUp()
        return node.val
    }
    bubbleUp(){
        let idx = this.heaps.length - 1
        let elem = this.heaps[idx]
        while(idx) {
            let parentIdx = Math.floor((idx - 1) /2)
            let parent = this.heaps[parentIdx]
            if(parent.priority >= elem.priority) break
            [this.heaps[idx], this.heaps[parentIdx]] = [this.heaps[parentIdx], this.heaps[idx]]
            idx = parentIdx
        }
    }
    removeMax(){
        if(this.heaps.length === 0) return 0
        if(this.heaps.length === 1) return this.heaps.pop()
        const max = this.heaps.shift()
        this.heaps[0] = this.heaps.pop()
        this.sinkDown()
        return max
    }
    sinkDown(){
        let idx = 0
        let elem = this.heaps[idx]
        let length = this.heaps.length
        while(true) {
            let leftChildIdx = 2 * idx + 1
            let rightChildIdx = 2 * idx + 2
            let leftChild, rightChild
            let swapIdx = null
            if(leftChildIdx < length) {
                leftChild = this.heaps[leftChildIdx]
                if(swapIdx === null && leftChild.priority > elem.priority) {
                    swapIdx = leftChildIdx
                }
            }
             if(rightChildIdx < length) {
                rightChild = this.heaps[rightChildIdx]
                if((swapIdx === null && rightChild.priority > elem.priority)
                && swapIdx !== null && rightChild.priority > leftChild.priority
                ) {
                    swapIdx = rightChildIdx
                }
            }
            if(swapIdx === null) break
            [this.heaps[idx], this.heaps[swapIdx]] = [this.heaps[swapIdx], this.heaps[idx]]
            idx = swapIdx
        }
    }
}

class Node {
    constructor(value, priority) {
        this.value = value
        this.priority = priority
    }
}