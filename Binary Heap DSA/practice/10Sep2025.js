class Heaps {
    constructor() {
        this.stack = []
    }
    insert(val) {
        this.stack.push(val)
        this.bubbleUp()
    }
    bubbleUp() {
        const idx = this.stack.length -1
        const elem = this.stack[this.stack.length -1]
        while(idx) {
            let parentIdx = Math.floor((idx - 1)/ 2)
            let parent = this.stack[parentIdx]
            if(parent >= elem) break
            [this.stack[idx], this.stack[parentIdx]] = [this.stack[parentIdx], this.stack[idx]]
            idx = parentIdx
        }
    }
    removeHeap() {
        // const elem = this.stack.shift() // this is 0(n)
        const elem = this.stack[0]
        const lastElem = this.stack.pop()
        if(this.stack.length >0) {
            this.stack[0] = lastElem
            this.sinkDown()
        }
        return elem
    }
    sinkDown() {
        let elemIdx = 0
        let length = this.stack.length
        let elem = this.stack[elemIdx]
        while(true) {
            let swapIdx = null
            let leftIdx = 2 * elemIdx + 1
            let rightIdx = 2 * elemIdx + 2
            let leftElem, rightElem
            if(leftIdx < length) {
                leftElem = this.stack[leftIdx]
                if(swapIdx === null && leftElem > elem) {
                    swapIdx = leftIdx
                }
            }

             if(rightIdx < length) {
                rightElem = this.stack[rightIdx]
                if((swapIdx === null && rightElem > elem)
                || swapIdx !== null && rightElem > leftElem
                ) {
                    swapIdx = rightIdx
                }
            }
            if(swapIdx === null) break
            [elem, this.stack[swapIdx]] = [this.stack[swapIdx], elem]
            elemIdx = swapIdx
        }
    }
}